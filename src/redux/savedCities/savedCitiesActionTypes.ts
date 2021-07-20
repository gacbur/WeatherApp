import { QuickSearchItemType as City } from '../../components/search/Search'

export const ADD_NEW_CITY = "ADD_NEW_CITY"
export const REMOVE_CITY = "REMOVE_CITY"
export const MOVE_CITY = "MOVE_CITY"

export interface AddNewCity {
    type: typeof ADD_NEW_CITY,
    payload: City
}

export interface RemoveFromSaved {
    type: typeof REMOVE_CITY,
    payload: number
}

export type moveCityPayload = {
    currentIndex: number,
    moveValue: number
}

export interface MoveCity {
    type: typeof MOVE_CITY,
    payload: moveCityPayload
}

export type SavedCitiesDispatchTypes = AddNewCity | RemoveFromSaved | MoveCity