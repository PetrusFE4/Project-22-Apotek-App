import Product from "../models/productModel.js";

// Get all products
export const getProducts = async (req, res) => {
  try {
    let products = await Product.find();
    res.status(201).json({ products });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
};

// Post a new product
export const postProducts = async (req, res) => {
  const { productName, id_category, image, desc, indication, composition, dose, howtouse, effect, group, nie, price } = req.body;

  try {
    const newProduct = new Product({
      productName,
      id_category,
      image,
      desc,
      indication,
      composition,
      dose,
      howtouse,
      effect,
      group,
      nie,
      price,
    });
    const saveProduct = await newProduct.save();
    res.status(201).json({ saveProduct });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

// Get a product by name
export const getProductsById = async (req, res) => {
  try {
    let product = await Product.findOne({
      productName: req.params.productName,
    });
    res.status(201).json({ product });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Product Not Found");
  }
};

// Update a product
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { productName, id_category, image, desc, indication, composition, dose, howtouse, effect, group, nie, price } = req.body;

  try {
    let product = await Product.findById(id);

    if (!product) {
      return res.status(404).send("Product Not Found");
    }

    product.productName = productName || product.productName;
    product.id_category = id_category || product.id_category;
    product.image = image || product.image;
    product.desc = desc || product.desc;
    product.indication = indication || product.indication;
    product.composition = composition || product.composition;
    product.dose = dose || product.dose;
    product.howtouse = howtouse || product.howtouse;
    product.effect = effect || product.effect;
    product.group = group || product.group;
    product.nie = nie || product.nie;
    product.price = price || product.price;

    const updatedProduct = await product.save();
    res.status(200).json({ updatedProduct });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

// Delete a product
export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).send("Product Not Found");
    }

    await product.deleteOne();
    res.status(200).send("Product Successfully Deleted");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};
