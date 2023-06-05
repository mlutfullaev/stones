import React, {useState} from "react";
import Select from "react-select";
import filterStone from '../../../assets/img/catalog/filterStone.png';

import Accordion from "../../../components/Accordion/Accordion";
import MultiRange from "../../../components/MultiRange/MultiRange";

import "./filter.scss";

const Filter = () => {
  const accordion = useState(0);
  const [instock, setInstock] = useState(false)
  const [categories, setCategories] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);

  const changingCategories = (category: string) => {
    if (categories.includes(category)) {
      const filtered = categories.filter(item => item !== category)
      setCategories(filtered);
    } else {
      setCategories((oldCategories) => [...oldCategories, category])
    }
  }
  const changingColors = (color: string) => {
    if (colors.includes(color)) {
      const filtered = colors.filter(item => item !== color)
      setColors(filtered);
    } else {
      setColors((oldColors) => [...oldColors, color])
    }
  }

  return (
    <div className="filter">
      <img src={filterStone} alt=""/>
      <div className="filter-inner">
        <Accordion title="Категория" state={accordion} index={1}>
          <input id="granite" onChange={() => changingCategories('granite')} type="checkbox"/>
          <label htmlFor="granite">Гранит</label><br/>
          <input id="onyx" onChange={() => changingCategories('onyx')} type="checkbox"/>
          <label htmlFor="onyx">Оникс</label><br/>
          <input id="marble" onChange={() => changingCategories('marble')} type="checkbox"/>
          <label htmlFor="marble">Мрамор</label><br/>
          <input id="travertine" onChange={() => changingCategories('travertine')} type="checkbox"/>
          <label htmlFor="travertine">Травертин</label><br/>
          <input id="mosaic" onChange={() => changingCategories('mosaic')} type="checkbox"/>
          <label htmlFor="mosaic">Мозаика</label>
        </Accordion>
        <Accordion title={'Цвет'} state={accordion} index={2}>
          <input id="brown" onChange={() => changingColors('brown')} type="checkbox"/>
          <label htmlFor="brown">Коричневый</label><br/>
          <input id="white" onChange={() => changingColors('white')} type="checkbox"/>
          <label htmlFor="white">Белый</label><br/>
          <input id="black" onChange={() => changingColors('black')} type="checkbox"/>
          <label htmlFor="black">Черный</label><br/>
          <input id="beige" onChange={() => changingColors('beige')} type="checkbox"/>
          <label htmlFor="beige">Бежевый</label><br/>
          <input id="baroque" onChange={() => changingColors('baroque')} type="checkbox"/>
          <label htmlFor="baroque">Барокко</label><br/>
          <button className='showmore'>Показать еще</button>
        </Accordion>
        <div className="filter-item">
          <h4>Размер</h4>
          <Select options={[]} onChange={(selectedOption) => console.log(selectedOption)}/>
        </div>
        <div className="filter-item">
          <h4>Страна</h4>
          <Select options={[{value: 'all', label: 'Все'}]} onChange={(selectedOption) => console.log(selectedOption)}/>
        </div>
        <div className="filter-item">
          <h4>Толщина</h4>
          <Select options={[{value: 'sleb20mm', label: 'Слэб, 20мм'}]} onChange={(selectedOption) => console.log(selectedOption)}/>
        </div>
        <div className="filter-item">
          <h4>Цена</h4>
          <MultiRange min={1500} onChange={({min, max}) => {
            console.log(min)
          }} max={5500}/>
        </div>
        <div className="filter-item">
          <label htmlFor="instock">В наличии</label>
          <input id="instock" onChange={() => setInstock(oldvalue => !oldvalue)} type="checkbox"/>
        </div>
      </div>
      <div className="filter-btns">
        <button className="btn grey-outline">Очистить</button>
        <button className="btn grey">Применить</button>
      </div>
    </div>
  );
};

export default Filter;