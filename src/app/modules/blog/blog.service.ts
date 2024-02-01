import { IUser } from "./blog.interface";
import {Blog} from'./blog.model'
import { IPaginationOption } from '../../../shared/pagination';
import { IGenericResponse } from '../../../interfaces/common';
const createBlog = async(blog:IUser)=>{
    const result = await Blog.create(blog)
    return result;
}

// get all user
const getAllBlog = async (
    paginationOption: IPaginationOption,
  ): Promise<IGenericResponse<IUser[]>> => {
    // this is for pagination
  
    const { page = 1, limit = 10 } = paginationOption;
    const skip = (page - 1) * limit;
  
    const result = await Blog.find()
      .sort({
        createdAt: 'desc',
      })
      .skip(skip)
      .limit(limit);
    const total = await Blog.countDocuments();
    return {
      meta: {
        page,
        limit,
        total,
      },
      data: result,
    };
  };
// get single blog
const getSingleBLog = async (id: string): Promise<IUser | null> => {
    const result = await Blog.findById(id);
    return result;
  };
  const updateBlog = async(id:String,payload: Partial<IUser>)=>{
    const result = await Blog.findByIdAndUpdate(
        {_id:id},
        {$set:{...payload}},
        {new:true}
    )
    return result;
  }
  const deleteBlog = async(id:string)=>{
    const result = await Blog.findByIdAndDelete(id);
    return result
  }
  const createComment = async(comment: string, id: string):Promise<IUser | null> =>{
        console.log(comment,id)
        console.log('***********************')
    const result = await Blog.findByIdAndUpdate(id,{comments:comment},{new:true})
    return result
}
const UnComment=async(id:string)=>{
  const result = await Blog.findByIdAndUpdate(id,{comments:""},{new:true})
  return result
}
export const blogService = {
    createBlog,
    getAllBlog,
    getSingleBLog,
    updateBlog,
    deleteBlog,
    createComment,
    UnComment
}