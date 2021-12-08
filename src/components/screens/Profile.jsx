import React from 'react';

const Profile = () => {
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
            <h4>Divyanshu Saini</h4>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '108%',
              }}
            >
              <h6>200 posts</h6>
              <h6>1000 followers</h6>
              <h6>60 following</h6>
            </div>
          </div>
        </div>
      </div>

      <div className='gallery'>
        <img
          className='item'
          alt='profile pitchure'
          src='https://images.unsplash.com/photo-1582789991349-8f8e6eb15308?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'
        />
        <img
          className='item'
          alt='profile pitchure'
          src='https://images.unsplash.com/photo-1582789991349-8f8e6eb15308?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'
        />
        <img
          className='item'
          alt='profile pitchure'
          src='https://images.unsplash.com/photo-1582789991349-8f8e6eb15308?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'
        />
        <img
          className='item'
          alt='profile pitchure'
          src='https://images.unsplash.com/photo-1582789991349-8f8e6eb15308?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'
        />
        <img
          className='item'
          alt='profile pitchure'
          src='https://images.unsplash.com/photo-1582789991349-8f8e6eb15308?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'
        />
        <img
          className='item'
          alt='profile pitchure'
          src='https://images.unsplash.com/photo-1582789991349-8f8e6eb15308?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'
        />
      </div>
    </div>
  );
};

export default Profile;
