import { FC, useEffect, useState } from 'react'

import FourtyEightHoursItem from '../fourtyEightHoursItem/FourtyEightHoursItem'

import { FourtyEightHoursCarouselWrapper, FourtyEightHoursTitleCnt } from './FourtyEightHoursCarouselElements'

import { FourtyEightHours } from '../weatherDetails/WeatherDetailsTypes'

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

type FourtyEightHoursCarouselProps = {
    fourtyEightHours: FourtyEightHours[]
}

const FourtyEightHoursCarousel: FC<FourtyEightHoursCarouselProps> = ({ fourtyEightHours }) => {

    const hoursInSlider = [3, 4, 6, 8, 12];
    const containerWidth = [1600, 1200, 800, 600, 400];
    const maxSliderMove = [1500, 1100, 700, 500, 300];
    const minSliderMove = 0;

    const [move, setMove] = useState(0);
    const [sliderIndex, setSliderIndex] = useState(0);

    const updateWindowWidth = () => {
        const windowSize = window.innerWidth
        if (windowSize <= 400) {
            setSliderIndex(0)
        } else if (windowSize <= 800) {
            setSliderIndex(1)
        } else if (windowSize <= 1400) {
            setSliderIndex(2)
        } else if (windowSize <= 2000) {
            setSliderIndex(3)
        } else {
            setSliderIndex(4)
        }
    }

    const handleMoveRight = () => {
        console.log(move + "right");
        if (move === maxSliderMove[sliderIndex]) return
        setMove(move + 100);
    }

    const handleMoveLeft = () => {
        console.log(move + "left");
        if (move === minSliderMove) return setMove(minSliderMove);
        setMove(move - 100);
    }

    window.addEventListener('resize', updateWindowWidth)


    useEffect(() => {
        updateWindowWidth()
    }, []);


    return (
        <>
            <FourtyEightHoursTitleCnt>
                <h3>
                    Hourly forecast
                </h3>
            </FourtyEightHoursTitleCnt>
            <FourtyEightHoursCarouselWrapper>
                {sliderIndex >= 2 &&
                    <button
                        className={`hours-weather__button ${move === minSliderMove ? "hours-weather__button--disabled" : ""}`}
                        style={{ zIndex: 1 }}
                        onClick={handleMoveLeft}>
                        {<IoIosArrowBack className='icon' />}
                    </button>}

                <div style={{ overflow: `${sliderIndex >= 2 ? "hidden" : ""}` }} className="hours-weather">
                    <div
                        style={{ left: `-${move}%`, width: `${containerWidth[sliderIndex]}%` }} className="hours-weather__container"
                    >
                        {fourtyEightHours.length > 0 &&
                            fourtyEightHours.map((weatherItem, index) => {
                                let key = fourtyEightHours.indexOf(weatherItem)
                                return (
                                    <FourtyEightHoursItem
                                        hoursInSlider={hoursInSlider}
                                        sliderIndex={sliderIndex}
                                        weatherItem={weatherItem}
                                        id={key}
                                        key={index} />
                                )
                            })
                        }
                    </div>
                </div>

                {sliderIndex >= 2 &&
                    <button
                        className={`hours-weather__button ${move === maxSliderMove[sliderIndex] ? "hours-weather__button--disabled" : ""}`}
                        style={{ zIndex: 1 }} onClick={handleMoveRight}>
                        {<IoIosArrowForward className='icon' />}
                    </button>}

            </FourtyEightHoursCarouselWrapper>
        </>
    )
}

export default FourtyEightHoursCarousel
