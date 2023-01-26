import { getToken } from "./authManager";

const baseUrl = '/api/UserProfile';

export const getAllUserProfiles = () => {
  return getToken().then(token => {
      return fetch(baseUrl, {
          method: "GET",
          headers: {
              Authorization: `Bearer ${token}`,
          }
      })
          .then(res => res.json())
  })
};

export const addUserProfile = (userProfile) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userProfile),
  });
};