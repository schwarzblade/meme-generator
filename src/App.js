import React from 'react'
import './index.css'
import Header from './Header'
import MemeGenerator from './MemeGenerator'



class App extends React.Component {
  constructor(){
    super();
  }

  render(){
    return(
      <div>
        <h1>SRAK</h1>
        <Header />
        <MemeGenerator />
      </div>
    )
  }

}

export default App;