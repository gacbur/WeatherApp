import { QuickSearchItemType as City } from '../../components/search/Search'

export const ADD_NEW_CITY = "ADD_NEW_CITY"
export const REMOVE_CITY = "REMOVE_CITY"

export interface AddNewCity {
    type: typeof ADD_NEW_CITY,
    payload: City
}

export interface RemoveFromPinned {
    type: typeof REMOVE_CITY,
    payload: string
}

export type SavedCitiesDispatchTypes = AddNewCity | RemoveFromPinned