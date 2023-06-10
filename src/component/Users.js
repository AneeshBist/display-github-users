import React from "react";
import LabelCard from "./LabelCard";

const Users = ({ users }) => {
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row text-center justify-content-center ">
          <h1 className="title">List Of Github Users</h1>
          {users.map((user) => {
            return <LabelCard user={user} key={user.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Users;
