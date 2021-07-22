export type FourtyEightHours = {
    weatherId: number,
    weatherMain: string,
    weatherDesc: string,
    weatherIcon: string,
    temp: number,
    humidity: number,
    pressure: number
}

export type SevenDays = {
    weatherId: number,
    weatherMain: string,
    weatherDesc: string,
    weatherIcon: string,
    temp: number,
    humidity: number,
    pressure: number,
    sunriseTime: number,
    sunsetTime: number,
    mornTemp: number,
    dayTemp: number,
    eveTemp: number,
    nightTemp: number
}