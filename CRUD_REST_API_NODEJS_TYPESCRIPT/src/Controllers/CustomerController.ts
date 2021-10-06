import { Request, Response, NextFunction } from "express";
import Customer from "../Models/Customer";
import { Icustomer } from "../Types/Icustomer";
import { CustomerIdValidation, CustomerValidation, UpdateCustomerValidation } from "../Validations/CustomerValidation";
import { IUpadateCustomer } from "../Types/IUpadateCustomer";

/**
 * add new customer
 * @param customerModelValidation
 */
const addCustomer = async (customerModelValidation: Icustomer) => {
  try {
    const customer = new Customer({
      documentType: customerModelValidation.documentType,
      document: customerModelValidation.document,
      firstName: customerModelValidation.firstName,
      lastName: customerModelValidation.lastName,
      address: customerModelValidation.address,
      billingAddress: customerModelValidation.billingAddress,
      telephone: customerModelValidation.telephone,
      email: customerModelValidation.email,
      category: customerModelValidation.category,
      department: customerModelValidation.department,
      city: customerModelValidation.city,
      observations: customerModelValidation.observations,
    });
    
    return await customer.save();
  } catch (error) {
    console.log(error);
  }
};

/**
 * Create a new post
 * @param req
 * @param res
 * @param next
 */
export const CreateCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const customerModelValidation: Icustomer = await CustomerValidation.validateAsync(
      req.body
    );
    
    if (!customerModelValidation) {
      return next(
        res.status(400).json({
          message: "Invalid details provided.",
        })
      );
    } else {
      const filterDocument = await Customer.findOne({
        document: customerModelValidation.document,
        documentType: customerModelValidation.documentType
      }).exec();
      console.log(filterDocument);
      
      if(!filterDocument){
        const newCustomer = await addCustomer(customerModelValidation);
        if (newCustomer) {
          res.status(201).json({
            newCustomer,
          });
        } else {
          return next(
            res.status(400).json({
              message: "Error creating the Customer.",
            })
          );
        }
      }else{
        return next(
          res.status(400).json({
            message: "type and document already exist.",
          }))
      }
    }
  } catch (error) {
    console.log(error);
    
    return next(
      res.status(400).json({
        message: "Invalid details provided.",
      })
    );
  }
};

/**
 * Get all post
 * @param req
 * @param res
 * @param next
 */
 export const getAllCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const getCustomer = await Customer.find();

    if (getCustomer) {
      res.status(200).json(getCustomer);
    } else {
      return next(
        res.status(404).json({
          message: "Not found.",
        })
      );
    }
  } catch (error) {
    return next(
      res.status(400).json({
        message: "Invalid details provided.",
      })
    );
  }
};

/**
 * get one customer
 * @param req
 * @param res
 * @param next
 */
 export const getCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const customerIdValidation = await CustomerIdValidation.validateAsync(
      req.params.customerId
    );

    if (!customerIdValidation) {
      return next(
        res.status(400).json({
          message: "Operation failed, invalid details provided.",
        })
      );
    } else {
      const getCustomers = await Customer.findById(customerIdValidation);

      if (getCustomers) {
        res.status(200).json(getCustomers);
      } else {
        return next(
          res.status(404).json({
            message: "Not found.",
          })
        );
      }
    }
  } catch (error) {
    return next(
      res.status(400).json({
        message: "Invalid details provided.",
      })
    );
  }
};

/**
 * Update customer
 * @param req
 * @param res
 * @param next
 */
 export const updateCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const resUpdateCustomerValidation: IUpadateCustomer = await UpdateCustomerValidation.validateAsync(
      req.body
    );

    if (!resUpdateCustomerValidation) {
      return next(
        res.status(400).json({
          message: "Operation failed, invalid details provided.",
        })
      );
    } else {
      const updatedCustomers = await Customer.findByIdAndUpdate(
        {
          _id: resUpdateCustomerValidation.customerId,
        },
        {
          $set: {
            firstName: resUpdateCustomerValidation.firstName,
            lastName: resUpdateCustomerValidation.lastName,
            address: resUpdateCustomerValidation.address,
            billingAddress: resUpdateCustomerValidation.billingAddress,
            telephone: resUpdateCustomerValidation.telephone,
            email: resUpdateCustomerValidation.email,
            category: resUpdateCustomerValidation.category,
            department: resUpdateCustomerValidation.department,
            city: resUpdateCustomerValidation.city,
            observations: resUpdateCustomerValidation.observations
          },
        }
      );

      if (updatedCustomers) {
        res.status(200).json(updatedCustomers);
      } else {
        return next(
          res.status(404).json({
            message: "Not found.",
          })
        );
      }
    }
  } catch (error) {
    console.log(error);
    
    return next(
      res.status(400).json({
        message: "Invalid details provided.",
      })
    );
  }
};

/**
 * delete customer
 * @param req
 * @param res
 * @param next
 */
 export const deteleCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const customerIdValidation = await CustomerIdValidation.validateAsync(
      req.params.customerId
    );

    if (!customerIdValidation) {
      return next(
        res.status(400).json({
          message: "Operation failed, invalid details provided.",
        })
      );
    } else {
      const deleteCustomer = await Customer.findByIdAndDelete(customerIdValidation);

      if (deleteCustomer) {
        res.status(200).json(deleteCustomer);
      } else {
        return next(
          res.status(404).json({
            message: "Not found.",
          })
        );
      }
    }
  } catch (error) {
    return next(
      res.status(400).json({
        message: "Invalid details provided.",
      })
    );
  }
};
