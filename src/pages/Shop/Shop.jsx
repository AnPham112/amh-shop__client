import React, { useContext, useEffect, useState } from 'react'
import Helmet from '../../components/Helmet'
import ProductCard from '../../components/product/ProductCard'
import { GlobalStateContext } from '../../GlobalState'
import { Card, Input, Text } from '@nextui-org/react'
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { getAllProduct } from "../../redux/actions/productActions"
import { getAllCategories } from "../../redux/actions/categoryActions"

function Shop() {
  const state = useContext(GlobalStateContext)
  const [isAdmin] = state.userAPI.isAdmin
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState("")
  const [sort, setSort] = useState("")
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)
  const [result, setResult] = useState("")

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories())
  }, [])
  useEffect(() => {

    // dispatch(getAllProduct())
    const getProducts = async () => {
      const res = await axios.get(`/api/products?limit=${page * 9}&${category}&${sort}&title[regex]=${search}`)
      setProducts(res.data.products)
      setResult(res.data.result)
    }
    getProducts()
  }, [page, category, sort, search])

  const handleCategory = (e) => {
    setCategory(e.target.value)
  }

  const { categories } = useSelector(state => state.category)
  console.log(categories)

  return (
    <Helmet title="Shop">
      <div className="container">
        <div className="products">
          <div className="products__header__search">
            <div className="products__header__search__input__wrap">
              <input type="text" className="products__header__search__input" placeholder="Search product..." />
            </div>
            <div className="products__header__search__select">
              <select name="category" value={category} onChange={handleCategory}>
                <option value="">All products</option>
                {
                  categories?.map(category => (
                    <option
                      key={category._id}
                      value={"category=" + category.name}
                    >
                      {category.name}
                    </option>
                  ))
                }
              </select>
              {/* <span className="header__search-select-label">

                <ul className="header__search-option">
                  <li className="header__search-option-item header__search-option-item--active">
                    <span>Trong shop</span>
                    <i className="fas fa-check"></i>
                  </li>
                  <li className="header__search-option-item">
                    <span>Ngoài shop</span>
                    <i className="fas fa-check"></i>
                  </li>

                </ul>
              </span> */}
            </div>
            <button className="products__header__search__btn">
              <i className="products__header__search__btn__icon fas fa-search"></i>
            </button>
          </div>
          <div className="products__list">
            <div className="grid wide">
              <div className="row">

                <div className="products__header__filter">
                  {/* <span></span> */}
                  {/* <select name="category" value={category} onChange={handleCategory}>
                    <option value="">All products</option>
                    {
                      categories?.map(category => (
                        <option
                          key={category._id}
                          value={"category=" + category.name}
                        >
                          {category.name}
                        </option>
                      ))
                    }
                  </select> */}
                </div>
                {products ? products.map((product) => (
                  (
                    <ProductCard key={product._id} product={product} isAdmin={isAdmin} />
                  )
                )) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      {products.length === 0 &&
        <div className="container center">
          <Card css={{ mw: "450px" }}>
            <Text h3 css={{ ta: "center" }}>No products exist</Text>
          </Card>
        </div>
      }
    </Helmet >
  )
}

export default Shop