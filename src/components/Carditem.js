import React from 'react';
import {Link} from 'react-router-dom';
                    


function Carditem(props) {
    return (
        <>
            <li className ='cards__item' >
                <Link to = '/' className = 'cards__item__link' >
                    <figure className = 'cards__item__pic-wrap' data-category ={props.label}>
                        <img src = {props.src} alt = 'space image'
                            className = 'cards__item__img'
                        />
                    </figure>
                    <div className ='cards__item__info' >
                        <h5 className ='cards__item__text' >
                            {props.text}
                        </h5>
                    </div>
                </Link>
            </li>
        </>
    )}
export default Carditem ;
