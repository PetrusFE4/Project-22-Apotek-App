import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button, Breadcrumb } from "react-bootstrap";
import { Plus, Dash, Cart2 } from "react-bootstrap-icons";
import Header from "../../Components/User/Header";
import Footer from "../../Components/User/Footer";

const Category = () => {
  const navigate = useNavigate();
  const initialQuantitiesPopuler = new Array(6).fill(0);
  const initialQuantitiesVitaminC = new Array(6).fill(0);
  const initialQuantitiesObatBatuk = new Array(6).fill(0);

  const [quantitiesPopuler, setQuantitiesPopuler] = useState(
    initialQuantitiesPopuler
  );
  const [totalQuantityPopuler, setTotalQuantityPopuler] = useState(0);
  const [totalPricePopuler, setTotalPricePopuler] = useState(0);

  const [quantitiesVitaminC, setQuantitiesVitaminC] = useState(
    initialQuantitiesVitaminC
  );
  const [totalQuantityVitaminC, setTotalQuantityVitaminC] = useState(0);
  const [totalPriceVitaminC, setTotalPriceVitaminC] = useState(0);

  const [quantitiesObatBatuk, setQuantitiesObatBatuk] = useState(
    initialQuantitiesObatBatuk
  );
  const [totalQuantityObatBatuk, setTotalQuantityObatBatuk] = useState(0);
  const [totalPriceObatBatuk, setTotalPriceObatBatuk] = useState(0);

  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cart, setCart] = useState([]);

  const handleCheckout = () => {
    navigate("/checkout", { state: { cart } });
  };

  const handleProductClick = (product) => {
    navigate("/products/detail-product", { state: { product } });
  };

  const productsPopuler = [
    {
      image:
        "https://res-3.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_300,w_300/v1/production/pharmacy/products/1713752963_bm_daily_immune-removebg-preview",
      title: "Blackmores Daily ImmuneC ",
      description: "/Bottle",
      price: 108900,
      freeShipping: true,
      path: "/products/detail-product",
    },
    {
      image:
        "https://res-5.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_500,w_500/v1/production/pharmacy/products/1706855368_redoxon_20-removebg-preview",
      title: "Redoxon Double Action ",
      description: "/Per-tube",
      price: 105490,
      freeShipping: true,
      path: "/products/detail-product",
    },
    {
      image:
        "https://res-3.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_500,w_500/v1/production/pharmacy/products/1713407406_cool_vita_blue",
      title: "Cool-Vita Blueberry",
      description: "/Strip",
      price: 34500,
      freeShipping: true,
      path: "/products/detail-product",
    },
    {
      image:
        "https://res-1.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_500,w_500/v1/production/pharmacy/products/1706691745_sangobion_baby-removebg-preview",
      title: "Sangobion Baby Drop",
      description: "/bottle",
      price: 84920,
      freeShipping: true,
      path: "/products/detail-product",
    },
    {
      image:
        "https://res-4.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_500,w_500/v1/production/pharmacy/products/1701365212_mevrabal-removebg-preview",
      title: "Mevrabal 500 Mg 20 Kapsul",
      description: "/Strip",
      price: 27800,
      freeShipping: true,
      path: "/products/detail-product",
    },
    {
      image:
        "https://res-5.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_500,w_500/v1/production/pharmacy/products/1694422994_holizinc-removebg-preview",
      title: "Holizinc Sirup 60 Ml",
      description: "/Bottle",
      price: 13200,
      freeShipping: true,
      path: "/products/detail-product",
    },
  
  ];

  const productsVitaminC = [
    {
      image:
        "https://res-4.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_500,w_500/v1/production/pharmacy/products/1660122001_60f7f5ba1ef1133130010a40",
      title: "Sido Muncul Vitamin C 1000 Mg Sweet Orange 6 Sachet",
      description: "/Strip",
      price: 5000,
      freeShipping: true,
      path: "/products/detail-product",
    },
    {
      image:
        "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
      title: "DegiroI 0,25 mg 10 Tablet",
      description: "/Strip",
      price: 16297,
      freeShipping: true,
      path: "/products/detail-product",
    },
    {
      image:
        "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
      title: "DegiroI 0,25 mg 10 Tablet",
      description: "/Strip",
      price: 16297,
      freeShipping: true,
      path: "/products/detail-product",
    },
    {
      image:
        "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
      title: "DegiroI 0,25 mg 10 Tablet",
      description: "/Strip",
      price: 16297,
      freeShipping: true,
      path: "/products/detail-product",
    },
    {
      image:
        "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
      title: "DegiroI 0,25 mg 10 Tablet",
      description: "/Strip",
      price: 16297,
      freeShipping: true,
      path: "/products/detail-product",
    },
    {
      image:
        "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
      title: "DegiroI 0,25 mg 10 Tablet",
      description: "/Strip",
      price: 16297,
      freeShipping: true,
      path: "/products/detail-product",
    },
  ];

  const productsObatBatuk = [
    {
      image:
        "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
      title: "DegiroI 0,25 mg 10 Tablet",
      description: "/Strip",
      price: 16297,
      freeShipping: true,
      path: "/products/detail-product",
    },
    {
      image:
        "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
      title: "DegiroI 0,25 mg 10 Tablet",
      description: "/Strip",
      price: 16297,
      freeShipping: true,
      path: "/products/detail-product",
    },
    {
      image:
        "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
      title: "DegiroI 0,25 mg 10 Tablet",
      description: "/Strip",
      price: 16297,
      freeShipping: true,
      path: "/products/detail-product",
    },
    {
      image:
        "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
      title: "DegiroI 0,25 mg 10 Tablet",
      description: "/Strip",
      price: 16297,
      freeShipping: true,
      path: "/products/detail-product",
    },
    {
      image:
        "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
      title: "DegiroI 0,25 mg 10 Tablet",
      description: "/Strip",
      price: 16297,
      freeShipping: true,
      path: "/products/detail-product",
    },
    {
      image:
        "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
      title: "DegiroI 0,25 mg 10 Tablet",
      description: "/Strip",
      price: 16297,
      freeShipping: true,
      path: "/products/detail-product",
    },
  ];

  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  const handleAddToCart = (index, category) => {
    let product;
    if (category === "populer") {
      product = productsPopuler[index];
      setQuantitiesPopuler((prevQuantities) => {
        const newQuantities = [...prevQuantities];
        newQuantities[index] += 1;
        setTotalQuantityPopuler(totalQuantityPopuler + 1);
        setTotalPricePopuler(totalPricePopuler + product.price);
        setTotalQuantity(totalQuantity + 1);
        setTotalPrice(totalPrice + product.price);
        return newQuantities;
      });
    } else if (category === "vitaminC") {
      product = productsVitaminC[index];
      setQuantitiesVitaminC((prevQuantities) => {
        const newQuantities = [...prevQuantities];
        newQuantities[index] += 1;
        setTotalQuantityVitaminC(totalQuantityVitaminC + 1);
        setTotalPriceVitaminC(totalPriceVitaminC + product.price);
        setTotalQuantity(totalQuantity + 1);
        setTotalPrice(totalPrice + product.price);
        return newQuantities;
      });
    } else if (category === "obatBatuk") {
      product = productsObatBatuk[index];
      setQuantitiesObatBatuk((prevQuantities) => {
        const newQuantities = [...prevQuantities];
        newQuantities[index] += 1;
        setTotalQuantityObatBatuk(totalQuantityObatBatuk + 1);
        setTotalPriceObatBatuk(totalPriceObatBatuk + product.price);
        setTotalQuantity(totalQuantity + 1);
        setTotalPrice(totalPrice + product.price);
        return newQuantities;
      });
    }

    const existingCartItem = cart.find(
      (item) => item.product.title === product.title
    );
    if (existingCartItem) {
      existingCartItem.quantity += 1;
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (index, category) => {
    let product;
    if (category === "populer") {
      product = productsPopuler[index];
      setQuantitiesPopuler((prevQuantities) => {
        const newQuantities = [...prevQuantities];
        if (newQuantities[index] > 0) {
          newQuantities[index] -= 1;
          setTotalQuantityPopuler(totalQuantityPopuler - 1);
          setTotalPricePopuler(totalPricePopuler - product.price);
          setTotalQuantity(totalQuantity - 1);
          setTotalPrice(totalPrice - product.price);
        }
        return newQuantities;
      });
    } else if (category === "vitaminC") {
      product = productsVitaminC[index];
      setQuantitiesVitaminC((prevQuantities) => {
        const newQuantities = [...prevQuantities];
        if (newQuantities[index] > 0) {
          newQuantities[index] -= 1;
          setTotalQuantityVitaminC(totalQuantityVitaminC - 1);
          setTotalPriceVitaminC(totalPriceVitaminC - product.price);
          setTotalQuantity(totalQuantity - 1);
          setTotalPrice(totalPrice - product.price);
        }
        return newQuantities;
      });
    } else if (category === "obatBatuk") {
      product = productsObatBatuk[index];
      setQuantitiesObatBatuk((prevQuantities) => {
        const newQuantities = [...prevQuantities];
        if (newQuantities[index] > 0) {
          newQuantities[index] -= 1;
          setTotalQuantityObatBatuk(totalQuantityObatBatuk - 1);
          setTotalPriceObatBatuk(totalPriceObatBatuk - product.price);
          setTotalQuantity(totalQuantity - 1);
          setTotalPrice(totalPrice - product.price);
        }
        return newQuantities;
      });
    }

    const existingCartItem = cart.find(
      (item) => item.product.title === product.title
    );
    if (existingCartItem && existingCartItem.quantity > 1) {
      existingCartItem.quantity -= 1;
    } else {
      setCart(cart.filter((item) => item.product.title !== product.title));
    }
  };

  return (
    <>
      <Header />
      <Container className="product-container">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Beranda</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/products">Produk</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Suplemen Daya Tahan</Breadcrumb.Item>
        </Breadcrumb>
        <Row className="product-box justify-content-center">
          <Row className="align-items-center justify-content-between">
            <Col>
              <h5>Suplemen Daya Tahan</h5>
            </Col>
          </Row>
          <Col xs={12}>
            <Row className="g-3 justify-content-center">
              {productsPopuler.map((item, index) => (
                <Col
                  xs={12}
                  sm={6}
                  md={4}
                  lg={2}
                  key={index}
                  className="d-flex justify-content-center"
                >
                  <Card className="product-card h-100 border-0">
                    <Link to={item.path}>
                      <Card.Img
                        variant="top"
                        src={item.image}
                        className="product-card-img"
                      />
                    </Link>
                    <Card.Body>
                      <Card.Title className="product-name" onClick={() => handleProductClick(item)}>
                        {item.title}
                      </Card.Title>
                      <Card.Text className="product-description" onClick={() => handleProductClick(item)}>
                        {item.description}
                      </Card.Text>
                      <Card.Text className="product-price" onClick={() => handleProductClick(item)}>
                        {formatRupiah(item.price)}
                      </Card.Text>
                      {quantitiesPopuler[index] === 0 ? (
                        <Button
                          variant="primary"
                          onClick={() => handleAddToCart(index, "populer")}
                        >
                          Tambah
                        </Button>
                      ) : (
                        <div className="d-flex justify-content-between align-items-center">
                          <Button
                            variant="outline-primary"
                            onClick={() =>
                              handleRemoveFromCart(index, "populer")
                            }
                          >
                            <Dash />
                          </Button>
                          <span>{quantitiesPopuler[index]}</span>
                          <Button
                            variant="primary"
                            onClick={() => handleAddToCart(index, "populer")}
                          >
                            <Plus />
                          </Button>
                        </div>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>

      <div
        className="cart-icon text-white bg-primary shadow"
        onClick={handleCheckout}
      >
        <Cart2 size={40} />
        {totalQuantity > 0 && (
          <>
            <span className="cart-count text-white">{totalQuantity}</span>
            <span className="cart-price text-white">
              {formatRupiah(totalPrice)}
            </span>
          </>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Category;
