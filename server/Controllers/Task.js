import Task from '../models/Task.js'

export const CreateTask = async(req,res,next) => {
    try{
        const {id} = req.user
        const completionDate = new Date(req.body.date)
        const task = new Task({...req.body, userId: id, date: completionDate})
        const saveTask = await task.save()
        return res.status(201).json({task: saveTask})
    }
    catch(err){
        next(err)
    }
}

export const UpdateTask = async(req,res,next) => {
    try{
        const {id} = req.params;
        const task = await Task.findByIdAndUpdate(id, {...req.body}, {new: true})
        return res.status(201).json({task})
    }
    catch(err){
        next(err)
    }
}

export const getTask = async(req,res,next) => {
    try{
        const {id} = req.params
        const task = await Task.findById(id)
        return res.status(201).json({task})
    }
    catch(err){
        next(err)
    }
}

export const getTasks = async(req,res,next) => {
    try{
        const type = req.query?.type
        const day = req.query?.day
        const {id} = req.user
        if(type) {
            var tasks = await Task.find({userId: id, type})
        }
        else {
            var tasks = await Task.find({userId: id})
        }

        // if(day) {
        //     var tasks = await Task.find({userId: id, day})
        // }
        // else {
        //     var tasks = await Task.find({userId: id})
        // }

        return res.status(201).json({tasks})
    }
    catch(err){
        next(err)
    }
}