import React from 'react';
import {robots} from './robots';

//class Card extends React.Component {

// 	render() {
// 		return(
// 			<div>
// 			{robots.map(robot => (
// 				<div className="bg-light-green dib pa3 ma2 tc br3 grow" key={robot.id}>
//       		<img role='presentation' src={`//robohash.org/${robot.id}?size=200x200`} />
// 					<h2>{robot.name}</h2>
// 					<p>{robot.email}</p>
// 				</div>
// 			))}
// 			</div>
// 		);
// 	}
// }

const Card = ({id, name, email}) => {
  return (
    <div className='grow bg-light-green br3 pa3 ma2 dib'>
      <img role='presentation' src={`//robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

Card.propType = {
	id: React.PropTypes.number.isRequired,
	name: React.PropTypes.string.isRequired,
	email: React.PropTypes.string.isRequired,
};

export default Card;