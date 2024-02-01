// import httpStatus from "http-status";
// import catchAsync from "../../../shared/catchAsync";
// import ApiError from "../../../errors/ApiError";
// import { blogService } from "./blog.service";
// import { responseForData } from "../../../shared/sendResponse";

// const createBlog = catchAsync(async (req:Request,res:Response) => {
//     const comment= req.body;
//     if (!comment) {
//       throw new ApiError(httpStatus.BAD_REQUEST, 'pleas try again');
//     }
  
//     const result = await blogService.createBlog(comment);
  
//     responseForData.sendResponseForCreate(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: 'User created Successful',
//       data: result,
//     });
//   });
  