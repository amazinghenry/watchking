import watchData from '../data/index.js';
import CollectionCard from './CollectionCard.js';


const Collections = () => {
    const watchItem = watchData.map((data)=>{
        return <
        CollectionCard
        key = {data.id}
        id = {data.id}
        name = {data.name}
        image = {data.image}
        price = {data.price}
        />
    })
    
    return ( 
        <section className="container-fluid collections">
            <div className="colletion container">
                <h2 className="collection-title">
                    WatchKing Collections
                </h2>
                <p className="colletion-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper libero vel porta faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum vehicula arcu quis blandit. 
                </p>
                <div className="collection-group">
                    { watchItem }
                </div>
                <a href="/" className="watchking-button">
                    Get Watch Now
                </a>
            </div>
        </section>
     );
}
 
export default Collections;