import React from "react"
import { Link } from "react-router-dom"

import ProfileMenu from "./ProfileMenu"

export default function Header({ user }) {

    const [isProfileOpen, setIsProfileOpen] = React.useState(false)

    function openProfile() {
        setIsProfileOpen(prev => !prev)
    }

    return (
        <header>
            <h1>website-name</h1>
            <nav>
                <Link to="/browse">
                    <p>Browse</p>
                </Link>
                <Link to="/lost-and-found">
                    <p>Lost & Found</p>
                </Link>
                <div className="user-profile">
                    <p>{user.username}</p>
                    <img 
                        className="pointer-accessible" 
                        onClick={openProfile} 
                        src={user.profilePic} 
                        alt="profile pic" 
                    />
                    {isProfileOpen && <ProfileMenu />}
                </div>
            </nav>
        </header>
    )
}