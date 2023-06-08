const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('your_database_name', 'your_username', 'your_password', {
  host: 'localhost',
  dialect: 'postgres',
});

// Define the Users table
const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Define the Transactions table
const Transaction = sequelize.define('Transaction', {
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  timestamp: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

// Define the AccountBalances table
const AccountBalance = sequelize.define('AccountBalance', {
  balance: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
});

// Define the relationships between the tables
User.hasMany(Transaction);
Transaction.belongsTo(User);
User.hasOne(AccountBalance);
AccountBalance.belongsTo(User);

// Synchronize the models with the database
sequelize.sync({ force: true }) // Set force to true to recreate tables (use with caution in production)
  .then(() => {
    console.log('Tables created successfully.');
  })
  .catch((error) => {
    console.error('Error creating tables:', error);
  });
