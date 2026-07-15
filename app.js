import express from "express";
import router from "#api/notes";

const app = express();
export default app;

//body parse from json
app.use(express.json());

// Simple logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

//use router
app.use("/notes", router);

// Catch-all error-handling middleware
app.use((err, req, res, next) => {
  res.status(500).send("Sorry! Something went wrong :(");
});
