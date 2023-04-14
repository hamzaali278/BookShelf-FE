//import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Contexts States
import ContactState from "./context/contact/ConstactState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";

// Set Auth Token Util
import setAuthToken from "./utils/setAuthToken";

// Components
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import AllBooks from "./components/pages/AllBooks";
import BookShelf from "./components/pages/BookShelf";
import AddBook from "./components/pages/AddBook";

import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alerts from "./components/layout/Alerts";

// Private Route
import PrivateRoute from "./components/routing/PrivateRoute";
// import { useEffect ,useContext} from "react";
// import ContactContext from "./context/contact/contactContext";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}



const App = () => {
  // const contactContext = useContext(ContactContext);
  // const {  getAllContacts } = contactContext;

  // useEffect(() => {
  //   getAllContacts();
  // },[])

  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <>
              <Navbar />
              <div className="container">
                <Alerts />
                <Switch>
                  <PrivateRoute exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/allBooks" component={AllBooks} />
                  <Route exact path="/addBook" component={AddBook} />
                  <Route exact path="/bookShelf" component={BookShelf} />
                </Switch>
              </div>
            </>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
