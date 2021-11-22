const serviceModel = require('../models/serviceModel')
const mongoose = require('mongoose')
exports.allServices = async (req, res, next) => {

    try {
        const all_services = await serviceModel.find()
        if (all_services.length === 0) {
            const error = new Error('No services were found')
            error.statusCode = 500;
            res.status(500).json({ error: 'No services were found' })
            throw error;
        }
        res.status(200).json(all_services)
    } catch (e) {

        if (!e.statusCode) {
            e.statusCode = 500;
        }
        next(e)
    }
}

exports.createService = async (req, res, next) => {
    const { title, imgLink, price, tags, description } = req.body.form
    const user = req.body.user
    // console.log(req)

    try {
        const service = serviceModel({
            owner: new mongoose.Types.ObjectId(user._id),
            title: title,
            img: imgLink,
            price: price,
            tags: tags,
            description: description
        })
        let result = await service.save()
        res.status(200).json({ msg: 'Successfully created service' })
    } catch (e) {

        if (!e.statusCode) {
            e.statusCode = 500;
        }
        res.status(500)
        next(e)
    }
}

exports.findServiceByUser = async (req, res, next) => {
    try {
        let userId = req.body.owner
        let results = serviceModel.find({ owner: new mongoose.Types.ObjectId(userId) })
        if (!results) {
            const error = new Error('No services were found')
            error.statusCode = 401
            throw error;
        }
        res.status(200).json(results)

    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.deleteServiceById = async (req, res, next) => {
    try {
        let serviceId = req.params.id
        let results = serviceModel.deleteOne({ _id: new mongoose.Types.ObjectId(serviceId)}, (err)=>{
            {
                if(err){
                    const error = new Error(err)
                    error.statusCode = 500
                    throw error;

                }
                res.status(200).json({msg:'Successfully deleted service'})
            }
        })





    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}