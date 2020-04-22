import React, {useState, useEffect} from 'react';

const Profile = ({auth}) => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    auth.getProfile((profile, error) => {
      setProfile(profile);
      setError(error);
    });
  }, [auth, profile, error]);

  if (!profile) return null;
  return (
    <div>
      <>
        <h1>Profile</h1>
        <p>{profile.nickname}</p>
        <img
          style={{maxWidth: 250, maxHeight: 250}}
          src={profile.picture}
          alt="profile pic"
        />
        <pre>{JSON.stringify(profile, null, 2)}</pre>
      </>
    </div>
  );
};

export default Profile;
