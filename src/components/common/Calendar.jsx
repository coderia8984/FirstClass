import { DatePicker } from 'antd'
import React from 'react'

function Calendar(onChangeDate) {
  return (
    <DatePicker placeholder="떠나는 날짜" onChange={onChangeDate} />
  )
}

export default Calendar