import CalendarButton from './calendarButton';

export function Home() {

    return (
        <div >
            <CalendarButton startDate='2022-09-19' endDate='2022-09-23'></CalendarButton>
            <CalendarButton startDate='2022-09-13' endDate='2023-09-23'></CalendarButton>


        </div>
    )

}

export default Home