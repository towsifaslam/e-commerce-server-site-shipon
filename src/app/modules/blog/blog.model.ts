import {Schema,model}from'mongoose'
import {IUser,BlogModel}from'./blog.interface'
const blogSchema = new Schema<IUser>(
   
    {
        
        title:{
            type:String
        },
        description:{
            type:String,
        },
        
        comments: [
          {
            data: {
              type: String,
            },
          },
        ],
          postedBy: {
            type: Schema.Types.ObjectId,
            ref: 'User', // Reference to the UserModel
           
          },
          created:{
            type:Date,
            default:Date.now()
          },
          likes:[{type:Schema.Types.ObjectId,ref:'User'}]
          
      },
      {
        timestamps: true,
      },
)

export const Blog = model<IUser, BlogModel>('Blog', blogSchema);