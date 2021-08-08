import styled from 'styled-components'

export const FourtyEightHoursCarouselWrapper = styled.div`
    width:100%;
    height: 250px;
    display: flex;
    margin-top: 1em;


    .hours-weather__button {
        width: 40px;
        height: 120px;
        text-align: center;
        align-self: center;
        background-color: rgba(0,0,0,.45);
        border: none;
        cursor: pointer;
        transition: .2s;

        .icon{
            color:white;
            font-size: 25px;
        }

        &:hover{
            background-color: rgba(0,0,0,.50);
        }
    }
    
    .hours-weather__button--disabled {
        opacity: 0.55;

        &:hover{
            background-color: rgba(0,0,0,.45);
        }
    }

    .hours-weather {
        display: flex;
        align-items: center;
        margin: 0em auto;
        position: relative;
        width: 90%;
        height: 100%;
        box-shadow: inset 0px 0px 5px rgba($color: #000000, $alpha: 0.5);
        overflow: scroll;


        .hours-weather__container {
            text-align: center;
            transition: 0.5s ease-in-out;
            position: absolute;
            transform: translate(0,50%);
            left: 0%;
            bottom: 50%;
            width: 1200%;
            display: flex;
        }

    }
`

export const FourtyEightHoursTitleCnt = styled.div``