import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
    render() {
        return (
            <>
                <div className="home-container">
                    <h1 className="home-text">
                        Welcome to my website. My name is Kent, a student
                        majoring in Computer from the Greater Los Angeles Area a
                        currently studying at The University of California,
                        Riverside. Becoming a software engineer intern is my
                        goal for Summer 2021.
                    </h1>
                    <div>
                        <img></img>
                        <img></img>
                        <img></img>
                        <img></img>
                    </div>
                </div>
            </>
        );
    }
}

export default Home;
