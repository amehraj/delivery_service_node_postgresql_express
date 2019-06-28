export default (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter Item Name'
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: 'Please input Price'
      }
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: 'Please input discount price'
      },

    },
  }, {});
  Item.associate = (models) => {
    // associations can be defined here
  };
  return Item;
};