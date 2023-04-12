import React, { useState, useContext, useEffect } from "react";

//Context
import contactContext from "../../context/contact/contactContext";

const ContactForm = () => {
  const ContactContext = useContext(contactContext);
  const { current, addContact, clearCurrent, updateContact } = ContactContext;

  // [{
  //   name: "Tabish",
  //   email: "hamza@gmail.com",
  //   phone: "123456789",
  //   type: "public",
  // }

  const [contact, setContact] = useState({
    bookName: "",
    isbn: "",
    description: "",
    type: "public",
  });

  const { bookName, isbn, description, type } = contact;

  useEffect(() => {
    console.log('current: ', current)
    if (current !== null) {
      setContact(current);
    } else {
      clearFormFields();
    }
  }, [contactContext, current]);

  const clearFormFields = () => {
    setContact({
      bookName: "",
      isbn: "",
      description: "",
      type: "public",
    });
  };
  

  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (current === null) addContact(contact);
    else updateContact(contact);

    clearFormFields();
    clearCurrent();
  };

  const clearAll = (e) => {
    clearCurrent();
  };

  return (
    <>
      <div align="center" className="my-3">
        <h3>{current === null ? "Add" : "Edit"} Books</h3>
      </div>
      <form className="my-2" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="bookName"
            placeholder="Book Name"
            value={bookName}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="isbn"
            placeholder="ISBN"
            value={isbn}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="description"
            placeholder="Discription"
            value={description}
            onChange={onChange}
            required
          />
        </div>
        Book Type:{" "}
        <div className="form-group">
          <input
            type="radio"
            name="type"
            value="public"
            checked={type === "public"}
            onChange={onChange}
          />{" "}
          public{" "}
          <input
            type="radio"
            name="type"
            value="private"
            checked={type === "private"}
            onChange={onChange}
          />{" "}
          Private
        </div>
        <div className="form-group">
          <button className="btn btn-primary btn-block">
            {current === null ? "Add" : "Update"} Book
          </button>
        </div>
        {current && (
          <div className="form-group">
            <button className="btn btn-secondary btn-block" onClick={clearAll}>
              Reset
            </button>
          </div>
        )}
      </form>
    </>
  );
};

export default ContactForm;
