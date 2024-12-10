class Product {
    constructor (ed, name, category, price){
        this._id = id;
        this._name = name;
        this._category = category;
        this._price = price;
    }
    get id(){
        return this._id;
    }

    set id(value){
        this._id = value;
    }
}

export default Product;