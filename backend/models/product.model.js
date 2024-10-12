import mongoose,{Schema} from "mongoose";

const productSchema = new Schema({
    title:{
        type:String
    },
     sizes:{
     type:Array,
     required:true
     },
    category:{
        type:String,
        required:true
    },
    image:{
        type:Array,
    },
    price:{
        type:Number,
        required:true
    },
    trending:{
        type:Boolean
    },
    date:{
        type:Number,
        required:true
    }
})

const productModel = mongoose.models.product || mongoose.model('product',productSchema);
export default productModel