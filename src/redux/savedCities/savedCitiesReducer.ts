import { QuickSearchItemType as City } from '../../components/search/Search'
import { ADD_NEW_CITY, REMOVE_CITY, MOVE_CITY, SavedCitiesDispatchTypes } from './savedCitiesActionTypes'

interface InitialStateI {
    cities: City[]
}

const initialState: InitialStateI = {
    cities: localStorage.getItem('savedCities') ? JSON.parse(localStorage.getItem('savedCities') || '{}') : []
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
            const tempSavedCities = [...state.cities]
            return {
                cities: tempSavedCities.filter(city => city.id !== action.payload)
            }
        case MOVE_CITY:

            const { currentIndex, moveValue } = action.payload

            let tempCities = [...state.cities]

            const newIndex = currentIndex + moveValue
            const element = tempCities[currentIndex]

            tempCities.splice(currentIndex, 1)
            tempCities.splice(newIndex, 0, element)

            return {
                cities: tempCities
            }

        default:
            return state
    }
}

export default savedCitiesReducer