import React, { Component } from 'react';
import './App.css';
import GameList from "./GameList";
/*import SearchExampleCategoryCustom from 'search';*/

const games=[{
    title:"gta",
    Cost:192,
    image:"https://tinyurl.com/y9n3qxz4",
    description:"Gta is new game released by RockStar Games.",
    release:"Released in 2002"

},{
    title:"Mad Max 3",
    Cost:600,
    image:"https://tinyurl.com/yb657qo4",
    description:"Gta is new game released by Avalanche Studios.",
    release:"Released in 2015"
}]

class App extends Component {
  render() {
    return (
      <div className="App">
          {/*<SearchExampleCategoryCustom/>*/}
          <GameList games={games}/>
      </div>
    );
  }
}

export default App;
