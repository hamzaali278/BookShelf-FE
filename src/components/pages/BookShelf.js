
// import React, { useContext, useEffect, useState } from "react";
import ContactContext from "../../context/contact/contactContext";
import React from 'react'

export const BookShelf = () => {
  return (
    <div>BookShelf</div>
  )
}

// const BookShelf = () => {
    // const contactContext = useContext(ContactContext);
    // // const { getAllContacts } = contactContext;
    // const { moveCurrent } = contactContext;
    // const [book1, setBook] = useState("")
  
    // const getBook =  () => {
    //   const book =  moveCurrent();
    //   // console.log("Books, ", allBooks)
    //   setBook(book);
    // }
  
    // useEffect(() => {
    //   getBook();
    // }, [])
    // return (
    //   <div><h1>BookShelf</h1>
    //     {/* {book1?.map((item, index) => { */}
    //       {/* return ( */}
    //         {/* item.type === "public" ? */}
  
    //           <div className="card my-2 bg-white">
    //             <div className="card-header">
    //               <h5 className="d-inline align-middle card-title text-primary">
    //                 {book1.bookName}
    //               </h5>
    //               <span
    //                 className={
    //                   "badge badge-sm d-inline align-middle mx-auto my-auto float-right " +
    //                   (book1.type === "public" ? "badge-success" : "badge-primary")
    //                 }
    //               >
    //                 {book1.type.charAt(0).toUpperCase() + book1.type.slice(1)}
    //               </span>
    //             </div>
    //             <div className="card-body m-0 p-0 pl-4 pt-2">
    //               <i className="fas fa-envelope-open"></i> {book1.isbn}
    //               <br />
    //               <i className="fas fa-phone-alt"></i> {book1.description}
    //             </div>
  
    //           </div> 
  
    //       {/* )
    //     })} */}
    //   </div>
    // )
// }

export default BookShelf