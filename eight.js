import React from "react";

class Eight extends React.Component {
    name = "ReactJS";
    count = 0;

    constructor() {
        super();
        this.state = {
            number: 1
        };
        console.log("This is a constructor");
    }

    componentDidMount() {
        console.log("Mounted");
        console.log(this.count);
        console.log(this.count + 1);
        console.log(this.state.number + 1);
    }

    componentDidUpdate() {
        console.log("Component updated");
    }

    componentWillUnmount() {
        console.log("Will be Unmounted");
    }

    funcEightBtnClick = () => {
        console.log("Button Clicked");
        console.log(this.count + 1);
        //update the state
        console.log(this.state.number + 1);
    };

    render() {
        return (
            <div>
                <h1>This is class Component {this.name} {this.count} {this.state.number}</h1>
                <button type="button" className="btn btn-primary" onClick={this.funcEightBtnClick}>
                    Click here
                </button>
            </div>
        );
    }
}

export default Eight;
