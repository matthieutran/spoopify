import Router from "@koa/router";
import userRouter from "./user.routes";

const router = new Router();

router.use(userRouter.routes());

export default router;