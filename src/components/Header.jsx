import React from "react"

import ProfileMenu from "./ProfileMenu"

export default function Header(props) {

    const [isProfileOpen, setIsProfileOpen] = React.useState(false)

    function openProfile() {
        setIsProfileOpen(prev => !prev)
    }

    return (
        <header>
            <h1>website-name</h1>
            <nav>
                <p onClick={() => props.changeView('browse')}>Browse</p>
                <p onClick={() => props.changeView('lostandfound')}>Lost & Found</p>
                <div className="user-profile">
                    <img onClick={openProfile} src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg" alt="profile pic" />
                    {isProfileOpen && <ProfileMenu />}
                </div>
            </nav>
        </header>
    )
}