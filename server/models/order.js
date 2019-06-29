export default (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Product',
        key: 'id',
        as: 'product_id',
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
        as: 'user_id',
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: 'Pease input input quantity'
      }
    },
    total_price: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: 'Pease input total price'
      }
    },
    discount_price: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: 'Pease input discountprice'
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Pease input status'
      }
    },

  }, {});
  Order.associate = (models) => {
    // associations can be defined here
    Order.belongsTo(models.User, {
      foreignKey: 'user_id',
      onDelete: 'CASCADE'
    });
  };
  return Order;
};

