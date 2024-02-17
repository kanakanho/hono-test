import { Hono } from "hono";

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

export default app;
