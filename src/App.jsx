import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import UserItem from "./pages/UserItem"
import Login from "./pages/Login"
import LostAndFound from "./pages/LostAndFound"
import Browse from "./pages/Browse"

export default function App() {

    const [userItems, setUserItems] = React.useState([])
    const [user, setUser] = React.useState({
        username: '',
        email: '',
        password: '',
        profilePic: '',
    })

    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}> 
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
                <Route path="/browse" element={<Browse user={user} />} />
                <Route path="/lost-and-found" element={<LostAndFound user={user} />} />
            </Routes>
        </BrowserRouter>
    )
}