export const ADD_NEW_CITY = "ADD_NEW_CITY"
export const REMOVE_CITY = "REMOVE_CITY"

type CurrentWeather = {
    id: number,
    main: string,
    country: string,
    description: string,
    icon: string
}

type CurrentWeatherTemp = {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number
}

export type City = {
    id: number,
    name: string,
    currentWeatherDesc: CurrentWeather,
    currentTemp: CurrentWeatherTemp
}

export interface AddNewCity {
    type: typeof ADD_NEW_CITY,
    payload: City
}

export interface RemoveFromPinned {
    type: typeof REMOVE_CITY,
    payload: string
}

export type SavedCitiesDispatchTypes = AddNewCity | RemoveFromPinned