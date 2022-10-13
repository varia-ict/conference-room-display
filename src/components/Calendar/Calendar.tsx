import styled from '@emotion/styled'
import { useRef, useState } from 'react'
import CalendarDisplay from './CalendarDisplay'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { CloseOutlined } from '@ant-design/icons'
import CalendarLogo from './logo.png'
import { Button } from 'antd'
import * as CSS from 'csstype'
import { useModalContext } from '@rintsin/common-components'
import CalendarButton from '../calendarButton/calendarButton'


function Calendar() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const calendarRef: any = useRef()

  const [startDate, setStartDate] = useState<Date | null> (null)

  const onDatePickerChange = (date: Date) => {
    setStartDate(date)
    calendarRef.current?.getApi().gotoDate(new Date(date))
  }

  const { modal } = useModalContext()

  const openModal = () => {
    modal((
      {
        content: <CalendarDisplay calendarRef={calendarRef} />
      }))
  }

  return <CalendarButton onClick={openModal} />
  
}

const Wrapper = styled('div')({
  width: '90%',
  margin: '5%',
  '.react-datepicker__triangle': {
    display: 'none',
  },
})

interface CalendarWrapperProps {
  visible: 'visible' | 'hidden'
}

const CalendarWrapper = styled('div')({}, ({ visible }: CalendarWrapperProps) => ({
  visibility: visible,
  '.button-wrapper': {
    textAlign: 'right',
    marginBottom: 24,
  },
}))

export default Calendar
