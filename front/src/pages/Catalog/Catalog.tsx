import React, {useEffect, useState} from "react";
import Select from "react-select";
import {StoneT} from "../../@types";
import axios from "axios";
import {HOST_URL} from "../../assets/consts";
import banner from "../../assets/img/catalog/banner.png";
import catalogLeft from "../../assets/img/catalog/catalog-left.png";
import catalogRight from "../../assets/img/catalog/catalog-right.png";
import catalogBottomRight from "../../assets/img/catalog/catalog-bottom-right.png";

import Products from "../../components/Products/Products";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import Empty from "../../components/Empty/Empty";
import Header from "../../layouts/Header/Header";
import Filter from "./Filter/Filter";

import "./catalog.scss";

const sortBy = [
  {value: "date", label: "По дате добавление"},
  {value: "cheep", label: "Сначала дешевле"},
  {value: "expensive", label: "Сначала дороже"},
];

const Catalog: React.FC = () => {
  const [filterStatus, setFilterStatus] = useState(false);
  const [stoneServer, setStoneServer] = useState<StoneT[]>([]);
  const [stones, setStones] = useState<StoneT[]>([]);
  const [size, setSize] = useState({value: "", label: "Все"});
  const [country, setCountry] = useState({value: "", label: "Все"});
  const [sort, setSort] = useState({value: "date", label: "По дате добавление"});
  const [price, setPrice] = useState<{ min: number, max: number }>({min: 1000, max: 50000});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [categories, setCategories] = useState<string[]>([]);

  const changingCategories = (category: string) => {
    if (categories.includes(category)) {
      const filtered = categories.filter(item => item !== category);
      setCategories(filtered);
    } else {
      setCategories((oldCategories) => [...oldCategories, category]);
    }
  };
  useEffect(() => {
    const filterCloser = (e: MouseEvent) => {
      const target = e.target as HTMLDivElement;

      if (target.classList.contains("filter-wrapper")) {
        setFilterStatus(false);
      }
    };
    document.addEventListener("click", filterCloser);

    return () => {
      document.removeEventListener("click", filterCloser);
    };
  }, []);

  useEffect(() => {
    setLoading(true);
    axios.get(`${HOST_URL}stones`)
      .then((res: { data: StoneT[] }) => {
        setLoading(false);
        setError(false);
        setStoneServer(res.data)
        setStones(res.data);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, []);

  useEffect(() => {
    let filteredStone = stoneServer.filter((item: StoneT) => {
      let result: boolean = false;
      item.variants.forEach(variant => {
        if (variant.format.includes(size.value)) {
          result = true;
        }
      })
      return result;
    });
    filteredStone = filteredStone.filter((item: StoneT) => item.country.includes(country.value));
    filteredStone = filteredStone.filter((item: StoneT) => {
      let result: boolean = false;
      item.variants.forEach(variant => {
        if ( +variant.pricerub >= price.min && +variant.pricerub <= price.max) {
          result = true
        }
      })
      return result
    })
    if (sort.value === 'date') {
      filteredStone = filteredStone = filteredStone.sort((a, b) => {
        const firstDate = new Date(a.createdAt).getTime();
        const secondDate = new Date(b.createdAt).getTime();
        return firstDate - secondDate
      })
    } else if (sort.value === 'cheep') {
      filteredStone = filteredStone.sort((a, b) => +a.variants[0].pricerub - +b.variants[0].pricerub)
    } else if (sort.value === 'expensive') {
      filteredStone = filteredStone.sort((a, b) => +b.variants[0].pricerub - +a.variants[0].pricerub)
    }
    if (categories.length) {
      filteredStone = filteredStone.filter((item: StoneT) => categories.includes(item.categoryTitle))
    }
    setStones([...filteredStone]);
  }, [size, stoneServer, country, sort, price, categories]);

  const resetFilter = () => {
    setSize({value: "", label: "Все"});
    setCountry({value: "", label: "Все"});
    setPrice({min: 1000, max: 10000});
    setCategories([])
  };

  return (
    <div className="catalog">
      <Header/>
      <img src={catalogLeft} className="catalog-left" alt=""/>
      <img src={catalogRight} className="catalog-right" alt=""/>
      <img src={catalogBottomRight} className="catalog-bottom-right" alt=""/>
      <div className="catalog-banner" style={{backgroundImage: `url(${banner})`}}>
        <h6>Мрамораная плитка</h6>
        <h1>ДОМ МРАМОРА</h1>
      </div>
      <h1 className="title">КАТАЛОГ</h1>
      <div className="container">
        <div className="catalog-inner">
          <Filter categories={categories} changingCategories={changingCategories} price={price} setPrice={setPrice} country={country} setCountry={setCountry} setSize={setSize} size={size} isOpen={filterStatus} reset={resetFilter}/>
          <div className="catalog-content">
            <div className="catalog-top">
              <div>
                <button className="filter-btn" onClick={() => setFilterStatus(oldValue => !oldValue)}>
                  <svg className="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M875.9 148L629.1 425.4 616 440.2v435.7l-2.2-1.8-2.4-1.5L408 743.4V440.2l-13.1-14.8L148.1 148h727.8m0-52H148.1c-44.4 0-68.4 52.1-39.5 85.8L356 460v283.4c0 17.8 9.1 34.4 24.1 43.9l203.4 129.2c9.9 7.9 21.2 11.5 32.2 11.5 26.9 0 52.2-21.2 52.2-52.1V460l247.4-278.2c29-33.7 5-85.8-39.4-85.8z"/>
                  </svg>
                </button>
                <p>Всего камней : {stones.length}</p>
              </div>
              <div>
                <p>Сортировать по: </p>
                <Select isSearchable={false} options={sortBy} value={sort} onChange={(selected) => selected ? setSort(selected) : null}/>
              </div>
            </div>
            {loading && <Loading/>}
            {error && <Error/>}
            {!error && !loading ?
              stones.length ? <Products stones={stones}/> : <Empty/>
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;