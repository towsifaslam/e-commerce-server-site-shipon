import express from'express'
import { blogController } from './blog.controller'
const router = express.Router()

//blog
router.post('/createBlog', blogController.createBlog)
router.get('/',blogController.getAllBlog)
router.get('/:id',blogController.getSingleBlog)
router.patch('/:id',blogController.updateBlog)
router.delete('/:id',blogController.deleteBlog)
// comments
router.patch('/comment/:id',blogController.createComments)
router.patch('/uncomment/:id',blogController.UnComment)


export const blogRouter = router