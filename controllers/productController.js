const Product=require('../models/Product')


exports.createProduct = async (req, res) => {
  try {
    const { title, description, price, images, stock, category, deal, dealPrice } = req.body;
    const product = await Product.create({
      title,
      description,
      price,
      images,
      stock,
      category,
      deal,
      dealPrice,
    });
    res.status(201).json(product);
  } catch (err) {
    console.error('Create product error:', err);
    res.status(500).json({ message: 'Server error creating product' });
  }
};