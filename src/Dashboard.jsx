import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => { 
    const fetchUserData = async () => { 
      try { 
        const response = await axios.get('/api/user');
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        // 로그인이 되어 있지 않으면 로그인 페이지로 이동
        navigate('/login');
      }
    };

    fetchUserData();
  }, [navigate]);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Loading user data...</p>
    </div>
  );
};

export default Dashboard;
