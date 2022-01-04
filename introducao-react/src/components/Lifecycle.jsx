import React, {Component} from "react";

export default class Lifecycle extends Component{
    constructor(props){
        super(props)

        this.state = {
            clock: 1000,
            copo: 'agua'
        }
    }

    //Depois que for montado
    
    componentDidMount(){
        this.setState({
            copo: 'suco'
        })
    }
    

    alterarCopo() {
        
        this.setState({
            copo: 'refrigerante',
        })      

        //this.state.copo = 'refrigerante'
    }

    render(){
        return(
            <div>
                <h1>{this.state.clock}</h1>
                <button onClick={() => this.alterarCopo()}>{this.state.copo}</button>
            </div>
        )
    }
}