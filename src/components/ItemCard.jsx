export default function ItemCard(props) {
    return (
        <section className="item-card">
            <div className="item-card-header">
                <div className="item-seller">
                    <img src={props.profilePic} alt="profile pic" />
                    <p>{props.userName}</p>
                </div>
                <p className="item-date">{props.itemDate}</p>
            </div>
            <div className="item-card-content">
                <img src={props.img} alt="placeholder image" />
                <h2 className="item-name">{props.itemName}</h2>
                <p className="item-description">{props.itemDescription}</p> 
                {
                    props.price && <h3 className="item-price">&#8377;{props.price}</h3>
                }
            </div>
            <div className="item-card-footer">
                <span className="material-symbols-outlined pointer-accessible" aria-label="message seller">chat</span>
                <span className="material-symbols-outlined pointer-accessible" aria-label="bookmark item">bookmark</span>
            </div>
        </section>
    )
}