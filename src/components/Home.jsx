import React, {useEffect} from 'react'
import Header from './Header/Header'
import Loader from './loader/Loader'
import Products from './products/Products'
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import '../components/Home.css'
import { setProducts } from "../redux/action/products";
import {withRouter} from 'react-router-dom'

function Home() {

    const items = useSelector(({ products }) => products.items);

    const dispatch = useDispatch();
  
    useEffect(() => {
      // console.log("1234")
      axios.get("http://localhost:3000/db.json").then(({ data }) => {
        console.log("123",data.products)
        dispatch(setProducts(data));
      });
    }, []);

    return (
        <div className="homePage">
            <Header />
            {/* <Loader /> */}
            <div className="info_products">
        {items &&
          items.products &&
          items.products.map((obj) => (
            <Products
              onClickAddProduct={(obj) => obj}
              key={obj.id}
              {...obj}
            />
          ))}
      </div>
        </div>
    )
}

export default withRouter(Home)
