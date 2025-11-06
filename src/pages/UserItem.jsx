import React from "react"

import ItemCard from "../components/ItemCard"
import Header from "../components/Header"
import Footer from "../components/Footer"

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
        const file = formData.get('item-img')
        const filePath = URL.createObjectURL(file)
        const item = {
            id: props.items.length,
            profileImg: props.user.profilePic,
            userName: props.user.username,
            date: getTodayDate(),
            itemImg: filePath,
            itemName: formData.get('item-name'),
            itemDescription: formData.get('item-description'),
            price: formData.get('item-price'),
        }

        props.setItems(prevUserItems => [...prevUserItems, item])
        toggleForm()
    }

    return (
        <>
            <Header user={props.user} />
            <main className="user-item-page">
                <button className="add-item-button" type="button" onClick={toggleForm} >+ Add Item</button>
                {
                    formShow &&
                    <form action={createItem} className="add-item-form">
                        <div>
                            <label htmlFor="item-name-input">Item name(*)</label>
                            <input type="text" id="item-name-input" name="item-name" value="Attendance" required/>
                        </div>

                        <div>
                            <label htmlFor="item-description-input">Item description(0-50 characters)</label>
                            <textarea name="item-description" id="item-description-input"></textarea>
                        </div>

                        <div>
                            <label htmlFor="item-price-input">Price(*)</label>
                            <input type="number" id="item-price-input" name="item-price" value="1200" required/>
                        </div>

                        <label htmlFor="item-img-input">Upload image</label>
                        <input 
                            type="file"
                            accept="image/*" 
                            id="item-img-input"
                            name="item-img"
                            required
                        />

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
            <Footer />
        </>
    )
}