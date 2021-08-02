import styled from 'styled-components'

export const MainPageWrapper = styled.div`
    color: ${props => props.theme.TextColorMain};
    position:relative;
    width:100%;
    min-height: 93vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom:auto;
    
    
    @media all and (max-width:600px){
        min-height: 90vh;
    }
`