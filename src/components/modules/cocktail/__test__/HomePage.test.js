import { render, screen, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import HomePage from '../pages/HomePage';
import { ContextProvider } from '../../../../bootstrap/Providers';

const MockComponent = () => {
    const history = createMemoryHistory();
    return (
        <ContextProvider>
            <Router location={history.location} navigator={history} >
                <HomePage />
            </Router>
        </ContextProvider>
    );
}


describe("<HomePage/>", () => {
    it('should render home page element', () => {
        render(
            <MockComponent/>
        );
        const inputElement = screen.getByPlaceholderText(/Search hera/i);
        expect(inputElement).toBeInTheDocument();
    });
    it('should render random 5 items', async () => {
        render(
            <MockComponent/>
        );
        const divElements = await screen.findAllByTestId(/cocktail_item_/i);
        expect(divElements.length).toBe(5)
    });
    it('should render search result by clicking search button', async () => {
        render(
            <MockComponent/>
        );
        const inputElement = screen.getByPlaceholderText(/Search hera/i);
        fireEvent.change(inputElement, { target: { value: "Ace" } });
        const buttonElement = screen.getByRole("button", { name: 'Search'});
        fireEvent.click(buttonElement);
        const divElements = await screen.findAllByText(/Ace/i);
        expect(divElements.length).toBeGreaterThan(1);
    });
    it('should render random 5 items when click refresh button', async () => {
        render(
            <MockComponent/>
        );
        const buttonElement = screen.getByRole("button", { name: 'Refresh'});
        fireEvent.click(buttonElement);
        const divElements = await screen.findAllByTestId(/cocktail_item_/i);
        expect(divElements.length).toBe(5)
    });
    it('should render error message when search result is empty', async () => {
        render(
            <MockComponent/>
        );
        const inputElement = screen.getByPlaceholderText(/Search hera/i);
        fireEvent.change(inputElement, { target: { value: "$$$$$$$$$$$" } });
        const buttonElement = screen.getByRole("button", { name: 'Search'});
        fireEvent.click(buttonElement);
        const divElements = await screen.findByText('No Data Found.');
        expect(divElements).toBeInTheDocument();
    });
});