import React, { useState } from "react";
import { useEffect } from "react";
import Loading from "./Loading";
import Users from "./Users";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      (async () => {
        setLoading(false);
        const respone = await fetch("https://api.github.com/users");
        setUsers(await respone.json());
      })();
    } catch (error) {
      console.log("An error has occured: ", error);
    }
  }, []);

  return loading ? <Loading /> : <Users users={users} />;
};

export default Dashboard;
