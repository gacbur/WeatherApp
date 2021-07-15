import { FC, useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { addNewCity } from '../../redux/savedCities/savedCitiesActions'
import { RootStore } from '../../redux/Store'

import { SearchItem, AlreadySaved, SearchItemWrapper } from './SearchResultItemElements'

import { QuickSearchItemType as result } from '../search/Search'

import { AiFillPlusCircle } from 'react-icons/ai'

type QuickSearchItemProps = {
    resultItem: result,
    setOpened: (open: boolean) => void
}

const SearchResultItem: FC<QuickSearchItemProps> = ({ resultItem, setOpened }) => {

    const [alreadySaved, setAlreadySaved] = useState<boolean>(false)

    const dispatch = useDispatch()

    const cities = useSelector((state: RootStore) => state.savedCities.cities)

    const handleAddToSavedCitites = (resultItem: result) => {
        if (cities.find(item => item.id === resultItem.id)) {
            return null
        } else {
            dispatch(addNewCity(resultItem))
            setOpened(false)
        }
    }

    useEffect(() => {
        if (cities.find(item => item.id === resultItem.id)) {
            setAlreadySaved(true)
        } else {
            setAlreadySaved(false)
        }
    }, [resultItem, cities])

    return (
        <SearchItemWrapper>
            <SearchItem
                onClick={() => handleAddToSavedCitites(resultItem)}
            >
                <h4>{resultItem.name}</h4>
                <i ><AiFillPlusCircle className="icon" /></i>
            </SearchItem>
            {
                alreadySaved &&
                <AlreadySaved>
                    {resultItem.name} is already saved!
                </AlreadySaved>
            }
        </SearchItemWrapper>
    )
}

export default SearchResultItem
