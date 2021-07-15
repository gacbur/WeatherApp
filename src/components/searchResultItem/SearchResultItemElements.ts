import styled from 'styled-components'

export const SearchItemWrapper = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SearchItem = styled.div`
    cursor:pointer;
    width:80%;
    height: 70px;
    background-color: rgb(181, 181, 181);
    display: flex;
    align-items: center;
    color: black;
    padding: .5em 2.5em;
    transition: .2s;
    font-size: 2px;
    color: rgba(0,0,0,.6);
    box-shadow: 0 0px 8px rgba(0,0,0,.1);

    &:hover{
        background-color: rgba(0,0,0,.2);
    }

    h4{
        font-size: 24px;
        padding-left:2.5em;
        flex-grow: .9;
    }

    .icon{
        margin-left:auto;
        height: 100%;
        width:40px;
    }
`

export const AlreadySaved = styled.div`
    margin-top: 2em;
    font-weight: bolder;
    font-size: 18px;
    color: rgba(0,0,0,.6)
`