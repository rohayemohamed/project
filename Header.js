// components/Header.js
import React from 'react';

const Header = ({ user, toggleSidebar, onToggleRole }) => {
  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-toggle" onClick={toggleSidebar}>
          ☰
        </button>
        <h1>نظام إدارة الإجازات</h1>
        
        {/* زر التبديل السريع */}
        <button 
          className="role-toggle"
          onClick={onToggleRole}
          style={{
            marginRight: '20px',
            padding: '8px 15px',
            background: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          {user?.role === 'manager' ? '👨‍💼 عرض واجهة موظف' : '👑 عرض واجهة مدير'}
        </button>
      </div>
      
      <div className="header-right">
        <div className="notifications">
          <button className="notification-btn">
            🔔
            <span className="notification-badge">3</span>
          </button>
        </div>
        
        <div className="user-menu">
          <span className="user-name">{user?.name}</span>
          <div className="user-role">{user?.department}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;