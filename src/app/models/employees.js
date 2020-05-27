import { Schema, model } from "mongoose";

const EmployeeSchema = new Schema(
  {
    corporateID: {
      type: Number,
      min: 1,
      max: 9999,
      unique: true
    },
    name: {
      type: String,
      required: true
    },
    birthDate: {
      type: Date,
      required: true
    },
    photo: {
      type: String,
      required: true
    },
    occupation: {
      type: String,
      required: true
    },
    salary: {
      type: Number,
      required: true
    },
    sector: {
      type: String,
      required: true
    }
  },
  { timestamps: { createdAt: "registeredAt", updatedAt: "updatedAt" } }
);

export default model("Employees", EmployeeSchema);
