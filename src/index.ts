// section 1
import express, { Express, Request, Response } from "express";
import * as swaggerStats from "swagger-stats";

// section 2
const port: number = 3000;
const app: Express = express();

// section 3
app.use(express.json());

// section 4
app.use(
  swaggerStats.getMiddleware({
    hostname: "localhost",
    uriPath: "/swagger-stats",
    authentication: true,
    swaggerSpec: {},
    onAuthenticate: function (
      req: any,
      username: string | null,
      password: string
    ) {
      // check for username and password
      if (username === "admin" && password === "admin") {
        return true;
      } else {
        return false;
      }
    },
  })
);

// section 5
app.get("/", (req: Request, res: Response) => {
  // Send a response to the client
  return res.send("Hello Server");
});

app.get("/hello", (req: Request, res: Response) => {
  // Send a response to the client
  return res.status(200).send("Hello Express TypeScript");
});

// section 6
app.listen(port);
console.log(`Server is running on http://localhost:${port}`);
