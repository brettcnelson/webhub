import React, { useState } from 'react';
import Loading from '../Loading/Loading.jsx';
import { getAllUsers } from '../API';

export default () => {
	const [data, setData] = useState(null);
	if (!data) {
		getAllUsers().then(users => {
			setData(users);
		})
	}
	return data ?
		(<pre><code>{JSON.stringify(data,null,2)}</code></pre>) :
		(<Loading />)
}