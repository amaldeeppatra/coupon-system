import React from 'react';
import Card from '../Card/Card';
import CardHeader from '../Card/CardHeader';
import CardTitle from '../Card/CardTitle';
import CardContent from '../Card/CardContent';

const UserProfile = ({ name, department, imageUrl }) => (
  <Card>
    <CardHeader>
      <CardTitle>User Profile</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="text-center">
        <img 
          src={imageUrl || "/api/placeholder/200/200"}
          alt="Profile" 
          className="mx-auto rounded-full w-32 h-32 mb-4"
        />
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">{department}</p>
      </div>
    </CardContent>
  </Card>
);

export default UserProfile;
