import React from 'react'

import { SavedCityOptionsWrapper, Option } from './SavedCityOptionsElements'

const Options = [
    { id: 1, name: 'Delete' },
    { id: 2, name: 'Move up' },
    { id: 3, name: 'Move down' },
]

const SavedCityOptions = () => {
    return (
        <SavedCityOptionsWrapper>
            {Options.map(option => {
                return (
                    <Option
                        key={option.id}
                    >
                        {option.name}
                    </Option>
                )
            })}
        </SavedCityOptionsWrapper>
    )
}

export default SavedCityOptions
