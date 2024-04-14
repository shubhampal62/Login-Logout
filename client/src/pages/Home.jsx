import React from 'react';

// Home Page
export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-30 animate-blob"></div>
      <div className="px-4 py-12 max-w-2xl mx-auto relative z-10">
        <h1 className="text-3xl font-bold mb-4 text-slate-800">
          Welcome to the Home Page!
        </h1>
        <p className="mb-4 text-slate-700">
          This is a landing page with a header, footer, and a user data form. The form has fields for username, password, gender, and skills, with validation. Implementing a login functionality that stores user data in the backend and displays a success message on successful login. Restricted access for invalid credentials and display the user list in the backend.
        </p>
        <p className="mb-4 text-slate-700">
          We can also login or sign up through Google account. The profile photo of the person can be changed and the information about the user can also be edited.

        </p>
      </div>
    </div>
  );
}
