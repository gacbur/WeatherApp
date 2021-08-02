import styled from 'styled-components'

export const AddNewCityCardWrapper = styled.div`
    display: flex;
    position: relative;
    min-height: ${(props: { flatView: boolean }) => props.flatView ? '200px' : '520px'};
    width:${(props: { flatView: boolean }) => props.flatView ? '70%' : '330px'};
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 0px 16px rgba(0,0,0,.2);
    padding:${(props: { flatView: boolean }) => props.flatView ? '2em .8em' : '6em .8em'};
    background-color: ${props => props.theme.elementsBackgroundColor};

    @media all and (max-width:360px){
        width:320px;
    }
    @media all and (max-width:350px){
        width:310px;
    }
    @media all and (max-width:340px){
        width:300px;
    }
    @media all and (max-width:330px){
        width:290px;
    }
    @media all and (max-width:320px){
        width:280px;
    }
    @media all and (max-width:310px){
        width:270px;
    }
    @media all and (max-width:300px){
        width:260px;
    }

    .icon-background{
        position: absolute;
        pointer-events: none;
        display: flex;
        top:5%;
        left:50%;
        margin-top: .05em;
        transform: translate(-50%, 0%);
        font-size: 180px;
        color:${props => props.theme.NewCityCardIconColor};
        overflow: hidden;
    }
    `

export const ButtonsWrapper = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    
    button{
        max-width: ${(props: { flatView: boolean }) => props.flatView ? '600px' : 'none'};
    }
`

export const SearchByCityButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin:.3em .8em;
    background-color: #dbdbdb;
    color: rgba(0,0,0,.6);
    font-size: 16px;
    font-weight: bolder;
    border:none;
    height:55px;
    border-radius: 50px;
    min-width: 270px;
    transition: .2s;
    box-shadow: 0 0px 8px rgba(0,0,0,.1);
    z-index:1;

    @media all and (max-width:350px){
        min-width: 240px; 
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
    min-width: 270px;
    box-shadow: 0 0px 8px rgba(0,0,0,.2);
    z-index:1;

    @media all and (max-width:350px){
        min-width: 240px; 
    }

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