import { EventInput } from '@fullcalendar/react'

let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today
export const createEventId = () => String(eventGuid++)
const now = Date.now();

export const INITIAL_EVENTS: EventInput[] = [
  {
    // id: createEventId(),
    id: '1',
    title: 'All-day event',
    // start: todayStr,
    start: now,
    end: new Date(now).setHours(now + 3),
  },
  {
    // id: createEventId(),
    id: '2',
    title: 'Timed event',
    start: todayStr + 'T12:00:00',
    end: new Date(now).setHours(now + 3),    
  },
  {
    // id: createEventId(),
    id: '3',
    title: 'Timed event',
    start: todayStr + 'T12:00:00',
    end: new Date(now).setHours(now + 3),
  },
  {
    // id: createEventId(),
    id: '4',
    title: 'Timed event',
    start: new Date(now).setDate(new Date(now).getDay() + 1),
    end: new Date(now).setDate(new Date(now).getDay() + 1),
  },
]
