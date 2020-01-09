import React from 'react';
import Homepage from './Pages/HomePage/Homepage';
import NotFoundPage from './Pages/NotFound/NotFoundPage';
import ProductListPage from './Pages/ProductListPage/ProductListPage';
import ProductActionPage from './Pages/ProductActionPage/ProductActionPage';
var routes = [
    {
        path: '/',
        exact: true,
        main: () => <Homepage />
    },
    {
        path: '/product-list',
        exact: false,
        main: () => <ProductListPage />
    },
    {
        path: '/product-add',
        exact: false,
        main: ({ history }) => <ProductActionPage history={history} />
    },
    {
        path: '/product/:id/edit',
        exact: false,
        main: ({ match, history }) => <ProductActionPage match={match} history={history} />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
]
export default routes;