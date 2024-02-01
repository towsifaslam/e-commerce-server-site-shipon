import express from "express";
import { userRouter } from "../modules/user/user.route";
import {blogRouter } from "../modules/blog/blog.router";

const router = express.Router()

const moduleRoutes =[
    {
        path:'/users',
        route:userRouter
        
    },
    {
        path:'/blog',
        route:blogRouter
        
    }
]
moduleRoutes.map(route => router.use(route.path,route.route));

export default router