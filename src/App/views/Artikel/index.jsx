import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Breadcumbs } from 'App/molekuls'
import React from 'react'
import { Link } from 'react-router-dom'
import './style.css';

function Artikel(props) {
    const novel = require('App/listnovel').default;
    const {params} = props.match.params
    return (
        <div className="container-fluid section font-12">
            <Breadcumbs theme={props.theme} link={params} />
            <div className="row px-2 mt-2">
                {/* <div className={`col-12 py-2 col-md-9 bg-${props.theme === 'dark' ? 'secondary' : 'light'}`}> */}
                <div className="col-12 py-2 col-md-9 px-1">
                    <article className="entry-inner" data-theme={props.theme}>
                        <div className="entry-header">
                            <span className="novel-links">
                                Chapter 23
                            </span>
                            <div className="h3">Bersih-Bersih Setelah Kekacauan</div>
                            <div className="entry-posted">
                                <div className="translator-info mr-2">
                                    <FontAwesomeIcon icon={["fa", "user-alt"]} />
                                    <span className="ml-1">FZ-Translator</span>
                                </div>
                                <div className="date-info">
                                    <FontAwesomeIcon icon={["fa", "calendar-alt"]} />
                                    <span className="ml-1">20 November 2020</span>
                                </div>
                            </div>
                        </div>
                        <hr className="mt-0" />
                        <div className="entry-content px-2">
                            <p>“Ha ha, seperti yang diharapkan sari penerus Komandan Ksatria. Anda mengungguli imperial mage itu menggunakan kekuatan anda.”</p>
                            <p>“Terima kasih. Dibandingkan dengan ayah dan guru saya, saya masih memiliki perjalanan yang jauh.”</p>
                            <p>Aku tidak bisa mengingat berapa kali aku telah melakukan percakapan yang sama berulang-ulang, tapi ada banyak orang yang menunggu dan mengantre untuk mengucapkan selamat kepadaku.</p>
                            <p>Setelah aku secara fisik ‘mengatakan’ selamat tinggal kepada babi sialan itu, para bangsawan mengerumuni ku dan melahirkan keributan ini.</p>
                            <p>Ketika aku dengan mudah membunuh seorang imperial mage peringkat ketiga, yang dikatakan merupakan mage terbaik di kekaisaran, aku khawatir bahwa mereka akan terlalu takut untuk mendekatiku, tapi kelihatannya itu sama sekali tidak masalah.</p>
                            <p>“Mengalahkan seorang imperial mage dengan mudahnya, anda mirip seperti Ayah anda.”</p>
                            <p>“Ya, seperti ketika Komandan Ksatria masih muda.”</p>
                            <p>…… jadi semua ini berkat Ayah angkatku.</p>
                            <p>“Gahahaha, itulah anakku!”</p>
                            <p>Dengan senyum maniak perang, pria ber-armor penuh itu mulai memukul bahuku.</p>
                            <p>Hei, aku akan menancap…. Lihat, batu paving itu mulai retak.</p>
                            <p>“Terima kasih Ayah.”</p>
                            <p>Ayah angkatku yang terlalu senang tidak bisa dihentikan.</p>
                            <p>“Kamu terlalu kaku. Tapi kamu tahu, setelah menunjukkan kepada kami keberanian yang mengagumkan itu, kamu harus setidaknya sedikit menyombongkan diri! Aku tahu! Karena kita waktunya pas, ayo kita lakukan kontes di antara kita berdua juga….”</p>
                            <p>“Aku tidak bisa melakukan itu. Aku masih tidak sebanding denganmu, Ayah.”</p>
                            <p>Sebagai anak angkatnya, atau yang lebih penting, sebagai penerusnya, penting untuk menunjukkan hubungan yang baik diantara kami berdua.</p>
                            <p> Ini seperti sebuah pertunjukkan bagi para bangsawan.</p>
                            <p>Ayah, tolong jangan lihat aku dengan mata haus darah seperti itu.</p>
                            <p>Ini semua untuk pertunjukkan, bukan? Tolong katakan ini hanya untuk pertunjukkan.</p>
                            <p>“Zest-sama, maaf telah mengganggu anda saat anda sedang sibuk. Saya membawa pesan dari Paduka Frontier Count.”</p>
                        </div>
                    </article>
                </div>
                <div className="col-12 col-md-3">
                    <div className="row">
                        <div className={`col-12 bg-${props.theme} text-white`} >
                            <div className="h6 my-3">Novel Terkait</div>
                        </div>
                        <div className={`col-12 bg-${props.theme === 'dark' ? 'secondary' : 'light'}`}>
                            <div className="row mb-2">
                                {
                                    novel.map((data, i) => 
                                        <div key={i} className="col-12 other-novel" data-theme={props.theme}>
                                            <div className="poster-novel mr-2">
                                                <img src={data.image} alt="poster-novel" className="w-100" />
                                            </div>
                                            <div className="detail-novel pl-1">
                                                <div className="header">
                                                    <Link to="/">
                                                        <div className="h6 mb-1">{data.title}</div>
                                                    </Link>
                                                    <div className="rating">
                                                        <FontAwesomeIcon className="rating on" icon={["fa", "star"]} />
                                                        <FontAwesomeIcon className="rating on" icon={["fa", "star"]} />
                                                        <FontAwesomeIcon className="rating on" icon={["fa", "star"]} />
                                                        <FontAwesomeIcon className="rating on" icon={["fa", "star"]} />
                                                        <FontAwesomeIcon className="rating on" icon={["fa", "star"]} />
                                                        <span className="ml-1">5.0</span>
                                                    </div>
                                                </div>
                                                <hr className="my-1"/>
                                                <div className="w-100 mt-1">
                                                    {
                                                        data.genre.map((genre, i) => 
                                                            <span key={i} className={`badge badge-${props.theme === 'dark' ? 'light' : 'secondary'} px-1 mr-1 mb-1`}>{genre}</span>
                                                        )
                                                    }
                                                </div>
                                                <div className="description">
                                                    {data.description}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Artikel
