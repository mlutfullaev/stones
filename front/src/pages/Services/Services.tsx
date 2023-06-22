import React, {useEffect, useState} from 'react';
import Header from "../../layouts/Header/Header";
import Projects from "../../components/Projects/Projects";
// import service1 from '../../assets/img/services/services1.png';
// import service2 from '../../assets/img/services/services2.png';
// import service3 from '../../assets/img/services/services3.png';
// import service4 from '../../assets/img/services/services4.png';
// import service5 from '../../assets/img/services/services5.png';
// import service6 from '../../assets/img/services/services6.png';
// import service7 from '../../assets/img/services/services7.png';
// import service8 from '../../assets/img/services/services8.png';
// import service9 from '../../assets/img/services/services9.png';
// import service10 from '../../assets/img/services/services10.png';
// import service11 from '../../assets/img/services/services11.png';
// import service12 from '../../assets/img/services/services12.png';
// import service13 from '../../assets/img/services/services13.png';
// import service14 from '../../assets/img/services/services14.png';
// import service15 from '../../assets/img/services/services15.png';
// import service16 from '../../assets/img/services/services16.png';
// import service17 from '../../assets/img/services/services17.png';
// import service18 from '../../assets/img/services/services18.png';
import axios from "axios";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import Empty from "../../components/Empty/Empty";
import {HOST_URL} from "../../assets/consts";

// const services: ProjectT[] = [
//   {
//     img: service1,
//     name: 'Камины',
//     link: '#'
//   },
//   {
//     img: service18,
//     name: 'Подоконники',
//     link: '#'
//   },
//   {
//     img: service2,
//     name: 'Столешницы',
//     link: '#'
//   },
//   {
//     img: service17,
//     name: 'Лестницы',
//     link: '#'
//   },
//   {
//     img: service3,
//     name: 'Облицовка полов',
//     link: '#'
//   },
//   {
//     img: service16,
//     name: 'Облицовка стен',
//     link: '#'
//   },
//   {
//     img: service4,
//     name: 'Парапеты',
//     link: '#'
//   },
//   {
//     img: service15,
//     name: 'Цоколи зданий',
//     link: '#'
//   },
//   {
//     img: service5,
//     name: 'Входные группы',
//     link: '#'
//   },
//   {
//     img: service14,
//     name: 'Фасады',
//     link: '#'
//   },
//   {
//     img: service6,
//     name: 'Поставка натурального камня',
//     link: '#'
//   },
//   {
//     img: service13,
//     name: 'Проектирование',
//     link: '#'
//   },
//   {
//     img: service7,
//     name: 'Барные стойки с подсветкой из оникса',
//     link: '#'
//   },
//   {
//     img: service12,
//     name: 'Стойки ресепшн',
//     link: '#'
//   },
//   {
//     img: service8,
//     name: 'Мраморные мозаичитые полы',
//     link: '#'
//   },
//   {
//     img: service11,
//     name: 'Монолитные полы Террацо',
//     link: '#'
//   },
//   {
//     img: service9,
//     name: 'шлифовка и восстановление каменных полов',
//     link: '#'
//   },
//   {
//     img: service10,
//     name: 'Реставрация камня и изделий из него ',
//     link: '#'
//   },
// ]

const Services = () => {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true)
    axios.get(`${HOST_URL}service`)
      .then((res: any) => {
        setLoading(false);
        setError(false);
        setServices(res.data);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      })
  }, []);
  return (
    <div>
      <Header />
      {loading && <Loading/>}
      {error && <Error/>}
      {!error && !loading ?
        services.length ?
          <Projects projects={services}>
            <h1 className="title">Услуги</h1>
            <div style={{marginTop: 20}}>
              <button style={{marginRight: 20}} className="btn grey">Изделия в интерьере</button>
              <button className="btn grey-outline">Изделия в экстерьере</button>
            </div>
          </Projects> : <Empty />
        : null}
    </div>
  );
};

export default Services;