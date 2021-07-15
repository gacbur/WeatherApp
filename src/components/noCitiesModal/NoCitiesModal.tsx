import { useState } from 'react'

import { useSelector } from 'react-redux'

import { RootStore } from '../../redux/Store'

import SearchBar from '../search/Search'

import { NoCititesModalWrapper, MainContent, ButtonsWrapper, LocaliztionButton, SearchByCityButton } from './NoCititesModalElements'

import { MdMyLocation } from 'react-icons/md'
import { BiSearch } from 'react-icons/bi'

const NoCitiesModal = () => {

    const [searchActive, setSearchActive] = useState<boolean>(false)

    const cities = useSelector((state: RootStore) => state.savedCities.cities)

    return (
        <NoCititesModalWrapper citiesLengthEqualZero={cities.length === 0}>
            <MainContent>
                <h3 className="title-big">
                    Currently there are no weather information tracked for any city.
                </h3>
                <h4 className="title-small">Pick the way to add a new city:</h4>
                <ButtonsWrapper>
                    <LocaliztionButton>
                        Add by current localization <i className="icon"><MdMyLocation /></i>
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
