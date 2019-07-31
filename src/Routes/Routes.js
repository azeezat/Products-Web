import React from 'react';
import CreateProduct from '../components/Products/CreateProduct'
import ViewProduct from '../components/Products/ViewProduct'

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