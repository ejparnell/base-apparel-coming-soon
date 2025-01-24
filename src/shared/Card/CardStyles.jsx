import styled from 'styled-components'

export const CardContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 311px;
    height: 310px;
    margin: 50px 10px;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        margin: auto auto;
        width: 445px;
        height: 404px;
        align-items: flex-start;
        justify-content: center;
    }
`