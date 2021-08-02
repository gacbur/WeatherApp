import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const HeaderWrapper = styled.div`
    height:7vh;
    display: flex;
    padding: 0em 2em;
    border-bottom:1px solid #cdd9e5;
    
    @media all and (max-width:600px){
        height:10vh;
    }

    @media all and (max-width:550px){
            padding: 0em .5em;
    }

    @media all and (max-width:310px){
        padding: 0em .2em;
        }

`

export const Logo = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.TextColorMain};
    padding: 1em 1em;
    text-decoration: none;
    transition: .3s;

    h2{
        display: flex;
        align-items: center;
        font-size: 23px;
        font-weight: 500;

        @media all and (max-width:370px){
            font-size: 20px;
        }
    }

    i{
        display: flex;
        font-size: 26px;
        margin-left: .3em;
    }

    .icon{
        margin-right: .3em;
        font-size: 28px;
    }
`

export const ThemeSwitchBtn = styled.button`
    cursor:pointer;
    background-color: transparent;
    border:none;
    margin-left: auto;
    margin-right: 2em;

    .icon{
        color:#cdd9e5;
        font-size: 28px;
        transition: .3s;
    }
`