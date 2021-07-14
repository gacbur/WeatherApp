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
}

const SearchBar: FC<SearchProps> = ({ setOpened, isOpened }) => {

    const [searchValue, setSearchValue] = useState<string>('')
    const [quickSearchResult, setQuickSearchResults] = useState<any>([])
    const [quickSearchResLoading, setQuickSearchResLoading] = useState<boolean>(false)


    useEffect(() => {
        console.log(quickSearchResult)
    }, [quickSearchResult])

    useEffect(() => {

        const source = axios.CancelToken.source()

        const getQuickSearchResults = async (searchValue: string) => {
            setQuickSearchResLoading(true)
            try {
                setTimeout(async () => {
                    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${process.env.REACT_APP_API_KEY}`, {
                        cancelToken: source.token
                    })
                    const results = await response.data
                    console.log(results)
                    setQuickSearchResults([{
                        id: results.id,
                        name: results.name
                    }])
                    setQuickSearchResLoading(false)
                }, 600)
            } catch (err) {
                if (axios.isCancel(err)) {
                    setQuickSearchResLoading(false)
                    console.log('canceled')
                } else {
                    console.log(err)
                }

            }
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
                                    return <SearchResultItem key={index} resultItem={result} />
                                })
                        }

                    </SearchResult>
                }
            </SearchBarWrapper>
        </SearchWrapper >
    )
}

export default SearchBar
