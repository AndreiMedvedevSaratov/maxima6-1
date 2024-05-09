import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserData } from "../../classic-redux/users/thunkActions";

export const Users = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUserData(1)); // Получение пользователя с ID 1
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {user ? (
        <div>
          <h1>{user.name}</h1>
          <p>Email: {user.email}</p>
          <p>Username: {user.username}</p>
          <p>Phone: {user.phone}</p>
        </div>
      ) : (
        <div>No user data</div>
      )}
    </div>
  );
};
