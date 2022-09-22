import React from "react"
import styles from "./components/reservation/reservation.module.scss";

type ReservationProps = {
status: boolean
time: string
}

const Reservation: React.FC<ReservationProps> = ({ time, status }) => {
    return (
        <div className={styles.card}>
            <h1>{time}</h1>
            <h1>{status}</h1>
        </div>
    )
}

export default Reservation



