import styled from 'styled-components'

export const SearchWrapper = styled.div`
    display: flex;
    justify-content: center;
    position:absolute;
    left:0px;
    right:0px;
    bottom:0px;
    top:0px;
    background-color: ${props => props.theme.SearchCityModalColor};
    opacity: ${(props: { opened: any }) => props.opened ? 1 : 0};
    visibility: ${(props: { opened: any }) => props.opened ? 'visible' : 'hidden'};
    transition: .3s;
`

export const CloseButton = styled.button`
        cursor: pointer;
        position:absolute;
        top:60px;
        right:80px;
        border:none;
        background-color: transparent;
        
  
        .icon{
            color: ${props => props.theme.TextColorMain} !important;
            font-size: 50px;
            
            &:hover{
                color: rgba(0,0,0,.5);
            }
    }
`

export const SearchBarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top:10em;
`

export const SearchInput = styled.div`
    display: flex;
    background-color: lightgray;
    align-items: center;
    margin:.5em 3em;
    border-radius: 40px;
    overflow: hidden;
    width:1000px;
    
    input{
        background-color: lightgray;
        border:none;
        height: 90px;
        width:85%;
        font-size: 25px;
        transition: width .3s;
        padding-left:2em;
        color:rgba(0,0,0,.5);

        &:focus{
            outline:none;
        }
    }

    span{
        background-color: transparent;
        border:none;
        height:80px;
        width:15%;
        display: flex;
        align-items: center;
        justify-content: center;

        .icon{
            margin-top: .1em;
            margin-left: .4em;
            margin-right: .4em;
            font-size: 33px;
            display: flex;
            color: rgba(0,0,0,.5);
        }
    }

`

export const SearchResult = styled.div`
    margin-top:1.5em;
    display: flex;
    justify-content: center;
`


export const LoadingWrapper = styled.div`
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding:2em 0em;
`

export const ErrorWrapper = styled.div`
`

export const NoResultsWrapper = styled.div``