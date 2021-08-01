import { useState, useEffect, FC } from 'react'

import { ClipLoader } from 'react-spinners'

import { useSelector, useDispatch } from 'react-redux'

import { RootStore } from '../../redux/Store'
import { addNewCity } from '../../redux/savedCities/savedCitiesActions'

import { BsFillPlusCircleFill } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import { MdMyLocation } from 'react-icons/md'
import { BsExclamationTriangleFill } from 'react-icons/bs'

import { AddNewCityCardWrapper, ButtonsWrapper, SearchByCityButton, LocaliztionButton } from './AddNewCityCardElements'

import { useGetCityByLocalization } from '../../hooks/useGetCityByLocalization'

type AddNewCityCardProps = {
    setSearchModalOpened: (open: boolean) => void;
    flatViewAddNew: boolean
}

const AddNewCityCard: FC<AddNewCityCardProps> = ({ setSearchModalOpened, flatViewAddNew }) => {

    const dispatch = useDispatch()

    const cities = useSelector((state: RootStore) => state.savedCities.cities)

    const [getCity, setGetCity] = useState<boolean>(false)

    const [city, cityLoading, cityError, locationError, locationErrorMessage] = useGetCityByLocalization(getCity, setGetCity)

    useEffect(() => {
        if (city.length > 0) {
            const setCity = () => {
                if (cities.find(item => item.id === city[0].id)) {
                    return null
                } else {
                    dispatch(addNewCity(city[0]))
                }
            }
            setCity()
        }
    }, [city, cities, dispatch])

    return (
        <AddNewCityCardWrapper
            flatView={flatViewAddNew}
        >
            <i className="icon-background">
                <BsFillPlusCircleFill />
            </i>
            <ButtonsWrapper
                flatView={flatViewAddNew}
            >
                <SearchByCityButton
                    onClick={() => setSearchModalOpened(true)}
                >
                    Add by city name <i className="icon"><BiSearch /></i>
                </SearchByCityButton>
                <LocaliztionButton
                    onClick={() => setGetCity(true)}
                >
                    {!cityLoading && !cityError && !locationError ? <span>Add by localization <i className="icon"><MdMyLocation /></i></span> : null}
                    {cityLoading && <span>Getting the location <i className="icon"><ClipLoader color="white" size={25} /></i></span>}
                    {cityError && <span>Failed getting city, Try refreshing! <i className="icon"><BsExclamationTriangleFill /></i></span>}
                    {locationError && <span>{locationErrorMessage} <i className="icon"><BsExclamationTriangleFill /></i></span>}
                </LocaliztionButton>
            </ButtonsWrapper>
        </AddNewCityCardWrapper>
    )
}

export default AddNewCityCard
