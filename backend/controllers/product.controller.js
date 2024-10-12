import productModel from "../models/product.model.js"

const categories = async(req,res)=>{
  try {
    const categories = await
  } catch (error) {
    
  }
}

const listproducts = async(req,res)=>{
try{
    const products = await productModel.find({})
    res.json({success:true,products})
}catch(error){
   res.json({success:false, message:error.message})
}
}

const singleProduct = async(req,res)=>{
    try{
      const {productId} = req.body
      const product = await productModel.findById(productId)
      res.json({success:true, product})
    }catch(error){
      res.json({success:false, message:error.message})
    }
}

export {listproducts, singleProduct}