// components/Dashboard.js - لوحة التحكم
import React, { useState, useEffect } from 'react';

const Dashboard = ({ user }) => {
  const [stats, setStats] = useState({
    pendingRequests: 0,
    approvedRequests: 0,
    rejectedRequests: 0,
    totalEmployees: 0
  });

  const [recentRequests, setRecentRequests] = useState([]);

  useEffect(() => {
    // محاكاة جلب البيانات من API
    setStats({
      pendingRequests: 5,
      approvedRequests: 12,
      rejectedRequests: 3,
      totalEmployees: 3
    });

    setRecentRequests([
      { id: 1, employee: 'محمد أحمد', type: 'إجازة سنوية', days: 3, status: 'pending' },
      { id: 2, employee: 'فاطمة خالد', type: 'إجازة مرضية', days: 5, status: 'approved' },
      { id: 3, employee: 'علي حسن', type: 'إجازة عارضة', days: 1, status: 'rejected' }
    ]);
  }, []);

  const StatCard = ({ title, value, color, icon }) => (
    <div className="stat-card">
      <div className="stat-icon" style={{ backgroundColor: color }}>
        {icon}
      </div>
      <div className="stat-info">
        <h3>{value}</h3>
        <p>{title}</p>
      </div>
    </div>
  );

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>لوحة التحكم</h2>
        <p>مرحباً بك، {user?.name}</p>
      </div>

      <div className="stats-grid">
        <StatCard 
          title="طلبات قيد الانتظار" 
          value={stats.pendingRequests} 
          color="#f39c12" 
          icon="⏳"
        />
        <StatCard 
          title="طلبات معتمدة" 
          value={stats.approvedRequests} 
          color="#2ecc71" 
          icon="✅"
        />
        <StatCard 
          title="طلبات مرفوضة" 
          value={stats.rejectedRequests} 
          color="#e74c3c" 
          icon="❌"
        />
        <StatCard 
          title="إجمالي الموظفين" 
          value={stats.totalEmployees} 
          color="#3498db" 
          icon="👥"
        />
      </div>

      <div className="recent-requests">
        <h3>آخر طلبات الإجازة</h3>
        <div className="requests-table">
          <table>
            <thead>
              <tr>
                <th>الموظف</th>
                <th>نوع الإجازة</th>
                <th>المدة</th>
                <th>الحالة</th>
              </tr>
            </thead>
            <tbody>
              {recentRequests.map(request => (
                <tr key={request.id}>
                  <td>{request.employee}</td>
                  <td>{request.type}</td>
                  <td>{request.days} يوم</td>
                  <td>
                    <span className={`status-badge status-${request.status}`}>
                      {request.status === 'pending' && 'قيد الانتظار'}
                      {request.status === 'approved' && 'معتمدة'}
                      {request.status === 'rejected' && 'مرفوضة'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;