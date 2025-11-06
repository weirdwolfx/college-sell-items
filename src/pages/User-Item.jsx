import React from "react"

import ItemCard from "../components/ItemCard"

export default function UserItem(props) {

    const [formShow, setFormShow] = React.useState(false)

    const itemElements = props.items.map(item => {
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

    function toggleForm() {
        console.log("Button pressed")
        setFormShow(prevFormShow => !prevFormShow)
    }

    function getTodayDate() {
        const today = new Date();
        return today.toLocaleDateString('en-GB', { 
            day: '2-digit', 
            month: 'short', 
            year: 'numeric' 
        });
    }

    function createItem(formData) {
        console.log("Form data processing")
        const item = {
            id: props.items.length,
            profileImg: "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
            userName: "keskarsir",
            date: getTodayDate(),
            itemImg: "https://investkerala2025.kerala.gov.in/assets/img/jpg/image-placeholder.jpg",
            itemName: formData.get('item-name'),
            itemDescription: formData.get('item-description'),
            price: formData.get('item-price'),
        }

        props.setItems(prevUserItems => [...prevUserItems, item])
        toggleForm()
    }

    return (
        <main>
            <button className="add-item-button" type="button" onClick={toggleForm} >+ Add Item</button>
            {
                formShow &&
                <form action={createItem} className="add-item-form">
                    <div>
                        <label htmlFor="item-name-input">Item name</label>
                        <input type="text" id="item-name" name="item-name"/>
                    </div>

                    <div>
                        <label htmlFor="item-description-input">Item description(5-50 characters)</label>
                        <textarea name="item-description" id="item-description-input"></textarea>
                    </div>

                    <div>
                        <label htmlFor="item-price-input">Price</label>
                        <input type="number" id="item-price-input" name="item-price" />
                    </div>

                    <button>Submit</button>
                </form>
            }
            {
                formShow && <div className="dark-backdrop"></div>
            }
            <section className="item-card-container">
                {itemElements}
            </section>
        </main>
    )
}