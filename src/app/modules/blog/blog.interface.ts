import { Model,Types } from 'mongoose';
import {IUserId} from'../user/user.interface'
export type IUser = {
 
  title: string;
  description: string;
  likes: Types.ObjectId[];
  comments: {
    data: string;
  }[];
  postedBy:Types.ObjectId | IUserId,
  created:Date,
  
};

export type BlogModel = Model<IUser, Record<string, unknown>>;