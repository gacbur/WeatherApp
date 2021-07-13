import { Dispatch } from 'redux'
import { City } from './savedCitiesActionTypes'
import { ADD_NEW_CITY, REMOVE_CITY, SavedCitiesDispatchTypes } from './savedCitiesActionTypes'

export const addNewCity = (city: City) => (dispatch: Dispatch<SavedCitiesDispatchTypes>, getState: any) => {
    dispatch({
        type: ADD_NEW_CITY,
        payload: city
    })
    localStorage.setItem('savedCities', JSON.stringify(getState().pinnedJobs.pinnedJobs))
}

export const removeCity = (id: string) => (dispatch: Dispatch<SavedCitiesDispatchTypes>, getState: any) => {
    dispatch({
        type: REMOVE_CITY,
        payload: id
    })
    localStorage.setItem('savedCities', JSON.stringify(getState().pinnedJobs.pinnedJobs))
}


