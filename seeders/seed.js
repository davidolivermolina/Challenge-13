const sequelize = require('../config/connection');
const { Category, Product, Tag } = require('../models');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const categories = await Category.bulkCreate([
    { category_name: 'Electronics' },
    { category_name: 'Clothing' },
    { category_name: 'Books' },
  ]);

  const products = await Product.bulkCreate([
    { product_name: 'Laptop', price: 799.99, stock: 10, category_id: categories[0].id },
    { product_name: 'T-shirt', price: 19.99, stock: 20, category_id: categories[1].id },
    { product_name: 'JavaScript Book', price: 29.99, stock: 5, category_id: categories[2].id },
  ]);

  const tags = await Tag.bulkCreate([
    { tag_name: 'Tech' },
    { tag_name: 'Fashion' },
    { tag_name: 'Programming' },
  ]);

  process.exit(0);
};

seedDatabase();
