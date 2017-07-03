import React, { Component } from 'react';
import logo from './images/ice-cream-cone-flat.png';
import './App.css';
import List from './List.js';

let items = [
    {
        id: '01',
        image: './images/BelgianChocolate.jpg',
        name: 'Belgian Chocolate'
    },
    {
        id: '02',
        image: './images/bourbonpralinepecan.jpg',
        name: 'Bourbon Praline Pecan'
    },
    {
        id: '03',
        image: './images/BrowniesàlaMode.jpg',
        name: 'Brownies à la Mode'
    },
    {
        id: '04',
        image: './images/ButterPecan.jpg',
        name: 'Butter Pecan'
    },
    {
        id: '05',
        image: './images/CaramelCone.jpg',
        name: 'Caramel Cone'
    },
    {
        id: '06',
        image: './images/CherryVanilla.jpg',
        name: 'Cherry Vanilla'
    },
    {
        id: '07',
        image: './images/Chocolate.jpg',
        name: 'Chocolate'
    },
    {
        id: '08',
        image: './images/ChocolateChipCookieDough.jpg',
        name: 'Chocolate Chip Cookie Dough'
    },
    {
        id: '09',
        image: './images/ChocolateChocolateChip.jpg',
        name: 'Chocolate Chocolate Chip'
    },
    {
        id: '10',
        image: './images/ChocolatePeanutButter.jpg',
        name: 'Chocolate Peanut Butter'
    },
    {
        id: '111',
        image: './images/Coffee.jpg',
        name: 'Coffee'
    },
    {
        id: '12',
        image: './images/CookiesandCream.jpg',
        name: 'Cookies and Cream'
    },
    {
        id: '13',
        image: './images/DulcedeLeche.jpg',
        name: 'Dulce de Leche'
    },
    {
        id: '14',
        image: './images/espressochocolatecookiecrumble.jpg',
        name: 'Espresso Chocolate Cookie Crumble'
    },
    {
        id: '15',
        image: './images/GreenTea.jpg',
        name: 'Green Tea'
    },
    {
        id: '16',
        image: './images/JavaChip.jpg',
        name: 'Java Chip'
    },
    {
        id: '17',
        image: './images/Mango.jpg',
        name: 'Mango'
    },
    {
        id: '18',
        image: './images/MintChip.jpg',
        name: 'Mint Chip'
    },
    {
        id: '19',
        image: './images/peanutbuttersaltedfudge.jpg',
        name: 'Peanut Butter Salted Fudge'
    },
    {
        id: '20',
        image: './images/PeppermintBark.jpg',
        name: 'Peppermint Bark'
    },
    {
        id: '21',
        image: './images/PineappleCoconut.jpg',
        name: 'Pineapple Coconut'
    },
    {
        id: '22',
        image: './images/Pistachio.jpg',
        name: 'Pistachio'
    },
    {
        id: '23',
        image: './images/PralinesandCream.jpg',
        name: 'Pralines and Cream'
    },
    {
        id: '24',
        image: './images/RockyRoad.jpg',
        name: 'Rocky Road'
    },
    {
        id: '25',
        image: './images/RumRaisin.jpg',
        name: 'Rum Raisin'
    },
    {
        id: '26',
        image: './images/SeaSaltCaramelTruffle.jpg',
        name: 'Sea Salt Caramel Truffle'
    },
    {
        id: '27',
        image: './images/Strawberry.jpg',
        name: 'Strawberry'
    },
    {
        id: '28',
        image: './images/SweetCreamCoffeeCaramel.jpg',
        name: 'Sweet Cream Coffee Caramel'
    },
    {
        id: '29',
        image: './images/toastedcoconutcaramel.jpg',
        name: 'Toasted Coconut Caramel'
    },
    {
        id: '30',
        image: './images/Vanilla.jpg',
        name: 'Vanilla'
    },
    {
        id: '31',
        image: './images/VanillaBean.jpg',
        name: 'Vanilla Bean'
    },
    {
        id: '32',
        image: './images/VanillaChocolateChip.jpg',
        name: 'Vanilla Chocolate Chip'
    },
    {
        id: '33',
        image: './images/VanillaSwissAlmond.jpg',
        name: 'Vanilla Swiss Almond'
    },
    {
        id: '34',
        image: './images/VanillaTangerineandShortbread.jpg',
        name: 'Vanilla Tangerine and Shortbread'
    },
    {
        id: '35',
        image: './images/WhiteChocolateRaspberryTruffle.jpg',
        name: 'White Chocolate Raspberry Truffle'
    }
];

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to Gelato</h2>
                </div>
                <div className="container clearfix">
                    <ul className="clearfix">
                        {items.map(item => (
                            <List item={item} key={item.id}/>
                        ))}

                    </ul>
                </div>

            </div>
        );
    }
}

export default App;
