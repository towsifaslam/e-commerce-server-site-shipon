import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { IUser } from './blog.interface';
import { blogService } from './blog.service';
import { responseForData } from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import pick from '../../../shared/pick';
const createBlog = catchAsync(async (req: Request, res: Response) => {
  const blogData = req.body;
  if (!blogData) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'pleas try again');
  }

  const result = await blogService.createBlog(blogData);

  responseForData.sendResponseForCreate(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created Successful',
    data: result,
  });
});

// get all blog
const getAllBlog = catchAsync(async (req: Request, res: Response) => {
  const paginationOption = pick(req.query, [
    'limit',
    'page',
    'sortBy',
    'sortOrder',
  ]);

  const result = await blogService.getAllBlog(paginationOption);

  responseForData.sendResponse<IUser[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Getting Successful',
    data: result.data,
    meta: result.meta,
  });
});
// get single blog
const getSingleBlog = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  if (!id) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'id is not found');
  }
  const result = await blogService.getSingleBLog(id);
  responseForData.sendResponseForCreate<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Getting Successful',
    data: result,
  });
});

const updateBlog = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const travelData = req.body;
  const result = await blogService.updateBlog(id, travelData);
  responseForData.sendResponseForCreate<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog data Update Successful',
    data: result,
  });
});
const deleteBlog = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await blogService.deleteBlog(id);
  responseForData.sendResponseForCreate(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Delete Successful',
    data: result,
  });
});
const createComments = catchAsync(async (req: Request, res: Response) => {
  const comment = req.body.comment;
  const id = req.params.id;

  
 
  const result = await blogService.createComment(comment,id);
  
  responseForData.sendResponseForCreate(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created Successful',
    data: result,
  });
});
const  UnComment = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await blogService.UnComment(id);
  responseForData.sendResponseForCreate(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created Successful',
    data: result,
  });
});
export const blogController = {
  createBlog,
  getAllBlog,
  getSingleBlog,
  updateBlog,
  deleteBlog,
  createComments,
  UnComment
};
