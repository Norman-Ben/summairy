import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function MySummaries() {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  return (
    <div className="flex flex-col gap-3 min-w-full">
      <h2 className="font-satoshi font-bold text-gray-600 text-xl">
        My{' '}
        <span className="bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 bg-clip-text text-transparent">
          Summaries
        </span>
      </h2>
      <div className="rounded-xl border border-gray-200 bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-4">
        {!user && (
          <p className="font-inter font-medium text-sm text-gray-700">
            Please login or register for an account to save, edit or delete your
            summaries.
          </p>
        )}
      </div>
    </div>
  );
}

export default MySummaries;
