import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import ButtonComponent from '../components/Button'

describe('ButtonComponent', () => {
    it('renders with initial count of 0', () => {
        render(<ButtonComponent />)
        expect(screen.getByText(/show me count 0/i)).toBeInTheDocument()
    })

    it('increments count when increment button is clicked', () => {
        render(<ButtonComponent />)
        const incrementButton = screen.getByText('Increment')

        fireEvent.click(incrementButton)
        expect(screen.getByText(/show me count 1/i)).toBeInTheDocument()

        fireEvent.click(incrementButton)
        expect(screen.getByText(/show me count 2/i)).toBeInTheDocument()
    })

    it('decrements count when decrement button is clicked', () => {
        render(<ButtonComponent />)
        const decrementButton = screen.getByText('Decrement')

        fireEvent.click(decrementButton)
        expect(screen.getByText(/show me count -1/i)).toBeInTheDocument()

        fireEvent.click(decrementButton)
        expect(screen.getByText(/show me count -2/i)).toBeInTheDocument()
    })
})