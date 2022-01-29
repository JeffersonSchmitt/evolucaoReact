import React from "react";
import ProductService from "../../app/services/productService";
import { withRouter } from 'react-router-dom'
import Card from "../../components/card";
const inicialState = {
    name: '',
    sku: '',
    description: '',
    price: 0,
    supplier: '',
    update: false,
}

class Register extends React.Component {

    state = inicialState
    constructor() {
        super()
        this.service = new ProductService();
    }
    onChange = (event) => {
        const valor = event.target.value
        const nomeDoCampo = event.target.name
        this.setState({ [nomeDoCampo]: valor })
    }

    onSubmit = (event) => {
        const product = {
            name: this.state.name,
            sku: this.state.sku,
            description: this.state.description,
            price: this.state.price,
            supplier: this.state.supplier
        }
        this.service.save(product);
        this.setState({ sucess: true });
        this.clear();
    }

    clear = () => {
        this.setState(inicialState)
    }

    componentDidMount() {
        const sku = this.props.match.params.sku;
        if (sku) {
            const result = this.service.getProducts().filter(product => product.sku === sku);

            if (result.length === 1) {
                const productFound = result[0];
                this.setState({ ...productFound, update: true })
            }
        }

    }

    render() {
        return (
            <Card header={this.state.update ? 'Atualiza Produto ' : 'Cadastra Produto '}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Nome:*</label>
                            <input type="text" onChange={this.onChange} name="name" value={this.state.name} className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label> {this.state.update ? 'SKU: Desabilitado para edição' : 'SKU:* '}</label>
                            <input type="text" disabled={this.state.update ? true : false} onChange={this.onChange} name="sku" value={this.state.sku} className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label>Descrição:</label>
                            <textarea className="form-control" onChange={this.onChange} name="description" value={this.state.description} />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Preço:*</label>
                            <input type="number" onChange={this.onChange} value={this.state.price} name="price" className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Fornecedor:*</label>
                            <input type="text" onChange={this.onChange} value={this.state.supplier} name="supplier" className="form-control" />
                        </div>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-1">
                        <button className="btn btn-primary" onClick={this.onSubmit}>
                            {this.state.update ? 'Atualizar' : 'Salvar'}
                        </button>
                    </div>
                    <div className="col-md-1">
                        <button onClick={this.clear} className="btn btn-danger">Limpar</button>
                    </div>
                </div>
            </Card>
        )
    }

}

export default withRouter(Register)