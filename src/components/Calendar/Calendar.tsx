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


function Calendar() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const calendarRef: any = useRef()

  const [startDate, setStartDate] = useState<Date | null>(null)

  const onDatePickerChange = (date: Date) => {
    setStartDate(date)
    calendarRef.current?.getApi().gotoDate(new Date(date))
  }

  const { modal } = useModalContext()

  const openModal = modal(({
    content: <CalendarDisplay calendarRef={calendarRef} />
  }))

  return (
    <Wrapper className='demo-app'>
      {!startDate && (
        <DatePicker
          selected={startDate}
          onChange={onDatePickerChange}
          locale={'en'}
          customInput={<img src={CalendarLogo} alt={'calendar-logo'} style={{ width: 48 }} />}
        />
      )}

      <CalendarWrapper visible={startDate ? 'visible' : 'hidden'}>
        <div className={'button-wrapper'}>
          <Button type={'primary'} onClick={() => setStartDate(null)} size={'large'}>
            <CloseOutlined />
          </Button>
        </div>
        {/* <CalendarDisplay calendarRef={calendarRef} /> */}
      </CalendarWrapper>
    </Wrapper>
  )
}

const Wrapper = styled('div')({
  width: '90%',
  margin: '5%',
  '.react-datepicker__triangle': {
    display: 'none',
  },
})

interface CalendarWrapperProps {
  visible: CSS.Property.Visibility
}

const CalendarWrapper = styled('div')({}, ({ visible }: CalendarWrapperProps) => ({
  visibility: visible,
  '.button-wrapper': {
    textAlign: 'right',
    marginBottom: 24,
  },
}))

export default Calendar
