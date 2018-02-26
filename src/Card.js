import React from 'react'; // view library.


const Card = ({ name, email, id }) => {
	// const {name, email, id} = props; //moved to line above
	return (
    // everything after this is is JSX not html
    //these className are tachyon styling
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img alt="robot-photo" src={`https://robohash.org/${id}?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
};

export default Card;