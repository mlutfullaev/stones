import React, {useEffect, useState} from 'react';
import axios from "axios";
import {HOST_URL} from "../../assets/consts";
import reviewAuthor from '../../assets/img/reviews/review-author.png';
import reviewTopLeft from '../../assets/img/reviews/reviews-top-left.png';
import reviewTopRight from '../../assets/img/reviews/reviews-top-right.png';
import reviewBottomLeft from '../../assets/img/reviews/reviews-bottom-left.png';
import reviewBotomRight from '../../assets/img/reviews/reviews-bottom-right.png';

import Header from "../../layouts/Header/Header";

import './reviews.scss'
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import Empty from "../../components/Empty/Empty";


type ReviewT = {
  rate: number,
  name: string,
  comment: string
}

const Reviews = () => {
  const [reviews, setReviews] = useState<ReviewT[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true)
    axios.get(`${HOST_URL}reviews`)
      .then((res: {data: ReviewT[]}) => {
        setLoading(false);
        setError(false);
        setReviews(res.data);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      })
  }, []);
  return (
    <div className='reviews'>
      <img src={reviewTopLeft} alt="" className="reviews-top-left"/>
      <img src={reviewTopRight} alt="" className="reviews-top-right"/>
      <img src={reviewBottomLeft} alt="" className="reviews-bottom-left"/>
      <img src={reviewBotomRight} alt="" className="reviews-bottom-right"/>
      <Header/>
      <div className="container">
        <div className="reviews-inner">
          <h1 className="title">Отзывы</h1>
          {loading && <Loading/>}
          {error && <Error/>}
          {!error && !loading ?
            reviews.length ?
              <div className="reviews-content">
                {reviews.map((review, i) =>
                  <div key={i} className="review">
                    <div className="review-top">
                      <img src={reviewAuthor} alt="review-author"/>
                      <div>
                        <h3>{review.name}</h3>
                        <div className="rate">
                          {rateArray(review.rate).map(rate =>
                            rate ?
                              <svg width="34" height="31" viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M17 0L21.4966 10.811L33.168 11.7467L24.2756 19.364L26.9923 30.7533L17 24.65L7.00765 30.7533L9.72442 19.364L0.832039 11.7467L12.5034 10.811L17 0Z"
                                  fill="#F1C644"/>
                              </svg> :
                              <svg width="34" height="31" viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M17 2.60396L20.5732 11.1951L20.8078 11.759L21.4166 11.8078L30.6915 12.5514L23.625 18.6045L23.1611 19.0019L23.3029 19.596L25.4618 28.6466L17.5213 23.7966L17 23.4782L16.4787 23.7966L8.53822 28.6466L10.6971 19.596L10.8388 19.0019L10.375 18.6045L3.30855 12.5514L12.5834 11.8078L13.1922 11.759L13.4268 11.1951L17 2.60396Z"
                                  stroke="#F1C644" strokeWidth="2"/>
                              </svg>
                          )}
                        </div>
                      </div>
                    </div>
                    <h4>Качество товара</h4>
                    <div className="rate">
                      {rateArray(review.rate).map(rate =>
                        rate ?
                          <svg width="34" height="31" viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M17 0L21.4966 10.811L33.168 11.7467L24.2756 19.364L26.9923 30.7533L17 24.65L7.00765 30.7533L9.72442 19.364L0.832039 11.7467L12.5034 10.811L17 0Z"
                              fill="#F1C644"/>
                          </svg> :
                          <svg width="34" height="31" viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M17 2.60396L20.5732 11.1951L20.8078 11.759L21.4166 11.8078L30.6915 12.5514L23.625 18.6045L23.1611 19.0019L23.3029 19.596L25.4618 28.6466L17.5213 23.7966L17 23.4782L16.4787 23.7966L8.53822 28.6466L10.6971 19.596L10.8388 19.0019L10.375 18.6045L3.30855 12.5514L12.5834 11.8078L13.1922 11.759L13.4268 11.1951L17 2.60396Z"
                              stroke="#F1C644" strokeWidth="2"/>
                          </svg>
                      )}
                    </div>
                    <p>{review.comment}</p>
                    {/*<p className="date">{review.date}</p>*/}
                  </div>
                )}
              </div> : <Empty />
            : null}
        </div>
      </div>
    </div>
  );
};

const rateArray = (rate: number) => {
  const array = [];
  for (let i = 1; i <= rate; i++) {
    array.push(true);
  }
  const notRated = 5 - rate;

  if (notRated) {
    for (let i = 0; i < notRated; i++) {
      array.push(false)
    }
  }
  return array;
}

export default Reviews;