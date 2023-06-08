import React, {useState} from "react";

import "./productDesc.scss";

const ProductDesc = () => {
  const [descSwitch, setDescSwitch] = useState(1);
  return (
    <div className="product-desc">
      <div className="desc-nav">
        <button onClick={() => setDescSwitch(0)} className={descSwitch === 0 ? 'active' : ''}>ОПИСАНИЕ</button>
        <button onClick={() => setDescSwitch(1)} className={descSwitch === 1 ? 'active' : ''}>ХАРАКТЕРИСТИКИ</button>
        <button onClick={() => setDescSwitch(2)} className={descSwitch === 2 ? 'active' : ''}>ОТЗЫВЫ</button>
        <div className="nav-border"></div>
      </div>
      <div className='desc-item'>
        {
          descSwitch === 0 ?
            <div className='desc-text'>
             <p>Description Description Description Description Description Description Description Description Description Description Description Description </p>
            </div> : descSwitch === 1 ?
              <div className="desc-property">
                <div className="desc-property-names">
                  <div>
                    <p>Страна: </p><div></div>
                  </div>
                  <div>
                    <p>Водопоглощение: </p><div></div>
                  </div>
                  <div>
                    <p>Плотность: </p><div></div>
                  </div>
                  <div>
                    <p>Изделия: </p><div></div>
                  </div>
                  <div>
                    <p>Формат мм: </p><div></div>
                  </div>
                  <div>
                    <p>Фактура: </p><div></div>
                  </div>
                </div>
                <div className="desc-properties">
                  <p>Италия</p>
                  <p>0,16%</p>
                  <p>2,65 гр/куб.см</p>
                  <p>Слэбы 20мм</p>
                  <p>600х300х20</p>
                  <p> Полирование</p>
                </div>
              </div> : descSwitch === 2 ?
                <div className="desc-property">
                  <div className="desc-property-names">
                    <div>
                      <p>Страна: </p><div></div>
                    </div>
                    <div>
                      <p>Водопоглощение: </p><div></div>
                    </div>
                    <div>
                      <p>Плотность: </p><div></div>
                    </div>
                    <div>
                      <p>Изделия: </p><div></div>
                    </div>
                    <div>
                      <p>Формат мм: </p><div></div>
                    </div>
                    <div>
                      <p>Фактура: </p><div></div>
                    </div>
                  </div>
                  <div className="desc-properties">
                    <p>Италия</p>
                    <p>0,16%</p>
                    <p>2,65 гр/куб.см</p>
                    <p>Слэбы 20мм</p>
                    <p>600х300х20</p>
                    <p> Полирование</p>
                  </div>
                </div> : null
        }
      </div>
    </div>
  );
};

export default ProductDesc;