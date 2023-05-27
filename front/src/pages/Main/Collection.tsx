import React, {useRef} from "react";
import Slider from "react-slick";
import collection1 from "../../assets/img/collection1.png";
import collection2 from "../../assets/img/collection2.png";
import collection3 from "../../assets/img/collection3.png";
import collection4 from "../../assets/img/collection4.png";
import collection5 from "../../assets/img/collection5.png";
import collectionStone from "../../assets/img/collection-stone.png";

const Collection = () => {
  const collections = [
    {
      img: collection1,
      name: 'Графит'
    },
    {
      img: collection2,
      name: 'Гранит'
    },
    {
      img: collection3,
      name: 'Мрамор'
    },
    {
      img: collection4,
      name: 'Известняк'
    },
    {
      img: collection5,
      name: 'Графит'
    },
  ]
  const collectionSliderRef = useRef(null);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };

  return (
    <section className="collection">
      <img src={collectionStone} alt=""/>
      <div className="container">
        <h1 className="title">КОЛЛЕКЦИЯ КАМНЯ <br/>
          <span>НА НАШЕМ СКЛАДЕ</span></h1>
        <div className="collection-slider">
          <Slider ref={collectionSliderRef} {...settings}>
            {collections.map(collection => <div className="collection-slide">
              <div style={{backgroundImage: `url(${collection.img})`}}></div>
              <p>{collection.name}</p>
            </div>)}
          </Slider>
          <div className="collection-bottom">
            {/* @ts-ignore*/}
            <button onClick={() => collectionSliderRef.current.slickPrev()}>
              <svg width="17" height="29" viewBox="0 0 17 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.7112 26.9036L2.7031 16.9488C1.28497 15.5902 1.28497 13.3669 2.7031 12.0083L14.7112 1.44824" stroke="black" stroke-opacity="0.73" stroke-width="2.62987" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            {/* @ts-ignore*/}
            <button onClick={() => collectionSliderRef.current.slickNext()}>
              <svg width="17" height="29" viewBox="0 0 17 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.99011 1.44698L13.9982 11.4018C15.4163 12.7604 15.4163 14.9837 13.9982 16.3423L1.99011 26.9023" stroke="black" stroke-opacity="0.73" stroke-width="2.62987" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;