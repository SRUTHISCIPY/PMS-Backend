const InventoryManagement = require("../models/InventoryManagementSchema")
module.exports={
  createInventoryManagement:async(req,res)=>{
    const {SKUNo,ItemName,ItemCategory,CurrentStock,Price,Brand,ExpiryDate}=req.body;
    try{
        const result=await InventoryManagement.create({
            SKUNo,
            ItemName, 
            ItemCategory,
            CurrentStock,
            Price,
            Brand,
            ExpiryDate
        });
        res.status(200).json({result});
    }
        catch(err){

        res.status(400).json({err});
        }
    },
   
getInventoryManagement:async(req,res)=>{
    const id=req.params.id
    try {
         const result1=await InventoryManagement.find()
         res.status(200).json({result1});
    }
    catch(err) {
        res.status(400).json({err});
        } 
},
getInventoryManagementById:async(req,res)=>{
    const id=req.params.id
    try {
         const result2=await InventoryManagement.findById(id)
         res.status(200).json({result2});
    }
    catch(err) {
        res.status(400).json({err});
        }

    
},
updateInventoryManagement:async(req,res)=>{
    const id=req.params.id
    try {
         await InventoryManagement.findByIdAndUpdate(id,{
            SKUNo:req.body.SKUNo,
            ItemName:req.body.ItemName,
            ItemCategory:req.body.ItemCategory,
            CurrentStock:req.body.CurrentStock,
            Price:req.body.Price,
            Brand:req.body.Brand,
            ExpiryDate:req.body.ExpiryDate
         });
         res.status(200).json("success");
    }
    catch(err) {
        res.status(400).json({err});
        }

    },
deleteInventoryManagement:async(req,res)=>{
        const id=req.params.id
        try {
             await InventoryManagement.findByIdAndDelete(id)
             res.status(200).json("success");
        }
        catch(err) {
            res.status(400).json({err});
            }
    
        }}
    