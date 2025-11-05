import ItemCard from "../components/ItemCard"

import data from "../data/item-lost-data"

export default function LostAndFound() {

    const itemElements = data.map(item => {
        return (
            <ItemCard 
                key={item.id}
                profilePic={item.profileImg}
                userName={item.userName}
                itemDate={item.date}
                img={item.itemImg}
                itemName={item.itemName}
                itemDescription={item.itemDescription}
                price={null}
            />
        )
    })

    return (
        <section className="item-card-container">
            {itemElements}
        </section>
    )
}