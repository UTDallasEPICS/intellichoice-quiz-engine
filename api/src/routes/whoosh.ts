import * as express from "express";
import { Example } from "../models";
import { validate, CreateExampleSchema, UpdateExampleSchema } from "../helpers/schema";

export let route = express.Router();

// List all items
route.get("/", async (req: any, res: any, next: any) => {
  try {
    var items = await Example.find({ })
    res.send(items);
  } catch (e) { next(e) }
});

// Create a new example
route.post("/", validate(CreateExampleSchema), async (req: any, res: any, next: any) => {
  try {
    req.body.dateCreated = Date.now();
    const item = new Example(req.body);
    await item.save();
    res.send({ message: "We did it" })
  } catch (e) { next(e) }
})

// Update an example
route.put("/:id", validate(UpdateExampleSchema),async (req: any, res: any, next: any) => {
  try {
    //find and update an example
    const instance = await Example.findOneAndUpdate({ _id: req.params.id }, { $set: req.body })
    if (!instance) {
      return next({ status: 404, message: "Not found" })
    }
    res.send({ message: "We did it" })
  } catch (e) { next(e) }
})