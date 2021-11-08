const serviceModel = require('../models/serviceModel')

exports.allServices = async (req, res, next) => {
    const {search,city} = req.body;

    try{
        const all_services = await serviceModel.find()
        if(all_services.length === 0){
            const error = new Error('No services were found')
            error.statusCode = 500;
            throw error;
        }
        res.status(200).json(all_services)
    } catch(e){
        console.log(e)
        if(!e.statusCode){
            e.statusCode = 500;
        }
        next(e)
    }
}