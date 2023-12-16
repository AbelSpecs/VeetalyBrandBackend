const { dbConnection } = require("../database/config");
const cartRoutes = require('../routes/cart.routes');
const categoryRoutes = require('../routes/category.routes');
const ingredientRoutes = require('../routes/ingredient.routes');
const productRoutes = require('../routes/product.routes');
const userRoutes = require('../routes/user.routes');
const authRoutes = require('../routes/auth.routes');
const express = require('express');
const cors = require('cors');
require('dotenv').config();


class VeetalyServer {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.cartsPath = '/api/carts';
        this.categoriesPath = '/api/categories';
        this.ingredientsPath = '/api/ingredients';
        this.productsPath = '/api/products';
        this.usersPath = '/api/users';
        this.authPath = '/api/auth';

        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection(){
        await dbConnection();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.cartsPath, cartRoutes);
        this.app.use(this.categoriesPath, categoryRoutes);
        this.app.use(this.ingredientsPath, ingredientRoutes);
        this.app.use(this.productsPath, productRoutes);
        this.app.use(this.usersPath, userRoutes);
        this.app.use(this.authPath, authRoutes);
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server running in port ${this.port}`);
        })
    }
}


module.exports = VeetalyServer
