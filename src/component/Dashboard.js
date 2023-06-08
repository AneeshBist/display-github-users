import React, { useState } from "react";
import { useEffect } from "react";
import LabelCard from "./LabelCard";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    try {
      (async () => {
        const respone = await fetch("https://api.github.com/users");
        setUsers(await respone.json());
      })();
    } catch (error) {
      console.log("An error has occured: ", error);
    }
  }, []);

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row text-center justify-content-center ">
          <h1>List Of Github Users</h1>
          {users.map((user) => {
            return <LabelCard user={user} key={user.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
