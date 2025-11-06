import { useParams } from "react-router-dom"

import Browse from "./Browse"
import LostAndFound from "./LostAndFound"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Home(props) {

    const { section } = useParams()

    return (
        <>
            <Header user={props.user} />
            <main className="home-page">
                {(section == 'browse' || section == null) && <Browse />}
                {section == 'lost-and-found' && <LostAndFound />}
            </main>
            <Footer />
        </>
    )
}