import { connect } from 'react-redux';

const Leaderboard = ({ users }) => {
  const sortedUsers = Object.keys(users).sort((a, b) => {
    const userA = users[a];
    const userB = users[b];
    const userAScore =
      Object.keys(userA.answers).length + Object.keys(userA.questions).length;
    const userBScore =
      Object.keys(userB.answers).length + Object.keys(userB.questions).length;
    return userBScore - userAScore;
  });
  return (

    <div className="relative overflow-x-auto">
      <h1 className=" text-4xl text-center">Leaderboard</h1>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3"></th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Answer
            </th>
            <th scope="col" className="px-6 py-3">
              Poll
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user, index) => {
            const { name, avatarURL, answers, questions, id } = users[user];
            return (
              <tr key={id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {index + 1}
                </th>
                <td className="px-6 py-4 basis-0 justify-center justify-items-center">
                  <span>
                    {avatarURL ? (
                      <img
                        src={avatarURL}
                        alt={name}
                        className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                      />
                    ) : (
                      <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                        <svg
                          className="absolute w-12 h-12 text-gray-400 -left-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>

                    )}
                  </span>
                  <span className=" font-medium">{`${name} (${id})`}</span>
                </td>
                <td className="px-6 py-4">{Object.keys(answers).length}</td>
                <td className="px-6 py-4">{Object.keys(questions).length}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>

  );
};

const mapStateToProps = ({ users }) => {
  return {
    users,
  };
};

export default connect(mapStateToProps)(Leaderboard);
