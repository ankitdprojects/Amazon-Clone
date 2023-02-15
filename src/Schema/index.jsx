import React from 'react'
import * as Yup from 'yup'

export const LoginSchema = Yup.object({
    email: Yup.string().email().required("Please Enter Your Email"),
    password: Yup.string().min(6).required("Please Enter Your Password")
})

export const SignupSchema = Yup.object({
    name: Yup.string() .matches(/^[a-zA-Z ]+$/, "Name can only contain letters and spaces").required("Please Enter Your Name"),
    mobileNumber:Yup.string().matches(/^[0-9]{10}$/, "Enter a valid phone number").required("Enter your mobile number"),
    email: Yup.string().email().required("Please Enter Your Email"),
    password: Yup.string().min(6).required("Please Enter Your Password")
})

export const ProductSchema = Yup.object({
    productName: Yup.string() .matches(/^[a-zA-Z 0-9]+$/, "Name can only contain letters, numbers and spaces").required("Please Enter Your Name"),
    description: Yup.string()
    .min(10, "Description must be at least 10 characters")
    .max(100, "Description must be no more than 100 characters")
    .required("Please enter a description"),
    price:Yup.number()
    .typeError("Price must be a number")
    .positive("Price must be a positive number")
    .max(99999.99, "Price must be less than 99999.99")
    .required("Please enter a price"),
    image:Yup.mixed()
})

export const CheckoutSchema = Yup.object({
    fullName: Yup.string() .matches(/^[a-zA-Z 0-9]+$/, "Name can only contain letters and spaces").required("Please Enter Your Name"),
    mobileNumber:Yup.number()
    .typeError("Enter Mobile Number")
    .positive("Number must be a positive number")
    .required("Please enter a Mobile Number"),
    pinCode:Yup.number()
    .typeError("Pincode must be a number")
    .positive("Pincode must be a positive number")
    .required("Please enter PinCode"),
    address: Yup.string()
    .min(5, "Address must be at least 5 characters")
    .required("Please enter a Address"),
    area: Yup.string()
    .required("Please enter Area"),
    townCity: Yup.string()
    .required("Please enter Town/city Name"),
    landmark: Yup.string()
})