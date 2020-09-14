import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const Post = ({ uid }) => {
  const [ oneDay, setOneDay ] = useState(false);
  const [ replyType, setReplyType ] = useState('public');
  const [ channels, setChannels ] = useState([]);
  const [ text, setText ] = useState('');
  useEffect(() => {
    // get one day status
  });
  return (
    <div>
      <div>one a day</div>
      <div>replyType</div>
      <div>channels</div>
      <textarea></textarea>
      <div>post button</div>
    </div>
  );
}

export default connect(
  ({ user: { uid } }) => ({ uid }),
  {  }
)(Post);
