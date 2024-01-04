const { request, response } = require("express");
const Box = require('../models/box');

// const GetBoxes = async(req = request, res = response) => {
//     try {
        
//         const boxes = await Box.find({status: true});
                            
//         res.json(boxes);
//     } catch (error) {
//         throw new Error(error);
//     }
// }

// const GetBoxById = async(req = request, res = response) => {
//     try {
//         const { id } = req.params;

//         const box = await Box.findById(id, {status: true});

//         if(!box){
//             return res.status(400).json({msg: 'Box does not exist'});
//         }
                            
//         res.json(box);
//     } catch (error) {
//         throw new Error(error);
//     }
// }

const PostBox = async(req = request, res = response) => {
    try {

        const boxUnit = req.body.name;
        const boxExist = await Box.findOne({units : boxUnit});

        if(boxExist){
            return res.status(400).json({msg: 'Box already exist'});
        }

        const box = req.body;
        const newBox = new Box(box); 

        await newBox.save();
        res.json(newBox);

    } catch (error) {
        throw new Error(error);
    }
}

// const PutBox = async(req = request, res = response) => {
//     try {
//         const { id } = req.params;
//         const { name } = req.body;

//         const box = await Box.findByIdAndUpdate(id, {name: name}, { new: true });

//         if(!box){
//             return res.status(400).json({msg: 'Box does not exist'});
//         }

//         res.json(box);
//     } catch (error) {
//         throw new Error(error);
//     }

// }

// const DeleteBox = async(req = request, res = response) => {
//     try {
//         const { id } = req.params;

//         const box = await Box.findByIdAndUpdate(id, {status: false}, { new: true });

//         if(!box){
//             return res.status(400).json({msg: 'Box does not exist'});
//         }

//         res.json(box);
//     } catch (error) {
//         throw new Error(error);
//     }

// }

module.exports = {
    PostBox,
    // GetBoxes,
    // GetBoxById,
    // PutBox,
    // DeleteBox
}