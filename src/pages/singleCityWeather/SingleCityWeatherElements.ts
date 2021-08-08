import styled from 'styled-components'

export const SingleCityWeatherWrapper = styled.div`
    display: flex;
    justify-content: center;
    width:100%;
    `

export const SingleCityWeatherContent = styled.div`
    position:relative;
    overflow: hidden;
    padding:3em 4em;
    padding-bottom:8em;
    margin-top: 2em;
    margin-bottom: 3em;
    width: 95%;
    min-height: 400px;
    max-width: 1300px;
    border-radius: 30px;
    box-shadow: 0 0 14px rgba(0,0,0,.25);
    background: ${(props: { color: string }) => props.color === 'day' ? 'rgb(153,238,252)' : 'rgb(86,66,156)'};
    background: ${(props: { color: string }) => props.color === 'day' ? 'linear-gradient(0deg, rgba(153,238,252,1) 0%, rgba(59,178,240,1) 100%)' : 'linear-gradient(0deg, rgba(86,66,156,1) 0%, rgba(59,72,166,1) 100%)'};
    color: ${(props: { color: string }) => props.color === 'day' ? 'rgba(0,0,0,.65)' : 'rgba(255,255,255,.95)'};
    margin-top: 2.5em;

    @media all and (max-width:900px){
            padding:3em .2em;
            width:100%;
        }
`


export const MainWeatherInfo = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    width:100%;

    .city-name{
        font-size: 35px;

        @media all and (max-width:400px){
        font-size: 31px;
        margin-bottom: 1em;
        }
    }

    .weather-desc{
        font-size: 15px;
        margin-top:.7em;
    }

    .weather-icon{
        width:135px;
        margin: -1.1em 0em;
    }

    .temp-main{
        font-size: 62px;
        padding-left:.4em;

        @media all and (max-width:400px){
        font-size: 56px;
        }
    }
`

export const MinMaxTempCnt = styled.div`
    width:27%;
    display: flex;
    margin-top: .6em;
    min-width: 200px;

    .temp-wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        &:first-child{
            margin-right:auto;
        }

        .temp-type{
            font-size: 12px;
        }

        .temp{
            font-size: 28px;
        }
    }
`

export const SingleCityWeatherLoading = styled.div`
    cursor:default;
    outline:1px solid red;
    color: rgba(0,0,0,.7) !important;
    padding:0em 1.5em;
    min-height: inherit;
    text-align: center;
    pointer-events: none;
    position:absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-color: ${props => props.theme.elementsBackgroundColor};
    opacity: ${(props: { isActive: boolean }) => props.isActive ? 1 : 0};
    visibility: ${(props: { isActive: boolean }) => props.isActive ? 'visible' : 'hidden'};
    transition: .2s;`

export const SingleCityWeatherError = styled.div`
    cursor:default;
    color: rgba(0,0,0,.7) !important;
    padding:0em 1.5em;
    min-height: inherit;
    text-align: center;
    pointer-events: none;
    position:absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-color: white;
    opacity: ${(props: { isActive: boolean }) => props.isActive ? 1 : 0};
    visibility: ${(props: { isActive: boolean }) => props.isActive ? 'visible' : 'hidden'};
    transition: .2s;
`