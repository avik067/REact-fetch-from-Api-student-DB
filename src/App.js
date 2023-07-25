import Headers from './components/Headers'
import InitialData from './components/InitialData'
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component  {

  state = {data:[]}
    
  componentDidMount () {
     this.getData()
  }

   getData = async() =>{
    console.log("getting data")
    try {
    let a  = await fetch("https://crud-mongoose-final.vercel.app/students")
    let data = await a.json()
    this.setState({data:data})

    }catch(e) {
      console.log(e)
    }
  }
  
  

  render () {
     const {data} = this.state
    return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Headers />

      <InitialData details={data} />
    </div>
  )}
  
}

export default App;
