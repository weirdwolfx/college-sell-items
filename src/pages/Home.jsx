import { useParams } from "react-router-dom"

import Browse from "./Browse"
import LostAndFound from "./LostAndFound"

export default function Main() {

    const { section } = useParams()

    return (
        <main>
            {(section == 'browse' || section == null) && <Browse />}
            {section == 'lost-and-found' && <LostAndFound />}
        </main>
    )
}