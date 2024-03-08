import { Hono } from "hono";
import randomLab from "./randomlab";

const app = new Hono();

app.get("/", (c) => {
    return c.text("Hello, World!");
});

app.get("/head/", (c) => {
    // ヘッダーの中身を確認
    console.log(c);
    console.log(c.req.raw.headers);
    const headers = c.req.raw.headers;
    const auth = headers.get("authorization");
    console.log(auth);
    if (!auth) {
        return c.text("No Authorization header");
    }

    return c.text(auth);
});

app.get("/number/", (c) => {
    // 1~10の乱数を返す
    const number = Math.floor(Math.random() * 10) + 1;
    return c.json({ number: number });
});

app.get("/labs/", (c) => {
    const labs = randomLab();
    return c.json(labs);
});

export default app;
