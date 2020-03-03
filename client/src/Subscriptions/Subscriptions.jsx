import React from 'react';

const nums = [1,2,3,4,5,6,7,8,9];

export default () => (
	<div>
		list
		<ul>
			{nums.map((num,i) => <li key={i}>{num}</li>)}
		</ul>
	</div>
);
