export default (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    itemid: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Item',
        key: 'id',
        as: 'itemid',
      }
    },
    userid: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
        as: 'userid',
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: 'Pease input input quantity'
      }
    },
    totalprice: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: 'Pease input totalprice'
      }
    },
    discountprice: {
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
  };
  return Order;
};

