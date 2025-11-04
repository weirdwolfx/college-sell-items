export default function Header(props) {
    return (
        <header>
            <h1>website-name</h1>
            <nav>
                <p onClick={() => props.changeView('browse')}>Browse</p>
                <p onClick={() => props.changeView('lostandfound')}>Lost & Found</p>
            </nav>
        </header>
    )
}