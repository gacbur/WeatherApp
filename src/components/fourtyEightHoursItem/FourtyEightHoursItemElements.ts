import styled from 'styled-components'

export const FourtyEightHoursItemWrapper = styled.div`
    background-color: rgba(0,0,0,.40);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    width: 100%;
    height: 250px;
    cursor: pointer;

    .hours-weather__element__time,
    .hours-weather__element__temperature  {
        font-size: 19px;
        font-weight: 700;

        @media (min-width:600px) {
            font-size: 22px;
        }
    }

    .hours-weather__element__date{
        opacity: 0.7;
        font-size: 12px;

        @media (min-width:600px) {
            font-size: 16px;
        }
    }

    img {
        width:100px;
        // outline: 2px solid black;

        @media (min-width:1200px) {
            width: 70%;
        }
    }
`