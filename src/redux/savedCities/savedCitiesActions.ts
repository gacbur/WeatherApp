import { Dispatch } from 'redux'
import { QuickSearchItemType as City } from '../../components/search/Search'
import { ADD_NEW_CITY, REMOVE_CITY, MOVE_CITY, SavedCitiesDispatchTypes } from './savedCitiesActionTypes'

export const addNewCity = (city: City) => (dispatch: Dispatch<SavedCitiesDispatchTypes>, getState: any) => {
    dispatch({
        type: ADD_NEW_CITY,
        payload: city
    })
    localStorage.setItem('savedCities', JSON.stringify(getState().savedCities.cities))
}

export const removeCity = (id: number) => (dispatch: Dispatch<SavedCitiesDispatchTypes>, getState: any) => {
    dispatch({
        type: REMOVE_CITY,
        payload: id
    })
    localStorage.setItem('savedCities', JSON.stringify(getState().savedCities.cities))
}

export const moveCity = (currentIndex: number, moveValue: number) => (dispatch: Dispatch<SavedCitiesDispatchTypes>, getState: any) => {
    dispatch({
        type: MOVE_CITY,
        payload: {
            currentIndex,
            moveValue
        }
    })
    localStorage.setItem('savedCities', JSON.stringify(getState().savedCities.cities))
}


