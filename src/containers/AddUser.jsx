import React from "react";
import { useDispatch } from "react-redux";
import { addNewUser } from "../action";

const addUser = () => {
  const dispatch = useDispatch();

  const formHandler = (e) => {
    e.preventDefault();
    let data = e.target.elements;
    dispatch(addNewUser(data.passport.value, data.name.value, data.age.value));
  };

  return (
    <div>
      <form onSubmit={formHandler}>
        <div>
          <input type="text" name="passport" defaultValue="28dsa" />
        </div>
        <div>
          <input type="text" name="name" defaultValue="Eugene" />
        </div>
        <div>
          <input type="text" name="age" defaultValue="44" />
        </div>
        <div>
          <button type="submit">Add new user</button>
        </div>
      </form>
    </div>
  );
};

export default addUser;
