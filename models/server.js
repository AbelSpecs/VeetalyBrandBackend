const { dbConnection } = require("../database/config");
const cartRoutes = require('../routes/cart.routes');
const categoryRoutes = require('../routes/category.routes');
const ingredientRoutes = require('../routes/ingredient.routes');
const productRoutes = require('../routes/product.routes');
const userRoutes = require('../routes/user.routes');
const authRoutes = require('../routes/auth.routes');
const countryRoutes = require('../routes/country.routes');
const provinceRoutes = require('../routes/province.routes');
const cityRoutes = require('../routes/city.routes');
const orderRoutes = require('../routes/order.routes');
const boxRoutes = require('../routes/box.routes');
const express = require('express');
const cors = require('cors');
require('dotenv').config();


class VeetalyServer {
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 8080;
        this.cartsPath = '/api/carts';
        this.categoriesPath = '/api/categories';
        this.ingredientsPath = '/api/ingredients';
        this.productsPath = '/api/products';
        this.usersPath = '/api/users';
        this.authPath = '/api/auth';
        this.countryPath = '/api/countries';
        this.provincesPath = '/api/provinces';
        this.citiesPath = '/api/cities';
        this.ordersPath = '/api/orders';
        this.boxesPath = '/api/boxes'

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
        this.app.use(this.countryPath, countryRoutes);
        this.app.use(this.provincesPath, provinceRoutes);
        this.app.use(this.citiesPath, cityRoutes);
        this.app.use(this.ordersPath, orderRoutes);
        this.app.use(this.boxesPath, boxRoutes);
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server running in port ${this.port}`);
        })
    }
}


module.exports = VeetalyServer
