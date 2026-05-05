import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <img
        src={user.picture.large}
        alt={`${user.name.first} ${user.name.last}`}
        className="w-24 h-24 rounded-full shadow-md mb-4 border-2 border-white ring-2 ring-blue-100"
      />
      <h2 className="text-xl font-semibold text-gray-800 mb-1">
        {user.name.title} {user.name.first} {user.name.last}
      </h2>
      <p className="text-gray-500 text-sm mb-4">
        {user.location.city}, {user.location.country}
      </p>

      <div className="w-full space-y-2 mt-2">
        <div className="flex items-center text-sm text-gray-600 bg-gray-50 p-2 rounded-lg">
          <svg className="w-4 h-4 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          <span className="truncate">{user.email}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600 bg-gray-50 p-2 rounded-lg">
          <svg className="w-4 h-4 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
          {user.phone}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
