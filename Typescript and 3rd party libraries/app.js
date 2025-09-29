"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const zod_1 = __importDefault(require("zod"));
const node_fs_1 = __importDefault(require("node:fs")); // not recognized by typescript, so @types/node need to be installed
const arr = [1, 2, 3, 4, 5, 6];
lodash_1.default.chunk(["a", "b", "c", "d"], 2);
const dataSchema = zod_1.default.object({
    title: zod_1.default.string(),
    id: zod_1.default.number(),
    values: zod_1.default.array(zod_1.default.union([zod_1.default.string(), zod_1.default.number()])),
});
const content = JSON.parse(node_fs_1.default.readFileSync("data.json").toString());
console.log(content);
const data = dataSchema.parse(content); // If the content is differnet from the schema difined, then it throws an error
