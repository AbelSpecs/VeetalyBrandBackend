const { request, response } = require("express");
const City = require('../models/city');

const GetCities = async(req = request, res = response) => {
    try {
        
        const cities = await City.find({status: true});
                            
        res.json(cities);
    } catch (error) {
        throw new Error(error);
    }
}

const GetCityById = async(req = request, res = response) => {
    try {
        const { id } = req.params;

        const city = await City.findById(id, {status: true});

        if(!city){
            return res.status(400).json({msg: 'City does not exist'});
        }
                            
        res.json(city);
    } catch (error) {
        throw new Error(error);
    }
}

const GetCityByName = async(req = request, res = response) => {
    try {
        const { name } = req.params;

        const city = await City.findOne({name, status: true});

        if(!city){
            return res.status(400).json({msg: 'City does not exist'});
        }
                            
        res.json(city);
    } catch (error) {
        throw new Error(error);
    }
}

const PostCity = async(req = request, res = response) => {
    try {

        const cityName = req.body.name;
        const cityExist = await City.findOne({name : cityName});

        if(cityExist){
            return res.status(400).json({msg: 'City already exist'});
        }

        const { name, province } = req.body;
        const city = new City({name, province}); 

        await city.save();
        res.json(city);

    } catch (error) {
        throw new Error(error);
    }
}

const PutCity = async(req = request, res = response) => {
    try {
        const { id } = req.params;
        const { name, shipping } = req.body;

        const city = await City.findByIdAndUpdate(id, {name: name, shipping: shipping}, { new: true });

        if(!city){
            return res.status(400).json({msg: 'City does not exist'});
        }

        res.json(city);
    } catch (error) {
        throw new Error(error);
    }

}

const DeleteCity = async(req = request, res = response) => {
    try {
        const { id } = req.params;

        const city = await City.findByIdAndUpdate(id, {status: false}, { new: true });

        if(!city){
            return res.status(400).json({msg: 'City does not exist'});
        }

        res.json(city);
    } catch (error) {
        throw new Error(error);
    }

}

module.exports = {
    PostCity,
    GetCities,
    GetCityById,
    GetCityByName,
    PutCity,
    DeleteCity
}