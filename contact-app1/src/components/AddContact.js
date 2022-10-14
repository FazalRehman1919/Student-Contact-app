import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  //STATE FOR CHANGING THE NAME EMAIL AND NUMBER
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const contacts = useSelector((state) => state.indexReducers);

  //FUNCTION TO HANDLE THE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    //TO CHECK THE EMAIL IS PRESENT
    const checkEmail = contacts.find(
      (contact) => contact.email === email && email
    );

    //TO CHECK THE NUMBER IS PRESENT

    const checkNumber = contacts.find(
      (contact) => contact.number === parseInt(number)
    );

    //IF NAME EMAIL AND NUMBER IS PRESENT THAN GIVE THE TOAST
    if (!name || !email || !number) {
      return toast.warning("Please fill All Fields!!");
    }
    if (checkEmail) {
      return toast.error("This email is already Present!!");
    }
    if (checkNumber) {
      toast.error("This Number is already Exists");
    }

    //TO ADD THE DATA TO ADD CONTACT PAGE AND NAVIGATE THEM TO HOME PAGE
    const data = {
      id: contacts[contacts.length - 1].id + 1,
      name,
      email,
      number,
    };

    dispatch({ type: "ADD_CONTACT", payload: data });
    toast.success("Student Added Successfully!!");
    navigate("/");
  };
  return (
    <div className="container">
      <h1 className=" display-3 my-5 text-center">Add Contact</h1>
      <div className="row">
        <div className="col-md-6 shadow mx-auto p-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group pb-2">
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group pb-2">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group pb-2">
              <input
                type="number"
                placeholder="Phone Number"
                className="form-control"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="form-group pb-2">
              <input
                className="btn btn-block btn-dark"
                type="submit"
                value="Add Student"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
