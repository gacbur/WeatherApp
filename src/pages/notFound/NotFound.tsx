import React from 'react'

import { useHistory } from 'react-router'

import { NotFoundWrapper, NotFoundContent } from './NotFoundElements'

import { TiWeatherShower } from 'react-icons/ti'
import { BsArrowReturnLeft } from 'react-icons/bs'

const NotFound = () => {

    const history = useHistory()

    return (
        <NotFoundWrapper>
            <NotFoundContent>
                <TiWeatherShower className="icon-main" />
                <h3>
                    Sorry! this page does not exist, click the button to go back.
                </h3>
                <button
                    onClick={() => history.goBack()}
                >
                    <BsArrowReturnLeft className="icon-btn" />
                </button>
            </NotFoundContent>
        </NotFoundWrapper>
    )
}

export default NotFound
