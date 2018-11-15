/*
 * @Author: wuchenge
 * @Date:   2018-11-15 16:44:11
 * @Last Modified by:   wuchenge
 * @Last Modified time: 2018-11-15 16:44:25
 */

import moment from 'moment'
import 'moment/locale/zh-cn'

const diffForHumans = (date, format = 'YYYYMMDD H:mm:ss') => {
  moment.locale('zh-cn')
  return moment(date, format).fromNow()
}

export default {
  diffForHumans
}
