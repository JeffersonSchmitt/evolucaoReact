import React from "react";

export default (props) => (
    <table className="table table-hover">
        <thead>
            <tr>
                <th>Nome</th>
                <th>SKU</th>
                <th>Preço</th>
                <th>Fornecedor</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {
                props.products.map((
                    product, index) => {
                    return (
                        <tr key={index}>
                            <th>{product.name}</th>
                            <th>{product.sku}</th>
                            <th>{product.price}</th>
                            <th>{product.supplier}</th>
                            <th>
                                <button onClick={() => props.sendProduct(product.sku)} className="btn btn-primary">Editar</button>
                                <button onClick={() => props.remove(product.sku)} className="btn btn-danger">Remover</button>
                            </th>
                        </tr>
                    )
                }
                )
            }
        </tbody>
    </table>
)