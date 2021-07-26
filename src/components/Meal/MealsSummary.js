import React from 'react';
import classes from './MealsSummary.module.css';

export default function MealsSummary() {
    return (
        <section className={classes.summary}>
            <h2>Best food across Pakistan</h2>
            <p>
                Choose your favorite meal and get it in 30 minutes. If we are late, you get a 10% discount. 
            </p>
            <p>
                Choose from over 10,000 vendors across the nation.
            </p>
        </section>

    )
}
