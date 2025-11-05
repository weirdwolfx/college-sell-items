import React from "react"
import { Link } from "react-router-dom"

import ProfileMenu from "./ProfileMenu"

export default function Header() {

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
                    <img onClick={openProfile} src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg" alt="profile pic" />
                    {isProfileOpen && <ProfileMenu />}
                </div>
            </nav>
        </header>
    )
}