import '../main.css';
import snappyProcess from "../images/icon-snappy-process.svg";
import affordablePrices from "../images/icon-affordable-prices.svg";
import peopleFirst from "../images/icon-people-first.svg";
import React from 'react';

function FirstSection() {
    return (
        <section id="firstSection">
            <hr/>
            <h1>We're different</h1>

            <span>
                <div>
                    <img src={snappyProcess} alt=""/>
                    <h3>Snappy Process</h3>
                    Our application process can be completed in minutes, not hours. Don't get 
                    stuck filling in tedious forms.
                </div>
                
                <div>
                    <img src={affordablePrices} alt=""/>
                    <h3>Affordable Prices</h3>
                    We don't want you worrying about high monthly costs. Our prices may be low, 
                    but we still offer the best coverage possible.
                </div>
                
                <div>
                    <img src={peopleFirst} alt=""/>
                    <h3>People First</h3>
                    Our plans aren't full of conditions and clauses to prevent payouts. We make 
                    sure you're covered when you need it.
                </div>
            </span>
            
            <section>
                <h1>Find out more about how we work</h1>
                <button>How we work</button> 
            </section>
        </section>
    );
}

export default FirstSection;