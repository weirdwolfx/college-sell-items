import Browse from "./Browse"
import LostAndFound from "./LostAndFound"

export default function Main(props) {
    return (
        <main>
            {props.view == 'browse' && <Browse />}
            {props.view == 'lostandfound' && <LostAndFound />}
        </main>
    )
}