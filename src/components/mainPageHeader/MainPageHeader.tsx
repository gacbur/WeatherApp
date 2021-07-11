import React, { useRef } from 'react'

import { MainPageHeaderWrapper, SearchBar } from './MainPageHeaderElements'

import { BiSearch } from 'react-icons/bi'

const MainPageHeader = () => {

    const InputEl = useRef<any>(null)


    return (
        <MainPageHeaderWrapper>
            <form>
                <SearchBar
                    onClick={() => InputEl.current.focus()}
                >
                    <input
                        ref={InputEl}
                        type="text">

                    </input>
                    <span>
                        <BiSearch className="icon" />
                    </span>
                </SearchBar>
            </form>

        </MainPageHeaderWrapper>
    )
}

export default MainPageHeader
