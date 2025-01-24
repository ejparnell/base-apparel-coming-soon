import styled from 'styled-components'

export const AppContainer = styled.main`
    height: 100vh;
    background: linear-gradient(to right, ${({ theme }) => theme.colors.gradientA.start}, ${({ theme }) => theme.colors.gradientA.end});
    font-family: ${({ theme }) => theme.fonts.family};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
    }
`

export const LogoImage = styled.img`
    width: 100px;
    height: 20px;
    position: absolute;
    top: 25px;
    left: 25px;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        width: 158px;
        height: 33px;
        top: 60px;
        left: 140px;
    }
`

export const HeroImage = styled.div`
    background-image: url('images/hero-mobile.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    width: 376px;
    height: 250px;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        background-image: url('images/hero-desktop.jpg');
        grid-area: 1 / 2 / 2 / 3;
        width: 100%;
        height: 100vh;
    }
`