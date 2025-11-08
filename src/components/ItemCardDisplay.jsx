import ItemCard from "./ItemCard"

export default function ItemCardDisplay(props) {

    const itemElements = props.data.map(item => {
        return (
            <ItemCard 
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