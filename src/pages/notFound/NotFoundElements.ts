import styled from 'styled-components'

export const NotFoundWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top:10em;
`

export const NotFoundContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

        
    .icon-main{
        color: rgba(0,0,0,.14);
        font-size: 175px;
    }

    h3{
        margin-top:1em;
        font-size: 23px;
        color: rgba(0,0,0,.45);
    }

    button{
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 65px;
        width:65px;
        margin-top: 4em;
        border-radius: 50px;
        background-color: rgba(0,0,0,0.4);
        border:none;
        box-shadow: 0 0 8px rgba(0,0,0,.2);
        transition: .2s;

        &:hover{
            background-color: rgba(0,0,0,0.5);
        }
    
        .icon-btn{
            color:white;
            font-size: 27px;
        }
    }
`