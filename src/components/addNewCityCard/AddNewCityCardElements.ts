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

    .icon-background{
        position: absolute;
        pointer-events: none;
        top:5%;
        left:50%;
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
    min-width: 220px;
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
    min-width: 220px;
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