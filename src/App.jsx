import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import UserItem from "./pages/User-Item"
import Login from "./pages/Login"

export default function App() {

    const [userItems, setUserItems] = React.useState([])
    const [user, setUser] = React.useState({
        username: '',
        email: '',
        password: '',
        profilePic: '',
    })

    return (
        <BrowserRouter> 
            <Routes>
                <Route path="/login" element={<Login user={user} setUser={setUser} />} />
                <Route path="/:section" element={<Home user={user} />} />
                <Route path="/" element={<Home />} />
                <Route path="/profile/items" element={
                    <UserItem items={userItems} setItems={setUserItems} />
                } />
            </Routes>
        </BrowserRouter>
    )
}