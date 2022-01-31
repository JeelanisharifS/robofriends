import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	return (
		<div>
			{ 
				robots.map((users, i) => {
					return(
						<Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
					);
				})
			}
		</div>
	);
}

export default CardList;

// Or We can also do like one:

// const Cardlist = ({ robots }) => {
// 	const CardArray = robots.map((users, i) => {
// 		return(
// 			<Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
// 		);
// 	});

// 	return (
// 		<div>
// 			{CardArray}
// 		</div>
// 	);
// }