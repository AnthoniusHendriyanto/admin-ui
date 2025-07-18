import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
// import AdminDashboardPage from './pages/AdminDashboardPage';

// Import MUI theme components
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Create a default light theme
const lightTheme = createTheme({
    palette: {
        mode: 'light',
    },
});

function App() {
    return (
        <ThemeProvider theme={lightTheme}>
            <CssBaseline /> {/* This resets CSS and fixes the background */}
            <Router>
                <Routes>
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    {/*<Route path="/admin/dashboard" element={<AdminDashboardPage />} />*/}
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;