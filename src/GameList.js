import React from 'react';
import GamesCard from "./GamesCard";



const GameList = ({games})=>(

    <div className="ui four cards">
        ({games.map(game=> <GamesCard game={game} key={game.id}/>)}
    </div>
)



export default GameList;