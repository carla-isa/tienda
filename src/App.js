import React, { useEffect } from 'react';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import NavBar from  './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './components/assets/styles/app.css'


const App = () => {

    useEffect(() => {

        M.AutoInit();
        toasti();

    }, []);

    const toasti = () => {toast('Bienvenidx a nuestra tienda online!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
    })};
    toast.configure();

    return(
        <Router>
            <NavBar />
            <Switch>
                <Route path="/" exact component={ItemListContainer}/>
                <Route path="/categories/:categoryId" component={ItemListContainer}/>
                <Route path="/item/:id" component={ItemDetailContainer}/>
            </Switch>
        </Router>
    )
}

export default App;