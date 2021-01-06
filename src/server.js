const koa = require("koa");
const Router = require("koa-router");
const rc = require("koa-re");

const app = new koa();

const View = require("./index.jsx");

app.use(
  async (ctx, next) => {
    console.log(ctx.request);
    console.log(ctx.response);
    let data = ctx.request.body;
    await next();
  },
  (data) => console.log("next ctx", data)
);

app.listen(3000);
