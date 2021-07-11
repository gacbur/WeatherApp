import styled from 'styled-components'

export const AppWrapper = styled.div`
    min-height: 100vh;
    transition: .2s;
    background-color: ${props => props.theme.backgroundColor};
`