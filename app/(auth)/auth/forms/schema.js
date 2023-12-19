'use client'
import * as yup from 'yup'

export const loginSchema = yup.object({
    username: yup.string().required("username is required").email("Enter a valid email"),
    password: yup.string().required("enter password")
})

export const registerSchema = yup.object({
    name: yup.string().required("name is required"),
    email: yup.string().required("email is required").email("Enter a valid email"),
    password: yup.string().required("password is required"),
})


