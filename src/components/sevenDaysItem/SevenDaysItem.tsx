import { FC } from 'react'

import { SevenDays } from '../weatherDetails/WeatherDetailsTypes'

import { SevenDaysWrapper } from './SevenDaysItemElements'

type FourtyEightHoursItemProps = {
    weatherItem: SevenDays,
}

const SevenDaysItem: FC<FourtyEightHoursItemProps> = ({ weatherItem }) => {

    const { weatherDesc, weatherIcon, dt, mornTemp, dayTemp, nightTemp, temp } = weatherItem

    const getDayOfTheWeek = (timestamp: number) => {
        const date = new Date(timestamp * 1000)
        let thisDate;

        thisDate = date.getUTCDay()
        switch (thisDate) {
            case 1:
                thisDate = "Monday"
                break;
            case 2:
                thisDate = "Tuesday"
                break;
            case 3:
                thisDate = "Wednesday"
                break;
            case 4:
                thisDate = "Thursday"
                break;
            case 5:
                thisDate = "Friday"
                break;
            case 6:
                thisDate = "Saturday"
                break;
            case 0:
                thisDate = "Sunday"
                break;
            default:
                break;

        }
        return thisDate
    }

    const getDateAndMonth = (timestamp: number) => {
        const date = new Date(timestamp * 1000)
        let thisDate;

        let day = date.getDate();
        let month: number | string = date.getMonth();
        switch (month) {
            case 0:
                month = "January"
                break;
            case 1:
                month = "February"
                break;
            case 2:
                month = "March"
                break;
            case 3:
                month = "April"
                break;
            case 4:
                month = "May"
                break;
            case 5:
                month = "June"
                break;
            case 6:
                month = "July"
                break;
            case 7:
                month = "August"
                break;
            case 8:
                month = "September"
                break;
            case 9:
                month = "October"
                break;
            case 10:
                month = "November"
                break;
            case 11:
                month = "December"
                break;
            default:
                break;
        }
        thisDate = `${day} ${month}`
        return thisDate
    }

    return (
        <>
            {weatherItem && <SevenDaysWrapper>
                <div className="main-info-cnt">
                    <span className="day-date-cnt">
                        <h5 className="day">{getDayOfTheWeek(dt)}</h5>
                        <h5 className="date">{getDateAndMonth(dt)}</h5>
                    </span>
                    <img className="weather-icon" src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt="" />
                    <h4 className="temp">{temp.toFixed(0) + '°C'}</h4>
                    <h4 className="desc">{weatherDesc}</h4>
                </div>
                <div className="time-of-day-temp-cnt">
                    <div className="morning-temp-cnt">
                        <h4 className="title">
                            Morning
                        </h4>
                        <div className="temp">
                            {mornTemp.toFixed(0) + '°C'}
                        </div>
                    </div>
                    <div className="day-temp-cnt">
                        <h4 className="title">
                            Day
                        </h4>
                        <div className="temp">
                            {dayTemp.toFixed(0) + '°C'}
                        </div>
                    </div>
                    <div className="night-temp-cnt">
                        <h4 className="title">
                            Night
                        </h4>
                        <div className="temp">
                            {nightTemp.toFixed(0) + '°C'}
                        </div>
                    </div>
                </div>

            </SevenDaysWrapper>}
        </>
    )
}

export default SevenDaysItem
