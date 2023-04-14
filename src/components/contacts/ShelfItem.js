import React, { useContext } from "react";
import PropTypes from "prop-types";

// Context
import contactContext from "../../context/contact/contactContext";


const ShelfItem = ({ contact }) => {
  const ContactContext = useContext(contactContext);
  const { deleteContact, setCurrent, clearCurrent,moveCurrent } = ContactContext;

  const { _id, bookName, isbn, description, type } = contact;

  
  const onMove = () => {
    // console.log(contact);
    // moveCurrent(contact)
  }

  return (
    <div className="card my-2 bg-white">
      <div className="card-header">
        <h5 className="d-inline align-middle card-title text-primary">
          {bookName}
        </h5>
        <span
          className={
            "badge badge-sm d-inline align-middle mx-auto my-auto float-right " +
            (type === "professional" ? "badge-success" : "badge-primary")
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </div>
      <div className="card-body m-0 p-0 pl-4 pt-2">
        <i className="fas fa-book"></i> {isbn}
        <br />
        {description}
      </div>
      <div className="card-footer bg-white border-0">
        
        <button className="btn btn-sm btn-danger px-4 mr-1" >
          Remove From Shelf
        </button>
      </div>
    </div>
  );
};

ShelfItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ShelfItem;
