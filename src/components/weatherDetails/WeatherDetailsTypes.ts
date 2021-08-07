export type FourtyEightHours = {
    weatherId: number,
    weatherMain: string,
    weatherDesc: string,
    weatherIcon: string,
    dt: number,
    dtCurrent: number,
    temp: number,
    humidity: number,
    pressure: number,
    timezone: number,
    timezone_name: string
}

export type SevenDays = {
    weatherId: number,
    weatherMain: string,
    weatherDesc: string,
    weatherIcon: string,
    dt: number,
    temp: number,
    humidity: number,
    pressure: number,
    sunriseTime: number,
    sunsetTime: number,
    mornTemp: number,
    dayTemp: number,
    eveTemp: number,
    nightTemp: number,
    timezone: number
}