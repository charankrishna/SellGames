import React from 'react';
import { Rating } from 'semantic-ui-react';

const GamesCard =({game})=>(
            <div className="ui card ">
                <div className="image">
                    <img src={game.image}/>
                </div>
                <div className="content">
                    <a className="header">{game.title}</a>
                    <div className="meta">
                        <span className="date">{game.release}</span>
                    </div>
                    <div className="description">
                        {game.description}
                    </div>
                </div>
                <div className="extra content">
                    <a>
                        <i className="rupee icon">{game.Cost}</i>
                    </a>
                    <div>
                     <Rating icon='star' defaultRating={1} maxRating={4} />
                    </div>
                </div>
            </div>
)




export default GamesCard;