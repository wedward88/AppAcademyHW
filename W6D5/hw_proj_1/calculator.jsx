import React from 'react';

class Calculator extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = { result: 0, num1: "", num2: "" }
        this.setNum1 = this.setNum1.bind(this);
        this.setNum2 = this.setNum2.bind(this);
        this.adding = this.adding.bind(this);
        this.subtracting = this.subtracting.bind(this);
        this.multiplying = this.multiplying.bind(this);
        this.dividing = this.dividing.bind(this);
        this.clear = this.clear.bind(this);

    }


    render(){
        return (
            <div>
                <h1>{this.state.result}</h1>

                <input onChange={this.setNum1} value={this.state.num1} type="text"></input>
                <br/>
                <input onChange={this.setNum2} value={this.state.num2} type="text"></input>
                <br />
                <button onClick={this.adding}>Add Nums</button>   
                <br />
                <button onClick={this.subtracting}>Subtract Nums</button> 
                <br />  
                <button onClick={this.multiplying}>Multiply Nums</button>  
                <br /> 
                <button onClick={this.dividing}>Divide Nums</button>   
                <br />
                <button onClick={this.clear}>CLEAR</button>   

            </div>
        );
    }

    setNum1(e) {
        e.preventDefault();
        this.setState({ num1: e.target.value });
    }

    setNum2(e) {
        e.preventDefault();
        this.setState({ num2: e.target.value });
    }

    adding(e) {
        e.preventDefault();
        let added = Number(this.state.num1) + Number(this.state.num2);
        this.setState({ result: added });
    }
    subtracting(e) {
        e.preventDefault();
        let subbed = Number(this.state.num1) - Number(this.state.num2);
        this.setState({ result: subbed });
    }
    multiplying(e) {
        e.preventDefault();
        let multied = Number(this.state.num1) * Number(this.state.num2);
        this.setState({ result: multied });
    }
    dividing(e) {
        e.preventDefault();
        let divided = Number(this.state.num1) / Number(this.state.num2);
        this.setState({ result: divided });
    }

    clear(e) {
        e.preventDefault();
        this.setState({ result: 0, num1: "", num2: ""})
    }
}

export default Calculator;