import "./App.css";
import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class App extends Component {
    state = {
        Person: {
            fullName: "Yosra Nemri",
            bio:
                " Born in 1995 at Bizerte, Yosra is a bioenginner specialized in innovation and studying to be a web developer",
            imgSrc: "./images/Yosra.jpg",
            profession: "Beginner Web developer",
        },
        show: false,
    };
    componentDidMount() {
        console.log("component did mount");
    }
    componentDidUpdate() {
        console.log("component did update");
    }
    componentWillUnmount() {
        console.log("component will unmount");
    }
    render() {
        return (
            <div className="App">
                <Button
                    variant="danger"
                    onClick={() => this.setState({ show: !this.state.show })}
                >
                    Profile
                </Button>

                {this.state.show ? (
                    <div className="profile">
                        <img
                            id="img"
                            src={this.state.Person.imgSrc}
                            alt="image not found"
                        />

                        <h2>FullName : {this.state.Person.fullName}</h2>

                        <h3>Bio : {this.state.Person.bio}</h3>

                        <h3>Profession : {this.state.Person.profession}</h3>
                    </div>
                ) : (
                    "Click to see my profile"
                )}
            </div>
        );
    }
}
