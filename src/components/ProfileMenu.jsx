import { Link } from "react-router-dom"

export default function ProfileMenu() {
    return (
        <nav className="profile-menu">
            <p><span className="material-symbols-outlined">account_circle</span>Profile</p>
            <Link to="/profile/items">
                <p><span className="material-symbols-outlined">list</span>Your items</p>
            </Link>
            <p><span className="material-symbols-outlined">bookmarks</span>Saved</p>
            <p><span className="material-symbols-outlined">settings</span>Settings</p>
            <Link to="/login" >
                <p><span className="material-symbols-outlined">logout</span>Sign out</p>
            </Link>
        </nav>
    )
}