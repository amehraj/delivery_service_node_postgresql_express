export default (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
      name: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: 'Please enter Product Name'
        }
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: {
          args: false,
          msg: 'Please input Price'
        }
      },
      discount_price: {
        type: DataTypes.INTEGER,
        allowNull: {
          args: false,
          msg: 'Please input discount price'
        },
  
      },
    }, {});
    Product.associate = (models) => {
      // associations can be defined here
    };
    return Product;
  };