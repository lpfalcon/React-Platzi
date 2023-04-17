import { useContext } from 'react';
import '../styles/ProductItem.scss';
import addToCardImage from '@icons/bt_add_to_cart.svg'
import AppContext from '@context/AppContext';
const ProductItem = ({ product }) => {
	const { price, title, images } = { ...product }
	const { addToCard } = useContext(AppContext)
	const handleClick = (item) => {
		addToCard(item)
	}
	return (
		<div className="ProductItem">
			<img src={images[0]} alt={title} />
			<div className="product-info">
				<div>
					<p>${price}</p>
					<p>{title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					<img src={addToCardImage} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
