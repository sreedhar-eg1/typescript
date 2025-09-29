import _, { values } from "lodash";
import z from "zod";
import fs from "node:fs"; // not recognized by typescript, so @types/node need to be installed
import { title } from "node:process";

const arr = [1, 2, 3, 4, 5, 6];

_.chunk(["a", "b", "c", "d"], 2);

const dataSchema = z.object({
  title: z.string(),
  id: z.number(),
  values: z.array(z.union([z.string(), z.number()])),
});

const content = JSON.parse(fs.readFileSync("data.json").toString());
console.log(content)

const data = dataSchema.parse(content); // If the content is differnet from the schema difined, then it throws an error
