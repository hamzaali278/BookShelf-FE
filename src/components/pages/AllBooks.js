import React, { useContext, useEffect, useState } from "react";
import ContactContext from "../../context/contact/contactContext";


const AllBooks = () => {
  const contactContext = useContext(ContactContext);
  const { getAllContacts } = contactContext;

  const [books, setBooks] = useState([])

  const getAllBooks = async () => {
    const allBooks = await getAllContacts();
    // console.log("Books, ", allBooks)
    setBooks(allBooks);
  }

  useEffect(() => {
    getAllBooks();
  }, [])
  return (
    <div><h1>Public Books</h1>
      {books?.map((item, index) => {
        return (
          item.type === "public" ?

            <div key={index} className="card my-2 bg-white">
              <div className="card-header">
                <h5 className="d-inline align-middle card-title text-primary">
                  {item.bookName}
                </h5>
                <span
                  className={
                    "badge badge-sm d-inline align-middle mx-auto my-auto float-right " +
                    (item.type === "public" ? "badge-success" : "badge-primary")
                  }
                >
                  {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                </span>
              </div>
              <div className="card-body m-0 p-0 pl-4 pt-2">
                <i className="fas fa-book"></i> {item.isbn}
                <br />
                 {item.description}
              </div>

            </div> : ""

        )
      })}
    </div>
  )
}

export default AllBooks