import React, { createContext,useState } from 'react';
import guitar from '../assets/guitar.jpg';
import headphone from '../assets/headphone.jpg';
import laptop from '../assets/laptop.jpg';
import microphone from '../assets/microphone.jpg';
import shoes from '../assets/shoes.jpg';
import sound from '../assets/sound.jpg';
import watch2 from '../assets/watch2.jpg';
import mobile from '../assets/mobile.jpg';
import bulb from '../assets/bulb.jpg';
import router from '../assets/router.jpg';

export const productsContext = createContext();

const ProductContext = (props) => {

    const [products] = useState([
        {
            id: 1,
            name: 'guitar',
            price: '$100',
            image: guitar,
            status: 'hot'
        },
        {
            id: 2,
            name: 'headphone',
            price: '$50',
            image: headphone,
            status: 'new'
        },
        {
            id: 3,
            name: 'laptop',
            price: '$250',
            image: laptop,
            status: 'hot'
        },
        {
            id: 4,
            name: 'microphone',
            price: '$10',
            image: microphone,
            status: 'new'
        }, {
            id: 5,
            name: 'mobile',
            price: '$150',
            image: mobile,
            status: 'new'
        },
        {
            id: 6,
            name: 'shoes',
            price: '$30',
            image: shoes,
            status: 'new'
        },
        {
            id: 7,
            name: 'sound',
            price: '$60',
            image: sound,
            status: 'hot'
        },
        {
            id: 8,
            name: 'watch',
            price: '$20',
            image: watch2,
            status: 'new'
        },
        {
            id: 9,
            name: 'bulb',
            price: '$10',
            image: bulb,
            status: 'hot'
        },
        {
            id: 10,
            name: 'router',
            price: '$70',
            image: router,
            status: 'new'
        },

    ])

    return (
        <productsContext.Provider value={{products:[...products]}}>
            {props.children}
        </productsContext.Provider>
    )
}

export default ProductContext;
