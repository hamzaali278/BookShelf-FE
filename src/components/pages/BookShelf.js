
// import React, { useContext, useEffect, useState } from "react";
import ContactContext from "../../context/contact/contactContext";
import Contacts from "../contacts/Contacts";
import React from 'react'

const BookShelf = () => {
    return (
      <Contacts/>
    
  )
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