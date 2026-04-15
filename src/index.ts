import { app, oneWindow } from "@wxn0brp/zhiva-base-lib";
import { apiRouter } from "@wxn0brp/zhiva-base-lib/api";

// like express.static
// app.static("/endpoint", "/path/to/directory");
// or
// app.static("endpoint + directory path");
app.static("public");
app.static("dist");

// Define a secure API endpoint
apiRouter.get("/hello", async () => {
    return { err: false, msg: "Hello world!" };
});

// Define a POST API endpoint
apiRouter.post("/hello", async (req) => {
    console.log(req.body.hello);
    return { err: false, msg: req.body.hello };
});

// Create the application window
// If window closed, the process will exit
oneWindow();
