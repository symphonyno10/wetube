import express from "express";
import {
  chagePassword,
  editProfile,
  userDetail,
  users,
} from "../controllers/usercontroller";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, chagePassword);

export default userRouter;
