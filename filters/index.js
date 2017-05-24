import moment from 'moment'

export function prettyDate (dateString) {
  const now = moment()
  const date = moment.parseZone(dateString).local()
  const diff = now.diff(date, 'days')
  return diff > 30 ? date.format('ddd, MMMM D, YYYY') : date.fromNow()
}
