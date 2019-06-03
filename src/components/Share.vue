<template>
  <div>
    <div class="widget--navigation widget--subtitle-nav w3-xlarge text-center my-5">
      <a
        class="widget--hover-color mx-3"
        @click="shareTwitter"
        data-toggle="tooltip"
        data-placement="top"
        :title="shareOnTwitterMessage"
      >
        <i class="fa fa-twitter" aria-hidden="true"></i>
      </a>
      <a
        class="widget--hover-color mx-3"
        @click="shareFacebook"
        data-toggle="tooltip"
        data-placement="top"
        :title="shareOnFacebookMessage"
      >
        <i class="fa fa-facebook-official" aria-hidden="true"></i>
      </a>
      <!-- <span class="widget--hover-color mx-3" data-toggle="tooltip" data-placement="top" :title="shareOnFacebookMessage">
              <i class="fa fa-facebook-official" aria-hidden="true"></i>
      </span>-->
      <!-- <span class="widget--hover-color mx-3" data-toggle="tooltip" data-placement="top" :title="directMessage">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53 44" fill="currentColor" focusable="false" class="widget--hover-color">
                <path d="M53,11v33H0V11c4.3,10.3,14.6,17.6,26.5,17.6C38.4,28.6,48.7,21.3,53,11z M2.2,0c0,13.4,10.9,24.2,24.3,24.2
                c13.4,0,24.3-10.8,24.3-24.2"></path>
              </svg>
      </span>-->
      <a
        class="widget--hover-color mx-3"
        data-toggle="tooltip"
        data-placement="top"
        :title="shareLinkMessage"
        :data-clipboard-text="fullLink"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1067.02 1067"
          fill="currentColor"
          focusable="false"
          class="widget--hover-color"
        >
          <path
            d="M738,409,631.31,515.72h0l-80.11-80L658,329,329,0,0,329,329,658,435.71,551.28l80.07,80.1L409,738l329,329,329-329Zm-409,8.94-88.91-89L329,240.06,417.91,329Zm329,329L746.91,658l88.92,88.89-88.92,88.91Z"
          ></path>
        </svg>
      </a>
      <a
        class="mx-3"
        data-toggle="tooltip"
        data-placement="top"
        :title="printMessage"
        @click="printPage"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 120 120"
          fill="currentColor"
          focusable="false"
          class="widget--hover-color"
        >
          <path
            d="M24,0V24H96V0ZM96,30H24A24.08,24.08,0,0,0,0,54V90H24v30H96V90h24V54A24.08,24.08,0,0,0,96,30ZM84,108H36V78H84Zm18-54a5.66,5.66,0,0,1-6-6,6,6,0,0,1,12,0A5.66,5.66,0,0,1,102,54Z"
          ></path>
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["link"],
  computed: {
    ...mapGetters(["language"]),
    fullLink() {
      return "cabemery.org" + this.link;
    },
    english() {
      if (this.language == "en") {
        return true;
      }
      return false;
    },
    french() {
      if (this.language == "fr") {
        return true;
      }
      return false;
    },
    shareOnTwitterMessage() {
      return this.french ? "Partager sur Twitter" : "Share on Twitter";
    },
    shareOnFacebookMessage() {
      return this.french ? "Partager sur Facebook" : "Share on Facebook";
    },
    directMessage() {
      return this.french ? "Message direct" : "Direct message";
    },
    shareLinkMessage() {
      return this.french ? "Copier le lien" : "Copy link";
    },
    printMessage() {
      return this.french ? "Imprimer la page" : "Print this page";
    }
  },
  methods: {
    shareFacebook() {
      var text = "Share on Facebook: www.cabemery.org" + this.link;
      window.open(
        "http://facebook.com/sharer/sharer.php?u=" +
          encodeURIComponent(this.fullLink) +
          "&text=" +
          encodeURIComponent(text),
        "",
        "left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0"
      );
    },
    shareTwitter() {
      var text = "Share on Twitter: www.cabemery.org" + this.link;
      // window.open('http://twitter.com/share?url='+encodeURIComponent(this.fullLink)+, '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
      window.open(
        "http://twitter.com/share?url=" +
          encodeURIComponent(this.fullLink) +
          "&text=" +
          encodeURIComponent(text),
        "",
        "left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0"
      );
    },
    // copyLink() {
    //     var copyText = this.fullLink;
    //     document.execCommand("copy");
    //     alert("Link copied: " + copyText);
    // },
    printPage() {
      return window.print();
    }
  }
};
</script>

