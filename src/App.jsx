import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import UserItem from "./pages/User-Item"

export default function App() {

    const [userItems, setUserItems] = React.useState([])

    return (
        <BrowserRouter>
            <Header />  
            <Routes>
                <Route path="/:section" element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/profile/items" element={
                    <UserItem items={userItems} setItems={setUserItems} />
                } />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}