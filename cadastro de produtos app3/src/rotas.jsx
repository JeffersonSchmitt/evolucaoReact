import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from "./views/home";
import ConsultProducts from './views/products/consult';
import Register from "./views/products/register";


function Rotas() {
    return (
        <Switch>
            <Route exact path="/cadastro-produtos/:sku?" component={Register} />
            <Route exact path="/consulta-produtos" component={ConsultProducts} />
            <Route exact path="/" component={Home} />
        </Switch>
    )
}

export default Rotas;