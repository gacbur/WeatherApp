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

    const [width, setWidth] = useState<number>(0)

    const getInnerWidth = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        setWidth(window.innerWidth)

        window.addEventListener('resize', getInnerWidth);

        return () => window.removeEventListener('resize', getInnerWidth)
    }, [width])


    const [flatViewAddNew, setflatViewAddNew] = useState<boolean>(false)

    const cities = useSelector((state: RootStore) => state.savedCities.cities)

    useEffect(() => {
        if (cities.length % 3 === 0 && width > 1100) {
            setflatViewAddNew(true)
        } else {
            setflatViewAddNew(false)
        }
    }, [cities, width])

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
