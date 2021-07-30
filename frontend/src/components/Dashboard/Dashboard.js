import React, { useState, useEffect } from 'react';

const Dashboard = () => {

  //private state hook
  const [dashboard, setDashboard] = useState([]);

  useEffect(() => {
    try {
      (async () => {
        const dashboardRes = await fetch("/dashboard"); //backend routing
        if (!dashboardRes.ok) {
          throw dashboardRes.statusText;
        } else {
          const dashboardData = await dashboardRes.json();
          console.log(dashboardData.data);
          setDashboard(dashboardData.data);
        }
      })();
    } catch (error) {
      console.error(`${error}: failed to fetch user data`);
    }
  }, []);

  return (
    <>
      {dashboard.length !== 0 ? (
        <h1>Dashboard loaded</h1>
      ) : (<h1>Loading...</h1>)}

    </>
  );
};

export default Dashboard;

