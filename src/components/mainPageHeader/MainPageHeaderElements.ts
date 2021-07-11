import styled from 'styled-components'


export const MainPageHeaderWrapper = styled.div`
    width:100%;
    padding:1em 0em;
    display: flex;
`

export const SearchBar = styled.div`
    display: flex;
    background-color: #cdd9e5;
    align-items: center;
    flex-direction: row-reverse;
    padding:.1em .5em;
    margin:.5em 3em;
    border-radius: 20px;
    overflow: hidden;
    
    input{
        background-color: #cdd9e5;
        border:none;
        height: 40px;
        width:300px;
        font-size: 16px;
        transition: width .3s;

        
        &:focus{
            width:400px;
            transition: width .4s;
            outline:none;
        }

    }

    span{
        display: flex;
        align-items: center;
        justify-content: center;

        .icon{
            margin-top: .1em;
            margin-left: .4em;
            margin-right: .4em;
            font-size: 19px;
            display: flex;
            color:black;

        }
    }

`