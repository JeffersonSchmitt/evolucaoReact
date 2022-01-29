const PRODUCTS = '_PRODUCTS';


export default class ProductService {

    getProducts = () => {
        const products = localStorage.getItem(PRODUCTS);
        if (!products) {
            return [];
        }
        return JSON.parse(products);
    }

    remove = (sku) => {
        const index = this.getIndex(sku);
        if (index !== null) {
            const products = this.getProducts();
            products.splice(index, 1);
            localStorage.setItem(PRODUCTS, JSON.stringify(products));
            return products;
        }

    }

    getIndex = (sku) => {
        let index = null;
        this.getProducts().forEach((product, i) => {
            if (product.sku === sku) {
                index = i;
            }
        });
        return index;
    }


    save = (product) => {
        let products = localStorage.getItem(PRODUCTS);
        if (!products) {
            products = [];
        } else {
            products = JSON.parse(products);
        }
        const index = this.getIndex(product.sku)
        if (index === null) {
            products.push(product);
        } else {
            products[index] = product;
        }


        localStorage.setItem(PRODUCTS, JSON.stringify(products));
    }

}