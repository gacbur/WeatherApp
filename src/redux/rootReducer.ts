import { combineReducers } from 'redux'

import savedCitiesReducer from './savedCities/savedCitiesReducer'

const RootReducer = combineReducers({
    savedCities: savedCitiesReducer
})

export default RootReducer