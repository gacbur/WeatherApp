import { useState } from 'react'

import { useSelector } from 'react-redux'

import { RootStore } from '../../redux/Store'

import SearchBar from '../../components/search/Search'

import { MainPageWrapper } from './MainPageElements'

import NoCitiesModal from '../../components/noCitiesModal/NoCitiesModal'
import SavedCitiesList from '../../components/savedCitiesList/SavedCitiesList'

const MainPage = () => {

    const [searchActive, setSearchActive] = useState<boolean>(false)

    const cities = useSelector((state: RootStore) => state.savedCities.cities)

    return (
        <>
            <MainPageWrapper>
                <NoCitiesModal />
                {cities.length > 0 && <SavedCitiesList setOpened={setSearchActive} />}
                <SearchBar isOpened={searchActive} setOpened={setSearchActive} />
            </MainPageWrapper>
        </>
    )
}

export default MainPage
