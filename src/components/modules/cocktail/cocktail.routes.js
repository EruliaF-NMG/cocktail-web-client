import HomePage from './pages/HomePage';
import WishListPage from './pages/WishListPage';

const cocktailRoutes = [
        {
            path: '/',
            element: <HomePage />
        },
        {
            path: '/wish-list',
            element: <WishListPage />
        }
];

export default cocktailRoutes;