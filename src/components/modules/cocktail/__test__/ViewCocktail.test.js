import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import ViewCocktailPage from '../pages/ViewCocktail';
import { ContextProvider } from '../../../../bootstrap/Providers';

const MockComponent = () => {
    const history = createMemoryHistory();
    return (
        <ContextProvider>
            <Router location={history.location} navigator={history} >
                <ViewCocktailPage />
            </Router>
        </ContextProvider>
    );
}

describe("<ViewCocktailPage/>", () => {
    it('should render view cocktail page element', async () => {
        render(
            <MockComponent/>
        );
        const divElements = await screen.findByRole('heading');
        expect(divElements).toBeInTheDocument();
    });
});