import React from "react";

const LabelCard = ({ user }) => {
  return (
    <>
      <div className="col-10 col-md-4 mt-5 ">
        <div className="card p-2">
          <div className="d-flex align-item-center">
            <div className="image">
              <img
                src={user.avatar_url}
                className="rounded"
                width="155"
                alt="avatar"
              />
              {console.log(user.avatar_url)}
            </div>
            <div className="ml-3 w-100">
              <h4 className="mb-0 mt-0 textLeft">{user.login}</h4>
              <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                <div className="d-flex flex-column">
                  <span className="articles">Articles</span>
                  <span className="number1">38</span>
                </div>
                <div className="d-flex flex-column">
                  <span className="articles">Followers</span>
                  <span className="number2">3212</span>
                </div>
                <div className="d-flex flex-column">
                  <span className="articles">Rating</span>
                  <span className="number3">7.6</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LabelCard;
