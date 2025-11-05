import SellItemCard from "../components/ItemCard"

import data from "../data/item-sell-data"

export default function Browse() {

    const itemElements = data.map(item => {
        return (
            <SellItemCard 
                key={item.id}
                profilePic={item.profileImg}
                userName={item.userName}
                itemDate={item.date}
                img={item.itemImg}
                itemName={item.itemName}
                itemDescription={item.itemDescription}
                price={item.price}
            />
        )
    })

    return (
        <section className="item-card-container">
            {itemElements}
        </section>
    )
}