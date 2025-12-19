// App.js (Dashboard Only)
import React from 'react';
import './App.css';

import Dashboard from './Dashboard';

function App() {
    const user = {
        id: 2,
        name: 'محمد أحمد',
        role: 'employee',
        department: 'المبيعات',
        position: 'مندوب مبيعات',
        remainingLeaves: 15,
        email: 'mohamed@company.com',
        hireDate: '2022-03-15'
    };

    return (
        <div className="app">
            <div className="main-content expanded">
                <div className="content">
                    <Dashboard user={user} />
                </div>
            </div>
        </div>
    );
}

export default App;
