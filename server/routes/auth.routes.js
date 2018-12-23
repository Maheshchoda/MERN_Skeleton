import express from "express";
import authCtrl from "../controllers/auth.controller";
const router = express.Router();

router.route("/auth/signin").post(authCtrl.Signin);

router.route("/auth/signOut").get(authCtrl.Signout);

export default router;
