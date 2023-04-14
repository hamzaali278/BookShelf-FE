
import React, { useContext, useEffect, useState } from "react";
import ContactContext from "../../context/contact/contactContext";
import Spinner from "../layout/Spinner";
import ShelfItem from "../contacts/ShelfItem";
// import React from 'react'

const BookShelf = () => {
    const contactContext = useContext(ContactContext);

  const { contacts, filtered, getContacts, getAllContacts ,loading } = contactContext;

  useEffect(() => {
    getContacts();
    // getAllContacts();
  }, []);

  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h3>No Books to display!</h3>;
  }
  return (
    <>
      {contacts !== null && !loading ? (
        <>
          {filtered !== null
            ? filtered.map((contact) => (
                <ShelfItem key={contact._id} contact={contact} />
              ))
            : contacts.map((contact) => (
                <ShelfItem key={contact._id} contact={contact} />
              ))}
        </>
      ) : (
        <Spinner />
      )}
      {/* <TransitionGroup>
        {filtered !== null
          ? filtered.map((contact) => (
              <CSSTransition key={contact.id} timeout={500} classNames="item">
                <ContactItem contact={contact} />
              </CSSTransition>
            ))
          : contacts.map((contact) => (
              <CSSTransition key={contact.id} timeout={500} classNames="item">
                <ContactItem contact={contact} />
              </CSSTransition>
            ))}
      </TransitionGroup> */}
    </>
  );
}

// const BookShelf = () => {
//     const contactContext = useContext(ContactContext);
//     const { current,moveCurrent, getContacts,setCurrent } = contactContext;
//     const [book1, setBook] = useState([])
  
//     const getBook =  () => {
    
//       setBook(current);
//     }
  
//     useEffect(() => {
//         if (current !== null) {
//             getBook();
//             console.log("current not null");
//             // console.log("adasd");
//         }
//         else {
//             console.log("null");
//         }
//         // console.log("move current :", moveCurrent);
//         // console.log("set current :",setCurrent);
//     }, [contactContext,moveCurrent])
//     return (
//       <div><h1>BookShelf</h1>
//         {book1?.map((item, index) => {
//         return (
//           item.type === "public" ?

//             <div key={index} className="card my-2 bg-white">
//               <div className="card-header">
//                 <h5 className="d-inline align-middle card-title text-primary">
//                   {item.bookName}
//                 </h5>
//                 <span
//                   className={
//                     "badge badge-sm d-inline align-middle mx-auto my-auto float-right " +
//                     (item.type === "public" ? "badge-success" : "badge-primary")
//                   }
//                 >
//                   {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
//                 </span>
//               </div>
//               <div className="card-body m-0 p-0 pl-4 pt-2">
//                 <i className="fas fa-book"></i> {item.isbn}
//                 <br />
//                  {item.description}
//               </div>

//             </div> : ""

//         )
//       })}
//       </div>
//     )
// }

export default BookShelf