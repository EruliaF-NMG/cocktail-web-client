import HomePage from './pages/HomePage';
import WishListPage from './pages/WishListPage';
import ViewCocktailPage from './pages/ViewCocktail';

const cocktailRoutes = [
        {
            path: '/',
            element: <HomePage />
        },
        {
            path: '/wish-list',
            element: <WishListPage />
        },
        {
            path: '/cocktail/:id',
            element: <ViewCocktailPage />
        }
];

export default cocktailRoutes;