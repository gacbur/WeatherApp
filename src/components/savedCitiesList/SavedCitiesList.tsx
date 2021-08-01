import { FC, useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import { RootStore } from '../../redux/Store'

import { SavedCityListWrapper } from './SavedCitiesListElements'

import SavedCityItem from '../../components/savedCityItem/SavedCityItem'
import AddNewCityCard from '../addNewCityCard/AddNewCityCard'

type SavedCitiesListProps = {
    setOpened: (open: boolean) => void;
}

const SavedCitiesList: FC<SavedCitiesListProps> = ({ setOpened }) => {

    const [flatViewAddNew, setflatViewAddNew] = useState<boolean>(false)

    const cities = useSelector((state: RootStore) => state.savedCities.cities)

    useEffect(() => {
        if (cities.length % 3 === 0) {
            setflatViewAddNew(true)
        } else {
            setflatViewAddNew(false)
        }
    }, [cities])

    return (
        <SavedCityListWrapper>
            {cities.map(city => {
                return <SavedCityItem key={city.id} city={city} setOpened={setOpened} />
            })}
            <AddNewCityCard setSearchModalOpened={setOpened} flatViewAddNew={flatViewAddNew} />
        </SavedCityListWrapper>
    )
}

export default SavedCitiesList
