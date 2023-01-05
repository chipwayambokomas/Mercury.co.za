import './Timeline.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { TimelineDatapg1 } from './TimelineData'
import { useState } from 'react'

function Timeline() {

    const [selected, setSelected] = useState(1);

    const handleColor = (row) => {
        setSelected(row.id);
    };

    const lists = [
        { id: 1, title: "1", presentation: 'pageButtonsb1', page: '/blog/page=1' },
        { id: 2, title: "2", presentation: 'pageButtonsb2', page: '/' },
        { id: 3, title: "3", presentation: 'pageButtonsb3', page: '/' },
        { id: 4, title: "4", presentation: 'pageButtonsb4', page: '/' }
    ];




    return (
        <>
        <div className='Timeline'>

            {TimelineDatapg1.map((item, index) => {
                return (
                    <div key={index}>
                        <img alt='image1-t' className='image1-t' src={item.image} />

                        <div className='postinformation'>
                            <p><i className="fa-solid fa-clock"></i>{item.date}</p>
                            <p><i className="fa-solid fa-user"></i>{item.name}</p>
                            <p><i className="fa-solid fa-comment-dots"></i>{item.comments}</p>
                        </div>

                        <h1>{item.title}</h1>

                        <p className='postpre'>{item.preview}</p>

                        <ul className="b1">
                            <li>
                                <Link to='/'>
                                    <button className='readmore'>Read More <i className='fa-solid fa-arrow-right'></i></button>
                                </Link>
                            </li>
                        </ul>

                    </div>
                )
            })}

            <div className='pageButtons'>
                {lists.map((list) => (
                    <ul>
                        <li>
                            <Link to={list.page} key={list.id}>
                                <button


                                    onClick={() => handleColor(list)}
                                    style={{ backgroundColor: list.id === selected ? "#013A6B" : "transparent" }}
                                    className={list.presentation}
                                >
                                    <p
                                        style={{ color: list.id === selected ? "white" : "#013A6B" }}
                                    >{list.title}</p>
                                </button>
                            </Link>
                        </li>
                    </ul>
                ))}
            </div>

        </div>


    </>    
    )
}

export default Timeline