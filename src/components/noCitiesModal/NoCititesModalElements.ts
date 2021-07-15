import styled from 'styled-components'

export const NoCititesModalWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position:absolute;
    left:0px;
    right:0px;
    bottom:0px;
    top:0px;
    background-color: rgba(0,0,0,.6);
    opacity: ${(props: { citiesLengthEqualZero: boolean }) => props.citiesLengthEqualZero ? 1 : 0};
    visibility: ${(props: { citiesLengthEqualZero: boolean }) => props.citiesLengthEqualZero ? 'visible' : 'hidden'};
    transition: .3s;
`

export const MainContent = styled.div`
    width:95%;
    min-height:570px;
    max-width:550px;
    padding:4em 3em;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 5px 18px rgba(0,0,0,.2);

    .title-big{
        text-align: center;
        font-size: 24px;
        color: rgba(0,0,0,.7)
    }

    .title-small{
        font-size: 17px;
        display: block;
        text-align: center;
        margin:5.5em 0em 1.5em 0em;
        color: rgba(0,0,0,.7)
    }
`

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const LocaliztionButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin:1em 2em;
    background-color: #ae4bc9;
    color:white;
    font-size: 17px;
    font-weight: bolder;
    border:none;
    height:55px;
    border-radius: 50px;
    transition: .2s;
    box-shadow: 0 0px 8px rgba(0,0,0,.2);

    .icon{
        display: flex;
        font-size: 24px;
        margin-left:.4em;
    }

    &:hover{
        opacity: .8;
    }
`

export const SearchByCityButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin:1em 2em;
    background-color: #dbdbdb;
    color: rgba(0,0,0,.6);
    font-size: 17px;
    font-weight: bolder;
    border:none;
    height:55px;
    border-radius: 50px;
    transition: .2s;
    box-shadow: 0 0px 8px rgba(0,0,0,.1);

    .icon{
        display: flex;
        font-size: 24px;
        margin-left:.4em;
    }

    &:hover{
        opacity: .8;
    }
`