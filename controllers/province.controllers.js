const { request, response } = require("express");
const Province = require('../models/province');

const GetProvinces = async(req = request, res = response) => {
    try {
        
        const provinces = await Province.find({status: true});
                            
        res.json(provinces);
    } catch (error) {
        throw new Error(error);
    }
}

const GetProvinceById = async(req = request, res = response) => {
    try {
        const { id } = req.params;

        const province = await Province.findById(id, {status: true});

        if(!province){
            return res.status(400).json({msg: 'Province does not exist'});
        }
                            
        res.json(province);
    } catch (error) {
        throw new Error(error);
    }
}

const GetProvinceByName = async(req = request, res = response) => {
    try {
        const { name } = req.params;

        const province = await Province.findOne({name, status: true});

        if(!province){
            return res.status(400).json({msg: 'Province does not exist'});
        }
                            
        res.json(province);
    } catch (error) {
        throw new Error(error);
    }
}

const PostProvince = async(req = request, res = response) => {
    try {

        const provinceName = req.body.name;
        const provinceExist = await Province.findOne({name : provinceName});

        if(provinceExist){
            return res.status(400).json({msg: 'Province already exist'});
        }

        const { name, country } = req.body;
        const province = new Province({name, country}); 

        await province.save();
        res.json(province);

    } catch (error) {
        throw new Error(error);
    }
}

const PutProvince = async(req = request, res = response) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        const province = await Province.findByIdAndUpdate(id, {name: name}, { new: true });

        if(!province){
            return res.status(400).json({msg: 'Province does not exist'});
        }

        res.json(province);
    } catch (error) {
        throw new Error(error);
    }

}

const DeleteProvince = async(req = request, res = response) => {
    try {
        const { id } = req.params;

        const province = await Province.findByIdAndUpdate(id, {status: false}, { new: true });

        if(!province){
            return res.status(400).json({msg: 'Province does not exist'});
        }

        res.json(province);
    } catch (error) {
        throw new Error(error);
    }

}

module.exports = {
    PostProvince,
    GetProvinces,
    GetProvinceById,
    GetProvinceByName,
    PutProvince,
    DeleteProvince
}