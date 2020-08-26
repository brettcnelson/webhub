import React from 'react';
import './Loading.scss';

 export default  () => (
  <div className="loading-con">
    <img className="loading" src={`${process.env.PUBLIC_URL}/loader.gif`} alt="loading" />
  </div>
);
