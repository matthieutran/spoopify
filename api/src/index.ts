import Koa from "koa";
import Router from "koa-router";
import connection from "./db";

const app = new Koa();
const router = new Router();

connection();

router.get("/", (ctx: Koa.Context) => {
  ctx.body = "Hello World";
});

app.use(router.routes());

const port = process.env.PORT || 3000;
const server = app.listen(port);
console.info(`Listening to http://localhost:${port}/`);

export default server;
