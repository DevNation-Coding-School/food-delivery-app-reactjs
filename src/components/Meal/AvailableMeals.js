import React from 'react';
import classes from './AvailableMeals.module.css';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_DATA = [
    {
        id: '1',
        name: "Biryani",
        description: "best rice dish with flavorful chicken",
        price: 300
    },
    {
        id: '2',
        name: "Karahi",
        description: "tender chicken with butter and yogurt",
        price: 1100
    },
    {
        id: '3',
        name: "Chicken Burger",
        description: "crispy burger with double patty",
        price: 500
    },
    {
        id: '4',
        name: "Beef Steak",
        description: "tender medium-rare new york strip",
        price: 2000
    },
]

export default function AvailableMeals() {

    const mealsList = DUMMY_DATA.map((item) => <MealItem id={item.id} key={item.id} name={item.name} description={item.description} price={item.price}/>)

    return (
        <section className={classes.meals}>
            <Card>
            <ul>
                {mealsList}
            </ul>
            </Card>
        </section>
    )
}
