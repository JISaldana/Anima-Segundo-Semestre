import { useState } from "react"
import ListaConBoton from "./Components/ListaConBoton"
import ProfileCard from "./Components/ProfileCard"
import 'bootstrap/dist/css/bootstrap.min.css';
import './Stylesheet/Style.css'

function App() {
    return (
        <div className="center">
            <div className="container py-4 center bg-dark bg-opacity-50 text-white rounded col-3">
                <div className="row justify-content-center">
                    <div className="text-center">
                        <ProfileCard />
                        <ListaConBoton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
