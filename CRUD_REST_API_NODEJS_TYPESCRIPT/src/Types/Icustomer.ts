import { Document } from "mongoose";

export interface Icustomer extends Document {
  documentType: string,
  document: number,
  firstName: string,
  lastName: string,
  address: string,
  billingAddress: string,
  telephone: number,
  email: string,
  category: string,
  department: string,
  city: string,
  observations: string,
}
