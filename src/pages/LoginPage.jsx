import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import apiClient from '../shared/api/axios';

// Import MUI components
import {
    Avatar,
    Button,
    TextField,
    FormControlLabel,
    Checkbox,
    Link,
    Paper,
    Box,
    Grid,
    Typography
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="#">
                Je22z
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await apiClient.post('/login', { email, password });
            console.log('Login successful:', response.data);
            // Handle successful login
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <Grid container component="main" sx={{ height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Login
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link component={RouterLink} to="/register" variant="body2">
                                    {"Don't have an account? Register"}
                                </Link>
                            </Grid>
                        </Grid>
                        <Copyright sx={{ mt: 5 }} />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};

export default LoginPage;