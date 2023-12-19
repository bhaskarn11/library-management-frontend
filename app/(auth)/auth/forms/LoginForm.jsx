'use client'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from './schema'
import { Box, Button, Card, Paper, Stack, TextField, Typography } from '@mui/material'

function LoginForm() {

    const { handleSubmit, formState: { errors }, register, reset } = useForm({
        resolver: yupResolver(loginSchema)
    })

    const submitForm = (data) => {
        console.log(data);
        reset()
    }

    return (
        <Box component="form"
            noValidate autoComplete='off'
            onSubmit={handleSubmit(submitForm)}>
            <Card sx={{ textAlign: "center", justifyContent: "center", display: "flex" }} variant='outlined'>
                <Stack spacing={3} sx={{ width: "50%", p: 3 }} direction="column">
                    <Typography variant='h5'>Login to your account</Typography>

                    <TextField fullWidth {...register("username")}
                        label="Username"
                        error={!!errors.username}
                        helperText={errors.username?.message} />

                    <TextField fullWidth {...register("password")}
                        label="Password"
                        error={!!errors.password}
                        helperText={errors.password?.message} />
                    <Button variant='contained' type='submit'>LOGIN</Button>
                </Stack>
            </Card>
        </Box>
    )
}

export default LoginForm