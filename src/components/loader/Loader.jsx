import React from 'react'
import '../loader/Loader.css'

const Loader = () => {
    return (
        <div>
            <div className="loader">
            <button className="load_btn">Load Products</button>
            <h4>Продукции пока нету, нажмите на кнопку чтобы загрузить товары :)</h4>
        </div></div>
    )
}

export default Loader;