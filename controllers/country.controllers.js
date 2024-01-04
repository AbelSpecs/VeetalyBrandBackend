const { request, response } = require("express");
const Country = require('../models/country');

const GetCountries = async(req = request, res = response) => {
    try {
        
        const countries = await Country.find({status: true});
                            
        res.json(countries);
    } catch (error) {
        throw new Error(error);
    }
}

const GetCountryById = async(req = request, res = response) => {
    try {
        const { id } = req.params;

        const country = await Country.findById(id, {status: true});

        if(!country){
            return res.status(400).json({msg: 'Country does not exist'});
        }
                            
        res.json(country);
    } catch (error) {
        throw new Error(error);
    }
}

const GetCountryByName = async(req = request, res = response) => {
    try {
        const { name } = req.params;

        const country = await Country.findOne({name, status: true});

        if(!country){
            return res.status(400).json({msg: 'Country does not exist'});
        }
                            
        res.json(country);
    } catch (error) {
        throw new Error(error);
    }
}

const PostCountry = async(req = request, res = response) => {
    try {

        const countryName = req.body.name;
        const countryExist = await Country.findOne({name : countryName});

        if(countryExist){
            return res.status(400).json({msg: 'Country already exist'});
        }

        const { name } = req.body;
        const country = new Country({name}); 

        await country.save();
        res.json(country);

    } catch (error) {
        throw new Error(error);
    }
}

const PutCountry = async(req = request, res = response) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        const country = await Country.findByIdAndUpdate(id, {name: name}, { new: true });

        if(!country){
            return res.status(400).json({msg: 'Country does not exist'});
        }

        res.json(country);
    } catch (error) {
        throw new Error(error);
    }

}

const DeleteCountry = async(req = request, res = response) => {
    try {
        const { id } = req.params;

        const country = await Country.findByIdAndUpdate(id, {status: false}, { new: true });

        if(!country){
            return res.status(400).json({msg: 'Country does not exist'});
        }

        res.json(country);
    } catch (error) {
        throw new Error(error);
    }

}

module.exports = {
    PostCountry,
    GetCountries,
    GetCountryById,
    GetCountryByName,
    PutCountry,
    DeleteCountry
}