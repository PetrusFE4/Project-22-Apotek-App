import React, { useState } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap'; 
import ProductCard from './ProductCard';
import { useNavigate } from 'react-router-dom';
import HeaderDashboard from '../../Components/Admin/HeaderDashboard';  // Adjust the path as necessary

const products = [
  {
    name: 'Product 1',
    description: 'Description of product 1',
    price: 29.99,
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Product 2',
    description: 'Description of product 2',
    price: 49.99,
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Product 3',
    description: 'Description of product 3',
    price: 19.99,
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Product 4',
    description: 'Description of product 4',
    price: 99.99,
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Product 5',
    description: 'Description of product 5',
    price: 99.99,
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Product 6',
    description: 'Description of product 6',
    price: 99.99,
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Product 7',
    description: 'Description of product 7',
    price: 99.99,
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Product 8',
    description: 'Description of product 8',
    price: 99.99,
    image: 'https://via.placeholder.com/150'
  }
];

const ProductList = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    const existingProduct = cart.find(item => item.product.name === product.name);
    if (existingProduct) {
      setCart(cart.map(item =>
        item.product.name === product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
  };

  const handleCheckout = () => {
    console.log("Navigating to cart with data:", cart);
    navigate('/cart', { state: { cart } });
  };

  return (
    <>
      <HeaderDashboard />
      <Container fluid style={{ padding: '16px', overflowY: 'auto', maxHeight: 'calc(100vh - 64px - 64px)' }}>
        <Row>
          {products.map((product, index) => (
            <Col xs={12} sm={6} md={4} lg={3} key={index}>
              <ProductCard product={product} onAddToCart={handleAddToCart} />
            </Col>
          ))}
        </Row>
        {cart.length > 0 && (
          <div style={{ position: 'fixed', bottom: '16px', right: '16px' }}>
            <Button variant="primary" onClick={handleCheckout}>
              Checkout ({cart.length} items)
            </Button>
          </div>
        )}
      </Container>
    </>
  );
};

export default ProductList;
