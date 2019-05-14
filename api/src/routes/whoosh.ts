import * as express from "express";
import { Example } from "../models";

export let route = express.Router();

// List all items
route.get("/", async (req: any, res: any, next: any) => {
  try {
    var items = await Example.find({ })
    res.send(items);
  } catch (e) { next(e) }
});
