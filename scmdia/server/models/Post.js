import mongoose from "mongoose";
const {Schema} = mongoose;

const postSchema = mongoose.Schema ( {
    userId:{
        type: Schema.Types.ObjectId, ref:"User",required:true,
        required:true,
    },
    firstName: {
        type:String,
        required:true,
    },
    lastName: {
        type:String,
        required:true,
    },
    location:String,
    description:String,
    picturePath :String,
    userPicture :String,
    likes : {
        type:Map,
        of:Boolean,
    },
   comments:{
    type:Array,
    default:[]
   }
    
},
{timestamps:true}
);

const Post = mongoose.model("Post" , postSchema);
export default Post;