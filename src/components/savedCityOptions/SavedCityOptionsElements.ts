import styled from 'styled-components'

export const SavedCityOptionsWrapper = styled.ul`
    width:200px;
    background-color: white;
    position:absolute;
    top:25px;
    right:0;
    color:black !important;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,.15);
`

export const Option: any = styled.li`
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: .45em 1.3em;
    transition:.2s;

    &:first-child{
        border-bottom: 1px solid lightgray;
    }

    & + &{
        border-bottom: 1px solid lightgray;
    }

    .name{
        font-size: 13px;
    }

    .icon{
        margin-left: auto;
        font-size: 21px;
    }

    &:hover{
        background-color: rgba(0,0,0,.1);
    }
`