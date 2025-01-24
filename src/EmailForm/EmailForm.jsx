import { useState } from 'react'
import { Form, InputContainer, Input, ErrorIcon, SubmitButton, ErrorMessage } from './EmailFormStyles'

export function EmailForm() {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (!validateEmail(email)) {
            setError('Please enter a valid email address.')
        } else {
            setError('')
            alert('Form submitted successfully!')
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <InputContainer>
                <Input
                    type='email'
                    placeholder='Email Address'
                    value={email}
                    $hasError={!!error}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {error && <ErrorIcon>
                    <img src='images/icon-error.svg' alt='Error Icon' />
                </ErrorIcon>}
                <SubmitButton type='submit'>
                    <img src='images/icon-arrow.svg' alt='Submit Arrow' />
                </SubmitButton>
            </InputContainer>
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </Form>
    )
}
