'use client'

import { Box, Stack, Button, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { registerSchema } from './schema'



function RegisterForm() {


    const { handleSubmit, register, formState: { errors }, reset } = useForm({
        resolver: yupResolver(registerSchema)
    })


    const submitForm = (data) => {
        console.log(data);
        reset()
    }


    return (
        <Box component="form" noValidate autoComplete='off' onSubmit={handleSubmit(submitForm)} >

            <Stack spacing={2}>
                <Typography variant='h5'>Register for an account</Typography>
                <TextField
                    {...register("name")}
                    label="Name"
                    error={!!errors.name}
                    helperText={errors.name?.message}
                />
                <TextField
                    {...register("email")}
                    label="Email/Username"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />
                <TextField
                    {...register("password")}
                    label="Password"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />
                <Button type='submit' variant='contained'>Register</Button>
            </Stack>

        </Box>
    )
}

export default RegisterForm