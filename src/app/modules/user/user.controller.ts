import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { userService } from './user.service';
import { responseForData } from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import pick from '../../../shared/pick';
import { IUser } from './user.interface';

// create user
const createUser = catchAsync(async (req: Request, res: Response) => {
  const userData = req.body;
  const result = await userService.createUser(userData);
  const { password, ...others } = result.toObject();
  responseForData.sendResponseForCreate(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created Successful',
    data: others,
  });
});

// get all user
const getAllUser = catchAsync(async (req: Request, res: Response) => {
  const paginationOption = pick(req.query, [
    'limit',
    'page',
    'sortBy',
    'sortOrder',
  ]);

  const result = await userService.getAllUser(paginationOption);

  responseForData.sendResponse<IUser[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Getting Successful',
    data: result.data,
    meta: result.meta,
  });
});

// get single user
const getSingleUser = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await userService.getSingleUser(id);
  responseForData.sendResponseForCreate<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Getting Successful',
    data: result,
  });
});

// update user
const updateUser = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const travelData = req.body;
  const result = await userService.updateUser(id, travelData);
  responseForData.sendResponseForCreate<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User data Update Successful',
    data: result,
  });
});

// delete user
const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await userService.deleteUser(id);
  responseForData.sendResponseForCreate(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Delete Successful',
    data: result,
  });
});

export const userController = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
