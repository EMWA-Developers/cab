import moment from 'moment'

export default (value) => {
  moment.locale('fr')
  return moment(value).calendar()
}
