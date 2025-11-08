import Footer from "../components/Footer"
import Header from "../components/Header"
import ItemCardDisplay from "../components/ItemCardDisplay"

import data from "../data/item-sell-data"

export default function Browse(props) {

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