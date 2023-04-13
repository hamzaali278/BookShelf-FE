import React, { useContext } from "react";
import PropTypes from "prop-types";

// Context
import contactContext from "../../context/contact/contactContext";

const ContactItem = ({ contact }) => {
  const ContactContext = useContext(contactContext);
  const { deleteContact, setCurrent, clearCurrent } = ContactContext;

  const { _id, bookName, isbn, description, type } = contact;

  const onDelete = (e) => {
    deleteContact(_id);
    clearCurrent();
  };
  const onMove = () => {
    // moveCurrent(_id);
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
        <i className="fas fa-envelope-open"></i> {isbn}
        <br />
        <i className="fas fa-phone-alt"></i> {description}
      </div>
      <div className="card-footer bg-white border-0">
        <button
          className="btn btn-sm btn-dark px-4 mr-1"
          onClick={() => setCurrent(contact)}
        >
          Edit
        </button>
        <button className="btn btn-sm btn-danger px-4 mr-1" onClick={onDelete}>
          Delete
        </button>
        <button className="btn btn-sm btn-danger px-4 mr-1" onClick={onMove}>
          Add to BookShelf
        </button>
      </div>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
