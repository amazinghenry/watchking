const CollectionCard = (props) => {
    return ( 
        <div className="collection-item" key={props.id}>
            <img src={`images/${props.image}`} alt="collection" className="collection-image" />
            <p className="collection-name">{props.name}</p>
            <p className="collection-price">£{props.price}</p>
        </div>
    );
}
 
export default CollectionCard;