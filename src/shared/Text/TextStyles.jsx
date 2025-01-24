import styled from 'styled-components'

export const TextContainer = styled.p`
    color: ${({ theme }) => theme.colors.desaturatedRed};
    font-size: ${({ theme }) => theme.fonts.sizes.mobile.p};
    text-align: center;
    line-height: 1.5;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        font-size: ${({ theme }) => theme.fonts.sizes.desktop.p};
        text-align: left;
        margin-top: 80px;
    }
`