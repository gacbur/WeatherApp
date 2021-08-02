import styled from 'styled-components'

export const SavedCityListWrapper = styled.div`
        width:98%;
        max-width: 1350px;
        margin-top: 1.5em;
        margin-bottom: 5em;
        padding: 2em 0em;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        @media all and (max-width:500px){
                margin-top:0em;
        }

        & > *{
        margin:1em 1em;
        }
`
