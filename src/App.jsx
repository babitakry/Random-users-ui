import { useState, useEffect } from 'react';
import UserCard from './components/UserCard';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://api.freeapi.app/api/v1/public/randomusers');
        // console.log("Response from API: ", response);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log("Response: ", result);

        // The API returns users in data.data
        if (result.success && result.data && result.data.data) {
          setUsers(result.data.data);
        } else {
          throw new Error('Invalid data format received from API');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Discover <span className="text-blue-600">Random Users</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A beautiful grid showcasing random profiles fetched from the FreeAPI endpoints.
          </p>
        </div>

        {isLoading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8 rounded-md shadow-sm">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700 font-medium">Error loading users: {error}</p>
              </div>
            </div>
          </div>
        )}

        {!isLoading && !error && users.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {users.map((user) => (
              <UserCard key={user.login.uuid} user={user} />
            ))}
          </div>
        )}

        {!isLoading && !error && users.length === 0 && (
          <div className="text-center text-gray-500 py-12">
            No users found.
          </div>
        )}
      </div>
    </div>
  );
}

export default App;