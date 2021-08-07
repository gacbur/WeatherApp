import styled from 'styled-components'

export const SevenDaysCarouselWrapper = styled.div`
    width:100%;
    padding:.8em 0em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow-y: scroll;
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

export const SevenDaysTitleCnt = styled.div`
    margin-top:5em;
    margin-bottom: 1em;
`