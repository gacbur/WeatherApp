import { FC, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { removeCity, moveCity } from '../../redux/savedCities/savedCitiesActions'

import { SavedCityOptionsWrapper, Option } from './SavedCityOptionsElements'

import { QuickSearchItemType as City } from '../../components/search/Search'
import { RootStore } from '../../redux/Store'

import { MdDeleteForever } from 'react-icons/md'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'

type SavedCityOptionsProps = {
    cityId: number,
    setOptionsOpened: any,
    optionsButtonEl: any,
    CityOptionsEl: any
}

const Options = [
    { id: 1, name: 'Delete', icon: <MdDeleteForever /> },
    { id: 2, name: 'Move up', icon: <IoIosArrowUp /> },
    { id: 3, name: 'Move down', icon: <IoIosArrowDown /> },
]

const SavedCityOptions: FC<SavedCityOptionsProps> = ({ cityId, setOptionsOpened, optionsButtonEl, CityOptionsEl }) => {

    const dispatch = useDispatch()

    const cities = useSelector((state: RootStore) => state.savedCities.cities)

    const useClickOutsideOptions = (CityOptionsEl: any, optionsButtonEl: any) => {
        useEffect(() => {
            const handleClickOutside = (event: any) => {
                if (CityOptionsEl.current && !CityOptionsEl.current.contains(event.target)) {
                    if (optionsButtonEl.current && !optionsButtonEl.current.contains(event.target)) {
                        setOptionsOpened(false)
                    }
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [CityOptionsEl, optionsButtonEl]);
    }

    useClickOutsideOptions(CityOptionsEl, optionsButtonEl)

    const handleBtnAction = (actionId: number) => {
        if (actionId === 1) {
            dispatch(removeCity(cityId))
        }
        if (actionId === 2) {
            const currentIndex = [...cities].findIndex((city: City) => city.id === cityId)
            if (currentIndex !== 0)
                dispatch(moveCity(currentIndex, -1))
        }
        if (actionId === 3) {
            const currentIndex = [...cities].findIndex((city: City) => city.id === cityId)
            if (currentIndex !== cities.length)
                dispatch(moveCity(currentIndex, 1))
        }
        setOptionsOpened(false)
    }

    return (
        <SavedCityOptionsWrapper ref={CityOptionsEl}>
            {Options.map(option => {
                return (
                    <Option
                        key={option.id}
                        onClick={() => handleBtnAction(option.id)}

                    >
                        <h6 className="name">{option.name}</h6>
                        <i className="icon">{option.icon}</i>
                    </Option>
                )
            })}
        </SavedCityOptionsWrapper>
    )
}

export default SavedCityOptions
