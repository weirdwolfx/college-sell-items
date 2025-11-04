import React from "react"

import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

export default function App() {
    
    const [view, setView] = React.useState('browse')

    return (
        <>
            <Header changeView={setView} />
            <Main view={view} />
            <Footer />
        </>
    )
}