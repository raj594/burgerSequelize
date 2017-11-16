module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define('Burger', {
    // Giving the Author model a name of type STRING
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      verify: {
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      default: false,
    },
  }, {
  timestamps: false
});


  Burger.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Burger.belongsTo(models.Customer);
  };

  return Burger;
};
