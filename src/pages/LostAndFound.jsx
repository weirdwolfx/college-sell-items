import Header from "../components/Header"
import Footer from "../components/Footer"
import ItemCardDisplay from "../components/ItemCardDisplay"

import data from "../data/item-lost-data"

export default function LostAndFound(props) {

    return (
        <>
            <Header user={props.user} />
            <main className="home-page">
                <ItemCardDisplay data={data} />
            </main>
            <Footer />
        </>
    )
}