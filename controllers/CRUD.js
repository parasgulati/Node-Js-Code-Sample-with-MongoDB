var Business = require("../models/Business");

module.exports={
    create:function(req,res)
    {
        var post=req.body;
        
        var obj = new Business({
            Email:post.Email,
            Name:post.Name,
            Type:post.Type,
            Category:post.Category
        });

        Business.findOne({Email:post.Email},function(err,data){
            if(err)
            {
                res.json({
                    status:500,
                    message:"Internal Server Error"
                }).send();
            }
            else if(data==null)
            {
                obj.save();
                res.json({
                    status:200,
                    message:"Success"
                }).send();
            }
            else
            {
                res.json({
                    status:400,
                    message:"Already Exists"
                }).send();
            }
        })
    },
    read:function(req,res)
    {
        var post=req.body;
        
        Business.findOne({Email:post.Email},function(err,data){
            if(err)
            {
                res.json({
                    status:500,
                    message:"Internal Server Error"
                }).send();
            }
            else if(data!=null)
            {
                res.json({
                    status:200,
                    message:"Success",
                    business:data
                }).send();
            }
            else
            {
                res.json({
                    status:404,
                    message:"Not Found"
                }).send();
            }
        })
    },
    update:function(req,res)
    {
        var post=req.body;
        
        Business.updateOne({Email:post.Email},{$set:{Name:post.Name,Type:post.Type,Category:post.Category}},function(err,data){
            if(err)
            {
                res.json({
                    status:500,
                    message:"Internal Server Error"
                }).send();
            }
            else
            {
                res.json({
                    status:200,
                    message:"Success"
                }).send();
            }
       })
    },
    delete:function(req,res)
    {
        var post=req.body;
        
        Business.deleteOne({Email:post.Email},function(err,data){
            if(err)
            {
                res.json({
                    status:500,
                    message:"Internal Server Error"
                }).send();
            }
            else
            {
                res.json({
                    status:200,
                    message:"Success"
                }).send();
            }
       })
    }
}

