import { Schema, model } from "mongoose";

const SectorSchema = new Schema({
  name: String,
  description: String
});

export default model("Sector", SectorSchema);