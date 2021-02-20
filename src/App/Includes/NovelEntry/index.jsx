import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Swiper, SwiperSlide } from 'swiper/react';
import './style.css';

function NovelEntry(props) {
    return (
        <Swiper
            className="pb-4"
            spaceBetween={20}
            slidesPerView={props.slides}
            scrollbar={{ draggable: true }}>
                {
                    props.novel.map((data, i) => 
                        <SwiperSlide key={i} className="novel" data-theme={props.theme}>
                            <div className="novel_thumb" style={{height: `${props.device === 'desktop' ? '320px' : '200px'}`}}>
                                <Link to="">
                                    <img src={data.image} alt="poster-novel"/>
                                </Link>
                                <div className="hot_box">
                                    <span className="hot-label">BEST SALLER</span>
                                </div>
                            </div>
                            
                            <div className="novel_content text-center">
                                <Link className="novel_title h6 mb-0" style={{fontSize: `${props.device !== 'desktop' ? '10px': '14px'}`}} to="/">
                                    {
                                        data.title.length > 20 ?
                                            data.title.substring(0, 20) + '...'
                                        :
                                            data.title
                                    }
                                </Link>
                                <div className="rating">
                                    <FontAwesomeIcon className="on" icon={["fa", "star"]} />
                                    <FontAwesomeIcon className="on" icon={["fa", "star"]} />
                                    <FontAwesomeIcon className="on" icon={["fa", "star"]} />
                                    <FontAwesomeIcon className="on" icon={["fa", "star"]} />
                                    <FontAwesomeIcon icon={["fa", "star"]} />
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }
        </Swiper>
    )
}

export default NovelEntry
