import { Card, Button } from 'react-bootstrap';
import ProductData from '../Data/Productos';

function ProductCard({ product, addToCart }) {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          ${typeof product.price === 'number' ? product.price.toFixed(2) : '0.00'}
        </Card.Text>
        <Button variant="primary" onClick={() => addToCart(product)}>
          Agregar al Carrito
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;