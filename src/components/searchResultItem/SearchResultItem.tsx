import { FC } from 'react'

import { SearchItem } from './SearchResultItemElements'

import { QuickSearchItemType as result } from '../search/Search'

import { AiFillPlusCircle } from 'react-icons/ai'

type QuickSearchItemProps = {
    resultItem: result
}

const SearchResultItem: FC<QuickSearchItemProps> = ({ resultItem }) => {

    const { id, name } = resultItem

    console.log(name)

    return (
        <SearchItem
            onClick={() => console.log('click')}
        >
            <h4>{name}</h4>
            <i ><AiFillPlusCircle className="icon" /></i>
        </SearchItem>
    )
}

export default SearchResultItem
