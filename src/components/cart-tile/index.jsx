import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slices/slice-cart";


export default function CartTile(cartItem) {

    const dispatch = useDispatch();

    function handleRemoveFromCart(){
        dispatch(removeFromCart(cartItem.cartItem.id));
    }
     
    return (
    <>
        <div className="flex items-center p-5 justify-between bg-red-500 mt-2 mb-2 rounded-xl">
            <div className="flex p-3">
                <img src={cartItem.cartItem.image} className="h-28 rounded-lg" alt={cartItem.cartItem.title}/>
                <div className="ml-10 self-start space-y-5">
                    <h1 className="text-xl text-white font-bold">{cartItem.cartItem.title}</h1>
                    <p className="font-extrabold text-white">{cartItem.cartItem.price}</p>
                </div>
                <div>
                <button onClick={handleRemoveFromCart} className="bg-red-950 text-white border-2 rounded-lg font-bold p-4">Remove from cart</button>
                </div>
            </div>
        </div>
    </> );
} 