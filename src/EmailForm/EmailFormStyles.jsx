import styled from 'styled-components'

export const Form = styled.form`
    position: relative;
    width: 300px;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        width: 445px;
        margin-top: 40px;
    }
`

export const InputContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`

export const Input = styled.input`
    width: 100%;
    height: 48px;
    padding: 10px 40px 10px 10px;
    border: 1px solid ${({ $hasError, theme }) => ($hasError ? theme.colors.softRed : theme.colors.desaturatedRed)};
    font-size: 14px;
    box-sizing: border-box;
    background-color: transparent;
    border-radius: 40px;
    text-indent: 10px;

    &:focus {
        outline: none;
        border-color: ${({ $hasError, theme }) => ($hasError ? theme.colors.softRed : theme.colors.desaturatedRed)};
    }

    &::placeholder {
        color: ${({ theme }) => theme.colors.desaturatedRed};
    }

    &:focus {
        outline: none;
    }
`

export const SubmitButton = styled.button`
    position: absolute;
    right: 0;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    background: linear-gradient(to right, ${({ theme }) => theme.colors.gradientB.start}, ${({ theme }) => theme.colors.gradientB.end});
    border-radius: 40px;
    box-shadow:  20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
    width: 64px;
    height: 48px;
`

export const ErrorIcon = styled.span`
    position: absolute;
    right: 70px;
    color: ${({ theme }) => theme.colors.softRed};
    font-size: 20px;
    pointer-events: none;
`

export const ErrorMessage = styled.div`
    position: absolute;
    right: 0;
    bottom: -20px;
    color: ${({ theme }) => theme.colors.softRed};
    font-size: 12px;
`