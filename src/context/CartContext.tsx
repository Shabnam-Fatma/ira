import { productType } from "@/types/product"

type CartContextType = {
cartItems: CartItemType[],
addToCart: (product: productType) => void,
removeFromCart: (id: number) => void,
clearCart: () => void

}