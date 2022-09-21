import React, { useState, MouseEvent } from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { OrderItems } from 'vtex.order-items'
import { useProduct } from 'vtex.product-context'

const CSS_HANDLES = ['maincomponent']

interface CountdownProps {
}

const CustomAddToCart: StorefrontFunctionComponent<CountdownProps> = ({}) => {
  
  const handles = useCssHandles(CSS_HANDLES)
  const selectedProduct = useProduct()
  const {addItems} = OrderItems.useOrderItems()
  const [quantity, changeQuantity] = useState(1)  

  function increaseQuantity(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    event.stopPropagation();
    changeQuantity(quantity + 1)
  }
  function decreaseQuantity(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    event.stopPropagation();

    if (quantity > 1) {
      changeQuantity(quantity - 1)
    }
  }
  function addToCart(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    event.stopPropagation();
    addItems([{      
      id: selectedProduct?.selectedItem?.itemId,
      quantity: quantity,
      seller: selectedProduct?.selectedItem?.sellers[0].sellerId
    }])    
  }

  return (
    <div className={`${handles.maincomponent} c-muted-1 db tc`}>
      <button onClick={increaseQuantity}>
        +
      </button>
      <h1> {quantity}</h1>
      <button onClick={decreaseQuantity}>
        -
      </button>
      <button onClick={addToCart}>
        Adicionar Ao Carrinho
      </button>
    </div>
  )
}

CustomAddToCart.schema = {
  title: 'editor.AddToCard.custom.title',
  description: 'editor.AddToCard.custom.description',
  type: 'object',
  properties: {},
}

export default CustomAddToCart


