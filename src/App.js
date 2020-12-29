import React from "react"
import NavBar from "./NavBar"
import ItemListContainer from "./ItemListContainer"
import Footer from "./Footer"
import Main from "./Main"

/*class App extends React.Component {
    render(){
        return (
            <>
            <header>
                <h1>Título de mi página</h1>
            </header>
            <footer>
                <p>&copy; Copyright 2020</p>
            </footer>
            </>
        )
    }
}*/

const App = () => {
    return (
        <>
        <NavBar/>
        <ItemListContainer/>
        <Footer/>
        </>
    )
}
export default App