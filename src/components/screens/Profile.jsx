import React, { useState, useEffect, useContext } from 'react';

import { UserContext } from '../../App';

const Profile = () => {
  const { state } = useContext(UserContext);

  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    // console.log(state);
    fetch(`/mypost`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setMyPosts(data.mypost));
  });

  return (
    <div style={{ maxWidth: '550px', margin: '0px auto' }}>
      <div
        style={{
          margin: '18px 0px',
          borderBottom: '1px solid grey',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <div>
            <img
              style={{ width: '160px', height: '160px', borderRadius: '80px' }}
              alt='profile pitchure'
              src='https://images.unsplash.com/photo-1582789991349-8f8e6eb15308?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'
            />
          </div>
          <div>
            <h4>{state ? state.name : 'loading'}</h4>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '108%',
              }}
            >
              <h6>{`${myPosts.length} posts`}</h6>
              <h6>{state ? `${state.followers.length} followers` : 'loading'}</h6>
              <h6>{state ? `${state.following.length} following` : 'loading'}</h6>
            </div>
          </div>
        </div>
      </div>

      <div className='gallery'>
        {myPosts.map((post) => {
          return <img key={post._id} className='item' alt={post.title} src={post.photo} />;
        })}
      </div>
    </div>
  );
};

export default Profile;
