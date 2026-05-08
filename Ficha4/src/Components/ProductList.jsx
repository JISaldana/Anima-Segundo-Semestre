import DataProducts from '../Data/Productos';
import ProductCard from './ProductCard';

function ProductList({ addToCart }) {
    return (
        <div>
            <h2>Lista de Productos</h2>
            <div className="row">
                {DataProducts.map((product) => (
                    <div key={product.id} className="col-md-4">
                        <ProductCard product={product} addToCart={addToCart} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;