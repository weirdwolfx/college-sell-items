import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Home from "./pages/Home"
import UserItem from "./pages/UserItem"
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
                <Route path="/profile/items" element={
                    <UserItem 
                        items={userItems} 
                        setItems={setUserItems}
                        user={user}
                        setUser={setUser}
                    />
                } />
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="/login" element={<Login user={user} setUser={setUser} />} />
                <Route path="/:section" element={<Home user={user} />} />
            </Routes>
        </BrowserRouter>
    )
}