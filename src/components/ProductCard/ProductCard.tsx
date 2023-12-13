import './ProductCard.scss';

const ProductCard = (props) => {
    return (
        <div className="product-card">
            <div className="image-wrapper">
                <img src={props.image} alt="product photo" />
            </div>
            <div className="product info">
                <h3>{props.name}</h3>
                <p>Price: {props.price}$</p>
                <p>rating {props.rating.rate}/5.00</p>
                <p>{props.rating.count} reviews</p>
            </div>
        </div>
    );
};

export default ProductCard;
