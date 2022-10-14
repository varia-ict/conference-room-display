import { useCallback, useRef, useState } from 'react'
import FullCalendar, { CustomContentGenerator, DateSelectArg, EventApi, EventClickArg, EventContentArg } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import allLocales from '@fullcalendar/core/locales-all'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import { INITIAL_EVENTS, createEventId } from './event-utils'

interface CalendarProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  calendarRef?: any
}
function CalendarDisplay({ calendarRef }: CalendarProps) {
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([])
  const handleEvents = useCallback((events: EventApi[]) => setCurrentEvents(events), [])
  const handleDateSelect = useCallback((selectInfo: DateSelectArg) => {

    let title = prompt('Please enter the title of the event')?.trim()
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect()

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      })
    }
  }, [])
  const handleEventClick = useCallback((clickInfo: EventClickArg) => {
    if (window.confirm(`Delete [${clickInfo.event.title}] event?`)) {
      clickInfo.event.remove()
    }
  }, [])

  const renderEventContent = (eventContent: EventContentArg) => (
    <>
      <b>{eventContent.timeText}</b>
      <i>{eventContent.event.title}</i>
    </>
  )

  return (
    <div style={{background: "#fff"}}>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin ]}
        headerToolbar={{
          start: 'prev,next today',
          center: 'title',
          end: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        weekText='week'
        initialView='dayGridMonth'
        eventContent={(e) => renderEventContent(e)}
        selectable={true}
        editable={false}
        selectMirror={true}
        dayMaxEvents={true}
        navLinks={true}
        businessHours={true}
        initialEvents={INITIAL_EVENTS}
        locales={allLocales}
        locale='fi-FI'
        slotMinTime={"07:00:00"}
        slotMaxTime={"18:00:00"}
        height={"auto"}
        // eventsSet={handleEvents}
        // select={handleDateSelect}
        // eventClick={handleEventClick}
        
      />

    </div>
  )
}

export default CalendarDisplay
