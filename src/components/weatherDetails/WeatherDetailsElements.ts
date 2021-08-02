import styled from 'styled-components'

export const WeatherDetailsWrapper = styled.div`
    margin-top:3em;

    .forecasts-title{
        font-size: 19px;

        @media all and (max-width:900px){
            margin-left: 3em;
        }

        @media all and (max-width:400px){
            margin-left: 2em;
        }
    }
`

export const ButtonsWrapper = styled.div`
display: flex;
margin-top: 3em;
margin-left: 2em;
margin-bottom: 1.5em;

@media all and (max-width:450px){
    justify-content: center;
    margin-left: 0em;
}

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
    background-color: #ae4bc9;
    border:none;
    box-shadow: 0 0 8px rgba(0,0,0,.3);
    color:white;
    font-weight: 500;
    transition: .2s;

    @media all and (max-width:600px){
                height:42px;
                width:110px;
            }
    
    &.active{
        opacity:.7;
    }

    &:hover{
        opacity:.9;
    }
}
`

export const DetailsCnt = styled.div`
    padding:.8em 0em;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    margin:0em 2em;
    height:500px;
    background-color: rgba(255,255,255,.2);

    @media all and (max-width:900px){
        padding:.5em 0em;
        margin:0em 0em;
        }

    @media all and (max-width:600px){
        height:350px;
    }

`