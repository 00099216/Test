import React from 'react';
import "./App.module.css"
import {Image} from "./Image";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.changeHandler = this.changeHandler.bind(this)
        this.state = {
            color: 'red',
            photos: [],
            contador: 0
        }
    }

    componentDidMount() {
        const newArray = [];
        fetch('https://reqres.in/api/users?page=2')
            .then(response => response.json())
            .then(json => {
                json.data.forEach((element, index) => {
                    newArray.push(element["avatar"])
                })
                this.setState({
                    ...this.state,
                    photos: newArray
                })
            }).catch(err => {

        });
        window.setInterval(this.changeHandler, 1000)
    }

    componentWillUnmount() {
        window.clearInterval(this.changeHandler)
    }

    changeHandler() {
        let newContador = this.state.contador;
        newContador++;
        newContador = newContador >= this.state.photos.length ? 0 : newContador
        this.setState({
            ...this.state,
            contador: newContador
        })
    }

    render() {

        let toRender = {};
        if (this.state.photos.length === 0) {
            toRender = null
        } else {
            toRender = <Image src={this.state.photos[this.state.contador]}/>
        }

        return <div>
            {toRender}
        </div>
    }

}

export default App;
