import React from 'react';
//import thunk from 'redux-thunk';
import { connect } from 'react-redux';
import axios from 'axios';


const gvValueToComponent = (data) => {
    return data;
}

const mapStateToProps = (state) => {
    return {
        objstate: gvValueToComponent(state)
    }
}

class ConditionalRend extends React.Component {
    constructor(props) {
        super(props)
        console.log('Contructor child');
    }
    componentWillMount() {
        console.log('componentWillMount child');
    }
    componentDidMount() {
        console.log('componentDidMount child');
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillRecieveProps of child');
    }
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate child');
        return true
    }
    componentWillUpdate() {
        console.log('componentWillUpdate of child ');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate of child');
    }

    render() {
        return (
            <div>
                {this.props.data ? <h2>this is the test for h2</h2> : <h4>this is the testfor h4</h4>}
            </div>
        )
    }

}
class MainClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            booVal: false
        }
        console.log('Constructor Parent');
    }
    clickHandler(dispatch) {
        console.log('clickHandler Parent');
        this.setState({
            booVal: !(this.state.booVal)
        })
        dispatch({ type: 'USER_FETCH_REQUESTED', payload: 20 })
        /*  dispatch((dispatch) => {
             dispatch({ type: 'USER_FETCH_REQUESTED' })
             axios.get('http://rest.learncode.academy/api/wstern/users').then((response) => {
                 dispatch({ type: 'RECIEVE_USERS', payload: response.data })
 
             }).catch((err) => {
                 dispatch({ type: 'FETCH_USERS_ERROR', payload: err })
             })
         }) */
    }

    //
    componentWillMount() {
        console.log('componentWillMount Parent');
    }
    componentDidMount() {
        console.log('componentDidMount Parent');
    }
    componentWillReceiveProps(nextProps) {
        console.log('componentWillRecieveProps of Parent');
    }
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate Parent');
        return true
    }
    componentWillUpdate() {
        console.log('componentWillUpdate of Parent ');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate of Parent');
    }
    render() {
        let dispatch = this.props.dispatch
        let objstate = this.props.objstate;
        let users = objstate.users

        console.log('render Parent ' + users.length + "zcs" + objstate.fetching);
        return (
            <div>
                <button onClick={(evt) => { this.clickHandler(dispatch) }}>Click</button>
                <ConditionalRend data={this.state.booVal} />
                <div >
                    {
                        users.map((a, i) => <a href="#" key={i}>{i}</a>
                        )}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(MainClass)

/* function Clock(props) {
    return (
        <div>
            <h1>Hwllo !</h1>
            <h1>It is the {props.date.toLocaleTimeString()}</h1>
            </div>
    )
}
function Tick() {
    ReactDOM.render(<Clock date={new Date()} />, document.getElementById('root'))
}
Tick()
setInterval(Tick, 1000) */

/* className Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }
    tick() {
        this.setState({
            date: new Date()
        })
    }
    componentDidMount() {
        this.timerID = setInterval(() => {
            this.tick()
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    render() {
        return (
            <div>
            <h1>Hwllo !</h1>
            <h1>It is the {this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
    }
}
ReactDOM.render(<Clock />, document.getElementById('root')) */


/* className Abhishek extends React.Component {
    constructor(props) {
        super(props)
    }
    
    clickHandler() {
        console.log('safsdf');
    }
    
    render() {
        return (
            <div>
            <h1>experimenet</h1>
            <button onClick={this.clickHandler}>Click me</button>
            </div>
        )
    }
}

ReactDOM.render(<Abhishek />, document.getElementById('root')) */


/* className Manjari extends React.Component {
    constructor(props) {
        super(props)
        
    }
    
    clickHandler(a) {
        console.log('safsdf ' + a);
    }
    
    render() {
        console.log(this);
        return (
            <div>
                <h1>experimenet</h1>
                <button onClick={this.clickHandler.bind(this, "dddd")}> Click me</button>
                </div>
        )
    }
}

/* function doit(i, j) {
    console.log(i + j);
}
function Abhishek(a, b, func) {
    console.log(a, b, 'In the Abhishek');
    func(a, b)
}

Abhishek(10, 15, doit) */

/* function Addto(num1) {
    return function add(num2) {
        return num1 + num2
    }
    
}

console.log(Addto(5)(12)); */

