import styled from 'styled-components'

export const AddNewCityCardWrapper = styled.div`
    display: flex;
    width:100%;
    position: relative;
    min-height: 520px;
    width:330px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 0px 16px rgba(0,0,0,.2);
    padding:6em .8em;

    .icon-background{
        position: absolute;
        top:5%;
        left:50%;
        transform: translate(-50%, 0%);
        font-size: 180px;
        color:rgba(0,0,0,.05)
    }
`

export const ButtonsWrapper = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

export const SearchByCityButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin:1em .8em;
    background-color: #dbdbdb;
    color: rgba(0,0,0,.6);
    font-size: 16px;
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

export const LocaliztionButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin:1em .8em;
    background-color: #ae4bc9;
    color:white;
    font-size: 16px;
    font-weight: bolder;
    border:none;
    height:55px;
    border-radius: 50px;
    transition: .2s;
    box-shadow: 0 0px 8px rgba(0,0,0,.2);

    span{
        display: flex;
    }

    .icon{
        display: flex;
        font-size: 24px;
        margin-left:.4em;
    }

    &:hover{
        opacity: .8;
    }
`