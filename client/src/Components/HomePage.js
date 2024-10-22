// HomePage.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage">
            <nav className="navbar">
                <div className="logo">DailyHabits</div>
                <div className="nav-links">
                    <a href="#">Login</a>
                    <a href="#">Signup</a>
                </div>
            </nav>
            <header className="header-section">
                <h1>The Simplest Habit Tracker App on this Planet</h1>
                <p>Finally, a daily habit tracker that helps you do more, by doing less.</p>
                <button className="start-btn">Start DailyHabits today</button>
            </header>


            <section className="carousel-section">
                <Carousel
                    autoPlay={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    interval={3000}
                    showStatus={false}
                >

                    <div>
                        <img src="https://s3.us-west-2.amazonaws.com/public.notion-static.com/template/256ff8b6-6209-43b6-ab95-bffacb967c5b/desktop.png" alt="Track Your Habits" />
                        <p className="legend">Track your daily habits easily with a clean and intuitive interface.</p>
                    </div>


                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwbcIiPeWvC3CrBoKyoneVzHQsd_vJD81_tA&s" alt="Set and Reach Your Goals" />
                        <p className="legend">Set personal goals and reach them through consistent habit tracking.</p>
                    </div>

                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROwp0X-Oz5g2GRXvN8ElyKTdREqg2wagQcew&s" alt="Detailed Analytics" />
                        <p className="legend">Analyze your progress with detailed analytics and insightful reports.</p>
                    </div>
                </Carousel>
            </section>
        </div>
    );
}

export default HomePage;
