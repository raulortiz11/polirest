import mongoose, { Schema } from "mongoose";
import { Ipost } from "../Types/Ipost";
const CustomerSchema: Schema = new Schema(
  {
    documentType: {
      type: String,
      required: true,
    },
    document: {
      type: Number,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    billingAddress: {
      type: String,
      required: true,
    },
    telephone: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    observations: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);
const Customer = mongoose.model<Ipost>("Customer", CustomerSchema);
export default Customer;
