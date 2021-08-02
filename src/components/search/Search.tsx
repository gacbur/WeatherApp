import { FC, useState, useEffect } from 'react'

import axios from 'axios'

import SearchResultItem from '../searchResultItem/SearchResultItem'
import Loading from '../loading/Loading'

import { Element } from 'react-scroll'

import { SearchWrapper, CloseButton, SearchBarWrapper, SearchInput, SearchResult, LoadingWrapper, ErrorWrapper } from './SearchElements'

import { CgClose } from 'react-icons/cg'
import { BiSearch } from 'react-icons/bi'

type SearchProps = {
    isOpened: boolean,
    setOpened: (open: boolean) => void;
}

export type QuickSearchItemType = {
    id: number,
    name: string,
}

const SearchBar: FC<SearchProps> = ({ setOpened, isOpened }) => {

    const [searchValue, setSearchValue] = useState<string>('')
    const [quickSearchResult, setQuickSearchResult] = useState<any>([])
    const [quickSearchResLoading, setQuickSearchResLoading] = useState<boolean>(false)
    const [quickSearchResError, setQucikSearchResError] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>('')

    useEffect(() => {
        const source = axios.CancelToken.source()

        const getQuickSearchResults = async (searchValue: string) => {
            setQuickSearchResLoading(true)
            setQucikSearchResError(false)
            setErrorMessage('')
            setTimeout(async () => {
                try {
                    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${process.env.REACT_APP_API_KEY}`, {
                        cancelToken: source.token
                    })
                    const results = await response.data
                    setQuickSearchResult([{
                        id: results.id,
                        name: results.name,
                    }])
                    setQuickSearchResLoading(false)
                    setQucikSearchResError(false)
                } catch (err) {
                    setQuickSearchResult([])
                    if (axios.isCancel(err)) {
                        setQuickSearchResLoading(false)
                    }
                    if (err.response) {
                        setErrorMessage("City was not found")
                    } else if (err.request) {
                        setErrorMessage("There is propably an network error, check your internet connection")
                    }
                    setQucikSearchResError(true)
                    setQuickSearchResLoading(false)
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
                setQuickSearchResult([])
                setQuickSearchResLoading(false)
            }
            clearSearchValue()
        }
    }, [searchValue, quickSearchResult.length])

    useEffect(() => {
        setSearchValue('')
        setQuickSearchResult([])
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
                <Element name="scroll-to-search" />
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
                        {
                            quickSearchResError && !quickSearchResLoading ?
                                <ErrorWrapper>
                                    {errorMessage}
                                </ErrorWrapper>
                                :
                                null
                        }

                    </SearchResult>
                }
            </SearchBarWrapper>
        </SearchWrapper >
    )
}

export default SearchBar
