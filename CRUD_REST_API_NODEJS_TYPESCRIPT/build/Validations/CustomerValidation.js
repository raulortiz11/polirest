"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCustomerValidation = exports.CustomerIdValidation = exports.CustomerValidation = void 0;
var joi_1 = __importDefault(require("joi"));
exports.CustomerValidation = joi_1.default.object({
    documentType: joi_1.default.string().min(2).required(),
    document: joi_1.default.number().min(10).required(),
    firstName: joi_1.default.string().min(6).required(),
    lastName: joi_1.default.string().min(6).required(),
    address: joi_1.default.string().min(6).required(),
    billingAddress: joi_1.default.string().min(10).required(),
    telephone: joi_1.default.number().min(7).required(),
    email: joi_1.default.string().min(10).required(),
    category: joi_1.default.string().min(6).required(),
    department: joi_1.default.string().min(6).required(),
    city: joi_1.default.string().min(6).required(),
    observations: joi_1.default.string(),
});
exports.CustomerIdValidation = joi_1.default.string().alphanum().required();
exports.UpdateCustomerValidation = joi_1.default.object({
    customerId: joi_1.default.string().alphanum().required(),
    firstName: joi_1.default.string().min(6).required(),
    lastName: joi_1.default.string().min(6).required(),
    address: joi_1.default.string().min(6).required(),
    billingAddress: joi_1.default.string().min(10).required(),
    telephone: joi_1.default.number().min(7).required(),
    email: joi_1.default.string().min(10).required(),
    category: joi_1.default.string().min(6).required(),
    department: joi_1.default.string().min(6).required(),
    city: joi_1.default.string().min(6).required(),
    observations: joi_1.default.string(),
});
