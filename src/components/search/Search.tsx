import { FC, useState, useEffect } from 'react'

import axios from 'axios'

import SearchResultItem from '../searchResultItem/SearchResultItem'
import Loading from '../loading/Loading'

import { SearchWrapper, CloseButton, SearchBarWrapper, SearchInput, SearchResult, LoadingWrapper } from './SearchElements'

import { CgClose } from 'react-icons/cg'
import { BiSearch } from 'react-icons/bi'

type SearchProps = {
    isOpened: boolean,
    setOpened: (open: boolean) => void;
}

export type QuickSearchItemType = {
    id: number,
    name: string,
    country: string,
    temp: number,
    temp_min: number,
    temp_max: number,
    sunrise: number,
    sunset: number,
    weatherName: string,
    weatherDesc: string,
    WeatherIcon: string,
}

const SearchBar: FC<SearchProps> = ({ setOpened, isOpened }) => {

    const [searchValue, setSearchValue] = useState<string>('')
    const [quickSearchResult, setQuickSearchResults] = useState<any>([])
    const [quickSearchResLoading, setQuickSearchResLoading] = useState<boolean>(false)

    useEffect(() => {
        const source = axios.CancelToken.source()

        const getQuickSearchResults = async (searchValue: string) => {
            setQuickSearchResLoading(true)
            setTimeout(async () => {
                try {
                    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${process.env.REACT_APP_API_KEY}`, {
                        cancelToken: source.token
                    })
                    const results = await response.data
                    setQuickSearchResults([{
                        id: results.id,
                        name: results.name,
                        country: results.sys.country,
                        temp: results.main.temp,
                        temp_min: results.main.temp_min,
                        temp_max: results.main.temp_max,
                        sunrise: results.sys.sunrise,
                        sunset: results.sys.sunset,
                        weatherName: results.weather[0].main,
                        weatherDesc: results.weather[0].description,
                        weatherIcon: results.weather[0].icon
                    }])
                    setQuickSearchResLoading(false)
                } catch (err) {
                    if (axios.isCancel(err)) {
                        setQuickSearchResLoading(false)
                    }
                }
            }, 600)
        }
        if (searchValue !== "") {
            getQuickSearchResults(searchValue)
        }

        return () => {
            source.cancel()
        }

    }, [searchValue])

    useEffect(() => {
        if (searchValue === "" && quickSearchResult.length > 0) {
            const clearSearchValue = () => {
                setQuickSearchResults([])
                setQuickSearchResLoading(false)
            }
            clearSearchValue()
        }
    }, [searchValue, quickSearchResult.length])

    useEffect(() => {
        setSearchValue('')
        setQuickSearchResults([])
    }, [isOpened])

    return (
        <SearchWrapper opened={isOpened}>
            <CloseButton
                onClick={() => setOpened(false)}
            >
                <i className="icon">
                    <CgClose />
                </i>
            </CloseButton>
            <SearchBarWrapper>
                <SearchInput>
                    <input
                        type="text"
                        placeholder="City name"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    >

                    </input>
                    <span>
                        <i className="icon">
                            <BiSearch />
                        </i>
                    </span>
                </SearchInput>
                {
                    searchValue.length > 0 &&
                    <SearchResult>
                        {
                            quickSearchResLoading ?
                                <LoadingWrapper>
                                    < Loading />
                                </LoadingWrapper>
                                :
                                quickSearchResult.map((result: QuickSearchItemType, index: number) => {
                                    return <SearchResultItem key={index} setOpened={setOpened} resultItem={result} />
                                })
                        }

                    </SearchResult>
                }
            </SearchBarWrapper>
        </SearchWrapper >
    )
}

export default SearchBar
