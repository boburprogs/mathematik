import {Outlet } from "react-router-dom"
import Header from "./header/Header"
import Footer from "./footer/Footer"

function Home() {
    return (
        <div className="home  ">
            <Header></Header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    )
}

export default Home