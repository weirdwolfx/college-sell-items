export default function SellItemCard(props) {
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
                <h3 className="item-name">{props.itemName}</h3>
                <p className="item-description">{props.itemDescription}</p>
                <p className="item-price"><span>Price:</span> {props.price}</p>
            </div>
            <div className="item-card-footer">
                <span className="material-symbols-outlined" aria-label="message seller">chat</span>
                <span className="material-symbols-outlined" aria-label="bookmark item">bookmark</span>
            </div>
        </section>
    )
}