import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InfoNovel } from 'App/molekuls';
import './style.css';
import { Link, useHistory } from 'react-router-dom';

function DetailEntry(props) {
    const history = useHistory()
    const novel = require('App/listnovel').default;
    const detail = props.data
    const {params} = props.match.params
    const [state, setstate] = useState({
        comment: '',
        rate: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(state);
    }
    return (
        <div className="row mt-3 detail" data-theme={props.theme} data-device={props.device}>
            <div className="col-12 col-md-9 mb-3 px-2">
                <div className="row">
                    <div className="col-sm-12 col-md-3">
                        <div className="col thumb-novel px-0 border">
                            <img className={`w-100 ${props.theme === "dark" ? "shadow-white" : "shadow" }`} src={detail.image} alt="poster-image" />
                        </div>
                        <div className="col info">
                            <InfoNovel info="Nama Alternatif" data="To be a power in The Shadows!" />
                            <InfoNovel info="Update Chapter Terakhir" data="Chapter 239" />
                            <InfoNovel info="Tahun Release" data="2020" />
                            <InfoNovel info="Views" data={
                                <span>
                                    <FontAwesomeIcon className="mr-1" icon={["fa", "eye"]} />
                                    318K
                                </span>
                            } />
                            <InfoNovel 
                                info="Rating" 
                                data={
                                    <>
                                        <div className="rating">
                                            <FontAwesomeIcon className="rating on" icon={["fa", "star"]} />
                                            <FontAwesomeIcon className="rating on" icon={["fa", "star"]} />
                                            <FontAwesomeIcon className="rating on" icon={["fa", "star"]} />
                                            <FontAwesomeIcon className="rating on" icon={["fa", "star"]} />
                                            <FontAwesomeIcon className="rating" icon={["fa", "star"]} />
                                            <span className="ml-1">4.0</span>
                                        </div>
                                        <div>(2.945 votes)</div>
                                    </>
                                } />
                            <InfoNovel info="Tipe" data="Web Novel (JP)" />
                            <InfoNovel info="Status" data="Ongoing" />
                            <InfoNovel info="Penulis" data="Fuse" />
                            <InfoNovel info="Genre" data={
                                <>
                                    {
                                        detail.genre.map((genre, i) => 
                                            <span key={i} className="badge badge-secondary p-1 mr-1 mb-1">{genre}</span>
                                        )
                                    }
                                </>
                            } />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-9">
                        <div className="desc mb-2">
                            <div className="h6"><b>Sinopsis :</b></div>
                            <span>Ideal for cold-weather training or work outdoors, the Chaz Hoodie promises superior warmth with every wear. Thick material blocks out the wind as ribbed cuffs and bottom band seal in body heat.Ideal for cold-weather training or work outdoors, the Chaz Hoodie promises superior warmth with every wear. Thick material blocks out the wind as ribbed cuffs and bottom band seal in body heat.Ideal for cold-weather training or work outdoors, the Chaz Hoodie promises superior warmth with every wear. Thick material blocks out the wind as ribbed cuffs and bottom band seal in body heat.Ideal for cold-weather training or work outdoors, the Chaz Hoodie promises superior warmth with every wear. Thick material blocks out the wind as ribbed cuffs and bottom band seal in body heat.</span>
                            {/* <div className="h6 mt-2">Genre :</div>
                            <div className="w-100 ">
                                {
                                    detail.genre.map((genre, i) => 
                                        <span key={i} className="badge badge-secondary p-1 mr-1 mb-1">{genre}</span>
                                    )
                                }
                            </div> */}
                        </div>
                        <hr/>
                        <div className="chapter">
                            <div className="chapter-nav d-flex">
                                <div className="col-6 pl-0 pr-1">
                                    <div className={`w-100 btn btn-${props.theme === 'dark' ? 'secondary' : 'primary'}`}>
                                        <div className="font-12">First Chapter</div>
                                        <div className="font-16"><b>Chapter 0</b></div>
                                    </div>
                                </div>
                                <div className="col-6 pr-0 pl-1">
                                    <div className={`w-100 btn btn-${props.theme === 'dark' ? 'secondary' : 'primary'}`}>
                                        <div className="font-12">First Chapter</div>
                                        <div className="font-16"><b>Chapter 3</b></div>
                                    </div>
                                </div>
                            </div>
                            <div className="chapter-list mt-2">
                                <div className="table-responsive">
                                    <table className={`table table-${props.theme === 'dark' ? 'dark' : 'striped'}`}>
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Judul Novel</th>
                                                <th scope="col">Tanggal Rilis</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Chapter 3</td>
                                                <td>Monster Tamer</td>
                                                <td>22 Januri 2020</td>
                                                <td>
                                                    <button  onClick={()=> history.push("/novel/"+params+"/test")} className="btn btn-sm btn-primary">
                                                        <FontAwesomeIcon icon={["fa", "eye"]} />
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <hr className="mt-0"/>
                        <div className={`comment bg-${props.theme === "dark" ? props.theme : "light"}`}>
                            <div className="header_comment d-flex pb-2">
                                <div className="col-6 px-1 text-left">
                                    <span className="count_comment">264235 Comments</span>
                                </div>
                                <div className="col-6 px-1 text-right">
                                    <span>Sort by &nbsp;</span>
                                    <select className="sort_by">
                                        <option>Top</option>
                                        <option>Newest</option>
                                        <option>Oldest</option>
                                    </select>
                                </div>
                            </div>
                            <div className="body_comment">
                                <div className="w-100 d-flex">
                                    <div className="avatar px-1">
                                        <img src="https://i.imgur.com/yTFUilP.jpg" className="w-100 mt-1" alt="avatar"/>
                                    </div>
                                    <div className="w-100 pl-1">
                                        <div className="d-flex">
                                            <div className="h6 mb-0">Jhoonny</div>
                                            <span>&nbsp;-&nbsp;</span>
                                            <span>20 October, 2018</span>
                                        </div>
                                        <div className="rating font-10">
                                            <FontAwesomeIcon className="on" icon={["fa", "star"]} />
                                            <FontAwesomeIcon className="on" icon={["fa", "star"]} />
                                            <FontAwesomeIcon className="on" icon={["fa", "star"]} />
                                            <FontAwesomeIcon className="on" icon={["fa", "star"]} />
                                            <FontAwesomeIcon icon={["fa", "star"]} />
                                        </div>
                                        <div className="description mt-2">
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-100 d-flex">
                                    <div className="avatar px-1">
                                        <img src="https://i.imgur.com/CFpa3nK.jpg" className="w-100 mt-1" alt="avatar"/>
                                    </div>
                                    <div className="w-100 pl-1">
                                        <div className="d-flex">
                                            <div className="h6 mb-0">Jhoonny</div>
                                            <span>&nbsp;-&nbsp;</span>
                                            <span>20 October, 2018</span>
                                        </div>
                                        <div className="rating font-10">
                                            <FontAwesomeIcon className="on" icon={["fa", "star"]} />
                                            <FontAwesomeIcon className="on" icon={["fa", "star"]} />
                                            <FontAwesomeIcon className="on" icon={["fa", "star"]} />
                                            <FontAwesomeIcon className="on" icon={["fa", "star"]} />
                                            <FontAwesomeIcon icon={["fa", "star"]} />
                                        </div>
                                        <div className="description mt-2">
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="leave-comment px-1">
                            <div className="h4">Leave a comment</div>
                            <form onSubmit={handleSubmit} noValidate>
                                <div className="form-group"> 
                                    <label>Rating</label> 
                                    <select onChange={(e) => setstate({...state, rate: e.target.value})}  className="form-control">
                                        <option>5</option>
                                        <option>4</option>
                                        <option>3</option>
                                        <option>2</option>
                                        <option>1</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Message</label> 
                                    <textarea onChange={(e) => setstate({...state, comment: e.target.value})} name="msg" rows="4" className="form-control"></textarea>
                                </div>
                                
                                <div className="form-group"> 
                                    <button type="submit" className="btn btn-primary w-100">Post Comment</button> 
                                </div>
                            </form>
                        </div>
                        <hr/>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-3">
                <div className="row px-2">
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
    )
}

export default DetailEntry
