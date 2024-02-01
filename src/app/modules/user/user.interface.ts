import { Model } from 'mongoose';

export type IUserId = {
  title: string;
};

export type IUser = {
  name: string;
  email: string;
  password: string;
  phone: string;
  image: string;
 
   nationality:string;
   birthday:{
    day:string,
    month:string,
    year:string
   }
};

export type UserModel = Model<IUser, Record<string, unknown>>;
