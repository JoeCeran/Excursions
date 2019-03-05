// http://docs.sequelizejs.com/manual/tutorial/models-definition.html#validations  
//(can check assighment 15-sequelize/01-Activities/02-Day/10-Sequelize-Validations)
module.exports = function(sequelize, DataTypes) {
  var Excursion = sequelize.define("Excursion", {
    excursion_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
       isDate: true
      }
    },
    numberOfpeople: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1
      }
    },
    cost: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
       min: 1
      }
    },
    totalCost: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
       min: 1
      }
    }
  });

  Excursion.associate = function(models) {
    // We're saying that a Excursion should belong to a Login
    // A Excursions can't be created without a Login due to the foreign key constraint
    Excursion.belongsTo(models.Login, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Excursion;
};
