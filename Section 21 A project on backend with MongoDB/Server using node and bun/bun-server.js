import { serve } from "bun";

serve({
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/") {
      return new Response("Hello, world!", {
        headers: { "content-type": "text/plain" },
        status: 200,
      });
    } else {
      return new Response("Not found", { status: 404 });
    }
  },
  port: 8080,
  hostname: "127.0.0.1",
});
