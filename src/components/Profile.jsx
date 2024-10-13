import React from 'react';

const Profile = () => {
  const userProfile = {
    name: 'Uday Kota',
    email: 'udaykota4u@gmail.com',
    bio: 'A passionate full-stack developer with a love for building web applications and solving complex problems.',
    location: 'Vijayawada, AP',
    interests: ['Coding', 'Hiking', 'Traveling', 'Music'],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">My Profile</h2>
      <div className="mb-4">
        <h3 className="text-xl font-medium">Name:</h3>
        <p className="text-gray-700">{userProfile.name}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-medium">Email:</h3>
        <p className="text-gray-700">{userProfile.email}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-medium">Bio:</h3>
        <p className="text-gray-700">{userProfile.bio}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-medium">Location:</h3>
        <p className="text-gray-700">{userProfile.location}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-medium">Interests:</h3>
        <ul className="list-disc pl-5 text-gray-700">
          {userProfile.interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </div>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200">
        Edit Profile
      </button>
    </div>
  );
};

export default Profile;
