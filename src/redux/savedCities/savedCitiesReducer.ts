import { City } from './savedCitiesActionTypes'
import { ADD_NEW_CITY, REMOVE_CITY, SavedCitiesDispatchTypes } from './savedCitiesActionTypes'

interface InitialStateI {
    cities: City[]
}

const initialState: InitialStateI = {
    cities: localStorage.getItem('savedCities') ? JSON.parse(localStorage.getItem('pinnedJobs') || '{}') : []
}

const savedCitiesReducer = (state: InitialStateI = initialState, action: SavedCitiesDispatchTypes): InitialStateI => {
    switch (action.type) {
        case ADD_NEW_CITY:
            if (state.cities.includes(action.payload)) {
                return state
            } else {
                return {
                    cities: [...state.cities, action.payload]
                }
            }
        case REMOVE_CITY:
            return state
        default:
            return state
    }
}

export default savedCitiesReducer