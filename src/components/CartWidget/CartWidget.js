import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
const CartWidget = () => {
    return (
        <div className="iconos">
            <FontAwesomeIcon icon={faCartShopping} />
            <p>0</p>
        </div>

    )
}

export default CartWidget;