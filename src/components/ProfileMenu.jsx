export default function ProfileMenu() {
    return (
        <nav className="profile-menu">
            <p><span className="material-symbols-outlined">account_circle</span>Profile</p>
            <p><span className="material-symbols-outlined">list</span>Your items</p>
            <p><span className="material-symbols-outlined">bookmarks</span>Saved</p>
            <p><span className="material-symbols-outlined">settings</span>Settings</p>
            <p><span className="material-symbols-outlined">logout</span>Sign out</p>
        </nav>
    )
}