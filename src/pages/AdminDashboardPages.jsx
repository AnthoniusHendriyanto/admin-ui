import React from 'react';
import UserList from '../features/user-management/components/UserList';

const AdminDashboardPage = () => {
    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h1>Admin Dashboard</h1>
                <button className="btn">Logout</button>
            </header>
            <main className="dashboard-content">
                <h2>Registered Users</h2>
                <UserList />
            </main>
        </div>
    );
};

export default AdminDashboardPage;