import React from 'react';
import Carditem from './Carditem';
import './Cards.css';
import img from './../images/img-11.jpg';
import imga from './../images/img-10.jpg';
import imgaa from './../images/img-12.jpg';
import imgaaa from './../images/img-13.jpg';
import imgaaaa from './../images/img-14.jpg';
import imgaaaag from './../images/img-15.jpg';
import imgaaaage from './../images/img-16.jpg';
import imgaaaagee from './../images/img-17.jpg';

function Cards() {
    return (
        <div className = 'cards' >
            <h1>These are my hobbies and interest</h1>
            <div className = 'cards__container' >
                <div className ='cards__wrapper' >
                    <ul className ='cards__items'>
                        <Carditem 
                            src = {img}
                            text ='I was always facinated by outer space since i was a little kid and I still am.'
                            label = 'Astronomy'
                            path = ''
                        />
                        <Carditem 
                            src = {imga}
                            text ='I loved physics and always seems to go with my curious mind'
                            label = 'Physics'
                            path = ''
                        />
                        
                        <Carditem 
                            src = {imgaa}
                            text ='Programming has become a part of who I am ever since 2019'
                            label = 'Programming'
                            path = ''
                        />
                        
                        <Carditem 
                            src = {imgaaa}
                            text ='And as expected I am a huge Gamer'
                            label = 'Gaming'
                            path = ''
                        />
                        
                        
                    </ul>
                </div>
            </div>
            <div className = 'cards__container' >
                <div className ='cards__wrapper' >
                    <ul className ='cards__items'>
                        <Carditem 
                            src = {imgaaaa}
                            text ='I am huge Sci-Fi Fan as well'
                            label = 'Sci-Fi'
                            path = ''
                        />
                        <Carditem 
                            src = {imgaaaag}
                            text ='I Lovvvee Movies , i bet i spent 10% of my life so far watching them'
                            label = 'Movies'
                            path = ''
                        />
                        
                        <Carditem 
                            src = {imgaaaage}
                            text ='I spend almost every single part of my day listening to music even when i sleep'
                            label = 'Music'
                            path = ''
                        />
                        
                        <Carditem 
                            src = {imgaaaagee}
                            text ='Staying in one place doesnt sound fun , gets boring that why i like to travel'
                            label = 'Travel'
                            path = ''
                        />
                        
                        
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Cards;
