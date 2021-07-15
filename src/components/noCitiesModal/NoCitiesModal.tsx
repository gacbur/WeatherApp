import { useState, useEffect } from 'react'

import { ClipLoader } from 'react-spinners'

import { useSelector, useDispatch } from 'react-redux'

import { RootStore } from '../../redux/Store'
import { addNewCity } from '../../redux/savedCities/savedCitiesActions'

import SearchBar from '../search/Search'
import { useGetCityByLocalization } from '../../hooks/useGetCityByLocalization'

import { NoCititesModalWrapper, MainContent, ButtonsWrapper, LocaliztionButton, SearchByCityButton } from './NoCititesModalElements'

import { MdMyLocation } from 'react-icons/md'
import { BiSearch } from 'react-icons/bi'

const NoCitiesModal = () => {

    const dispatch = useDispatch()

    const [searchActive, setSearchActive] = useState<boolean>(false)

    const [getCity, setGetCity] = useState<boolean>(false)

    const [city, cityLoading, cityError] = useGetCityByLocalization(getCity, setGetCity)

    const cities = useSelector((state: RootStore) => state.savedCities.cities)

    useEffect(() => {
        if (city.length > 0) {
            const setCity = () => {
                console.log('XDDDD')
                if (cities.find(item => item.id === city[0].id)) {
                    return null
                } else {
                    dispatch(addNewCity(city[0]))
                }
            }
            setCity()
        }
    }, [city])

    return (
        <NoCititesModalWrapper citiesLengthEqualZero={cities.length === 0}>
            <MainContent>
                <h3 className="title-big">
                    Currently there are no weather information tracked for any city.
                </h3>
                <h4 className="title-small">Pick the way to add a new city:</h4>
                <ButtonsWrapper>
                    <LocaliztionButton
                        onClick={() => setGetCity(true)}
                    >
                        {!cityLoading && <span>Add by current localization <i className="icon"><MdMyLocation /></i></span>}
                        {cityLoading && <span>Getting the location <i className="icon"><ClipLoader color="white" size={25} /></i></span>}
                    </LocaliztionButton>
                    <SearchByCityButton
                        onClick={() => setSearchActive(true)}
                    >
                        Add by searching for city name <i className="icon"><BiSearch /></i>
                    </SearchByCityButton>
                </ButtonsWrapper>
                <SearchBar isOpened={searchActive} setOpened={setSearchActive} />
            </MainContent>
        </NoCititesModalWrapper>
    )
}

export default NoCitiesModal
