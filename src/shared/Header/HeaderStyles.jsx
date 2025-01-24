import styled from 'styled-components'

export const HeaderContainer = styled.h1`
    font-size: ${({ theme }) => theme.fonts.sizes.mobile.h1};
    font-weight: ${({ theme }) => theme.fonts.weight.semiLight};
    width: 311px;
    height: 126px;
    text-align: center;
    letter-spacing: 10px;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        font-size: ${({ theme }) => theme.fonts.sizes.desktop.h1};
        text-align: left;
    }
`

export const HeaderSpan = styled.span`
    font-weight: ${({ theme }) => theme.fonts.weight.light};
    color: ${({ theme }) => theme.colors.desaturatedRed};
`