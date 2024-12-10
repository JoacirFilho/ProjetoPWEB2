import Product from "../models/product";
import productRepository from "../repositories/productRepository";

export const getProductById = ( req, res) => {
    const { id } = req.params;

    const product = productRepository.getById(number(id));

    if (!Product){
    return res.status(404).json({ error: 'Product not found'});
}
    res.json(product);
}