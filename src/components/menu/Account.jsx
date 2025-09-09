import React from "react";
import user from "./media/user.svg";
import dots from "./media/dots.svg";
const Account = () => {
  return (
    <div className="account">
      <div className="user">
        <img src={user} alt="user" className="user__icon" />
        <p className="user__name helvetica_font ">თამარ ონიანი</p>
      </div>
      <img src={dots} alt="dots-icon" className="dots" />
    </div>
  );
};

export default Account;
