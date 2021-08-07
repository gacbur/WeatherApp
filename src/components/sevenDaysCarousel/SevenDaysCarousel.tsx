import { FC } from 'react'

import SevenDaysItem from '../sevenDaysItem/SevenDaysItem'

import { SevenDaysCarouselWrapper, SevenDaysTitleCnt } from './SevenDaysCarouselElements'

import { SevenDays } from '../weatherDetails/WeatherDetailsTypes'

type SevenDaysCarouselProps = {
    sevenDays: SevenDays[],
}

const SevenDaysCarousel: FC<SevenDaysCarouselProps> = ({ sevenDays }) => {
    return (
        <>
            <SevenDaysTitleCnt>
                <h3>
                    Daily forecast
                </h3>
            </SevenDaysTitleCnt>
            <SevenDaysCarouselWrapper>
                {sevenDays.length > 0 &&
                    sevenDays.map((weatherItem, index) => {
                        return <SevenDaysItem weatherItem={weatherItem} key={index} />
                    })
                }
            </SevenDaysCarouselWrapper>
        </>

    )
}

export default SevenDaysCarousel
