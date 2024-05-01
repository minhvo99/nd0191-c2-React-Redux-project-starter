import { Link } from 'react-router-dom';

const PollCard = ({ poll, author }) => {
  const date = new Date(poll.timestamp).toLocaleDateString();
  return (
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center pb-10">
          {author?.avatarURL ? (
            <img src={author?.avatarURL} alt="avatar" />
          ) : (
            <img src="https://via.placeholder.com/450" alt="avatar" />
          )}
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {author?.name}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Date : {date}
          </span>
          <div className="flex mt-4 md:mt-6">
            <Link
              to={`/questions/${poll.id}`}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
  );
};

export default PollCard;
