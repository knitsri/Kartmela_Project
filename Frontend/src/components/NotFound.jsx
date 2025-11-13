// src/pages/NotFound.jsx
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-6 bg-gray-50">
      <h1 className="text-9xl font-extrabold text-gray-800">404</h1>
      <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-gray-700">
        Oops! Page not found
      </h2>
      <p className="mt-2 text-gray-500 max-w-md">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-6 bg-pink-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-all duration-200"
      >
        Go Home
      </Link>
    </div>
  );
}
