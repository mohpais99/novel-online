import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './style.css';

function Banner(props) {
    return (
        <div className="row banner d-none d-md-block">
            <div className="col-12">
                <div className="h4 section__title font-rhd-bold text-uppercase" >Novel Terbaru</div>
            </div>
            <div className="col-12">
                <Swiper
                    className="pb-3"
                    spaceBetween={15}
                    slidesPerView={props.device === 'desktop' ? 3 : 2}
                    autoplay={{ delay: 3500 }}
                    pagination={{ clickable: true }}>
                        {
                            props.list.map((data, i) =>
                                <SwiperSlide key={i} className="card">
                                    <div className="card-body">
                                        <div className="row pl-3">
                                            <div className="col-5 px-0">
                                                <Link to="/">
                                                    <img src={data.image} alt="poster-novel" className="w-100 poster" height={props.device === 'desktop' ? 280 : 179} />
                                                </Link>
                                            </div>
                                            <div className="col-7">
                                                <Link className="h6 mb-2 title" to="/">
                                                    {
                                                        data.title.length > 25 ? data.title.substring(0, 25) + '...' : data.title
                                                    }
                                                </Link>
                                                <div className="rating font-12">
                                                    <FontAwesomeIcon className="on" icon={["fa", "star"]} />
                                                    <FontAwesomeIcon className="on" icon={["fa", "star"]} />
                                                    <FontAwesomeIcon className="on" icon={["fa", "star"]} />
                                                    <FontAwesomeIcon className="on" icon={["fa", "star"]} />
                                                    <FontAwesomeIcon icon={["fa", "star"]} />
                                                    <span className="ml-1">4.0</span>
                                                </div>
                                                <hr className="mt-2" />
                                                <div className="description mt-2">
                                                    <p>{data.description}</p>
                                                </div>
                                                <ul className="action d-flex">
                                                    <li>
                                                        <Link className="btn btn-primary py-1" to="/">
                                                            <span className="font-12 font-weight-6 text-white">BACA</span>
                                                        </Link>
                                                    </li>
                                                    <li className="wishlist my-auto">
                                                        <Link className="" to="/">
                                                            <FontAwesomeIcon icon={["fa", "heart"]} />
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        }
                </Swiper>
            </div>
        </div>
    )
}

export default Banner
