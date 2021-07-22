import styled from 'styled-components'

export const WeatherDetailsWrapper = styled.div`
    margin-top:3em;

    h4{
        font-size: 19px;
    }
`

export const ButtonsWrapper = styled.div`
display: flex;
margin-top: 1em;

button + button{
    margin-left:1em;
}

button{
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    height:45px;
    width:125px;
    font-size: 16px;
    border-radius: 30px;
    background-color: #ae4bc9;
    border:none;
    box-shadow: 0 0 8px rgba(0,0,0,.3);
    color:white;
    font-weight: 500;
    transition: .2s;
    
    &:hover{
        opacity:.9;
    }
}
`

export const Space = styled.hr`
    margin:3em 0em;
    height: 1px;
    background-color: rgba(0,0,0,.2);
    border: none;
`

export const DetailsCnt = styled.div`
    margin:0em 2em;
    height:500px;
    background-color: rgba(255,255,255,.2);
`