import { Router } from "express";
const router: Router = Router();
import * as CustomerController from "../Controllers/CustomerController";

//create customer
router.post("/", CustomerController.CreateCustomer);

//get all customer
router.get("/", CustomerController.getAllCustomer);

//get one post
router.get("/:customerId", CustomerController.getCustomer);

//update customer
router.patch("/", CustomerController.updateCustomer);

//delete post
router.delete("/:customerId", CustomerController.deteleCustomer);

export default router;
