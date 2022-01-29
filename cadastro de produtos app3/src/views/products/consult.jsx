import React from "react";
import ProductService from "../../app/services/productService";
import { withRouter } from 'react-router-dom'
import Card from "../../components/card";
import TableProducts from "./tableProducts";
class ConsultProducts extends React.Component {
    state = {
        products: []
    }

    constructor() {
        super()
        this.service = new ProductService();
    }
    componentDidMount() {
        const products = this.service.getProducts();
        this.setState({ products }); //como os nomes são iguais não precisa fazer products:products
    }

    sendProduct = (sku) => {
        this.props.history.push(`/cadastro-produtos/${sku}`);
    }
    remove = (sku) => {
        const products = this.service.remove(sku);
        this.setState({ products }); //como os nomes são iguais não precisa fazer products:products
    }

    render() {
        return (
            <Card header="Consulta produtos">
                <TableProducts products={this.state.products} sendProduct={this.sendProduct} remove={this.remove} />
            </Card>
        )
    }
}

export default withRouter(ConsultProducts)