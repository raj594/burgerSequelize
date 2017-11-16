module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define('Customer', {
    // Giving the Author model a name of type STRING
    customer_name: {
      type: DataTypes.STRING,
      allowNull: false,
      verify: {
        len: [1]
      }
    },
  },{
    timestamps: false
  });

  // Customer.associate = function(models) {
  //   // Associating Customers with Burgers
  //   // When a Customer eats a burger, the associated custoemr and burger information are displayed in the devoured column
  //   Customer.hasMany(models.Burger,  {
  //     foreignKey: {
  //       allowNull: true
  //     }
  //   });
  // };
  return Customer;
};