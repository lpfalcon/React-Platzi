import { useContext } from 'react';
import '../styles/OrderItem.scss';
import closeButton from '@icons/icon_close.png';
import AppContext from '@context/AppContext';

const OrderItem = ({ product }) => {
	const { removeFromCart } = useContext(AppContext)
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>{product.price}</p>
			<img src={closeButton} alt="close" onClick={() => removeFromCart(product)} />
		</div>
	);
}

export default OrderItem;
