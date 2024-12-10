import Product from "../models/product";

class ProductRepositry {
    constructor (){
        this.products = [
            new Product(1, 'Laptop', 'Electronics', 1200),
            new Product(2, 'Headphones', 'Electronics', 200),
            new Product(3, 'Coffww Mug', 'Kitchen', 15),
            new Product(4, 'Notebook', 'Stationery', 5),

        ]
    }

    getAll(){
        return this.products;
    }
    getById(id){
        return this.products.find(product => product.id === id);
    }

    add(product){
        const id = this.products.length + 1;
        product.id = id;
        this.products.push(product);
        return product;

    }

    update(id, updatedData){
        const product = this.getById(id);
        if (!product) return null;

        if (updatedData.name) product.name = updatedData.name;
        if (updatedData.category) product.category = updatedData.category;
        if (updatedData.price) product.price = updatedData.price;

        return product;
    }

    delete(id){
        const index = this.products.findIndex(product => product.get() === id);
        if (index === -1) return null;

        return this.products.splice(index, 1)[0];
    }
}

export default new ProductRepositry();