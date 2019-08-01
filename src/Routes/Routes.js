import React from 'react';
import CreateProduct from '../components/Products/CreateProducts/CreateProduct';
import ViewProduct from '../components/Products/ViewProduct/ViewProduct'

import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={CreateProduct} />
                <Route exact path='/view' component={ViewProduct} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes