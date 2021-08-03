import React from 'react'

function ProductBuy({ clickButton }) {
    return (
        <div className="">
            <button onClick={clickButton} className="basket_btn">Добавить в корзину</button>
        </div>
    )
}

export default ProductBuy
