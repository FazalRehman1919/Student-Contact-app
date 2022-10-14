import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditContact = () => {
  //USE HOOKS FOR CHANGING THE STATE
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  //USED THE PARAMS FOR THE INDEX
  const { id } = useParams();

  //USED THE SELECT THE FOR STATE
  const contacts = useSelector((state) => state.indexReducers);

  //TO FIND THE CURRENT ID OF THE CONTACT
  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );

  //SET THE NAVIGATE FOR PATHING
  const navigate = useNavigate();

  //SET THE DISPATCH
  const dispatch = useDispatch();

  //USE EFFECT HOOK TO TRACK THE CURRENT STATE OF NAME EMAIL AND PHONE NUMBER
  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setEmail(currentContact.email);
      setNumber(currentContact.number);
    }
  }, [currentContact]);

  //FUNCTION TO HANDLE THE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    //TO CHECK THE EMAIL IS PRESENT
    const checkEmail = contacts.find(
      (contact) => contact.id !== parseInt(id) && contact.email === email
    );

    //TO CHECK THE NUMBER IS PRESENT

    const checkNumber = contacts.find(
      (contact) =>
        contact.id !== parseInt(id) && contact.number === parseInt(number)
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

    //TO ADD THE DATA TO ADD CONTACT PAGE AND NAVIGAT THEM TO HOME PAGE
    const data = {
      id: parseInt(id),
      name,
      email,
      number,
    };

    dispatch({ type: "UPDATE_CONTACT", payload: data });
    toast.success("Student Updated Successfully!!");
    navigate("/");
  };
  return (
    <div className="container">
      {/* IF CURRENT ID EXISTS THAN RENDER THIS */}
      {currentContact ? (
        <>
          <h1 className=" display-3 my-5 text-center">Edit Contact {id}</h1>
          <div className="row">
            <div className="col-md-6 shadow mx-auto p-5">
              <form onSubmit={handleSubmit}>
                <div className="form-group pb-2">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group pb-2">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group pb-2">
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Phone Number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>
                <div className="form-group pb-2">
                  <input
                    className="btn btn-block btn-dark"
                    type="submit"
                    value="Update Student"
                  />
                  <Link to="/" className="btn btn-danger ms-3">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <h1 className="display-3 m-5 text-center">
          Student with id {id} is not Exists
        </h1>
      )}
    </div>
  );
};

export default EditContact;
