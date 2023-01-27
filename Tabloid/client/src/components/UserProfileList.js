import React, { useEffect, useState } from "react";
import { getAllUserProfiles } from "../modules/userProfileManager";
import "./UserProfileList.css"

const UserProfileList = () => {
  const [userProfiles, setUserProfiles] = useState([]);

    useEffect(() => {
        getAllUserProfiles()
            .then(usersData => {
                setUserProfiles(usersData)
            })
    }, []);

  return (
    <div>
      {userProfiles.map(u => 
        <div className="profile">
            <h4>{u.displayName}</h4>
            <div className="profile_items">Full Name : {u.fullName}'</div>
            <div className="profile_items">User Type : {u.userType.name}</div>
        </div>
      )}
    </div>
  );
}

export default UserProfileList;