import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { handleLogoutAuthedUser } from '../../actions/authedUser';

const Navbar = ({ dispatch, authUser }) => {
  const logoutHandle = () => {
    dispatch(handleLogoutAuthedUser());
  };
  return (
    <nav className="bg-white dark:bg-gray-900 w-full z-20 top-0 start-0 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          data-testid="logo"
          to={'/'}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        ><span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Employee Poll</span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <h2 data-testid="authUserName" className="px-2 self-center text-1xl whitespace-nowrap dark:text-white">
            {authUser?.name}
          </h2>
          {authUser ? (
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" data-testid="logout-link" onClick={logoutHandle}>
              Logout
            </button>
          ) : (
            <Link className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" data-testid="login-link" to={'/login'}>
              Login
            </Link>
          )}
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800">
            <li>
              <Link className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" data-testid="home-link" to={'/'}>
                Home
              </Link>
            </li>
            <li>
              <Link className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" data-testid="new-poll-link" to={'/add'}>New Poll</Link>
            </li>
            <li>
              <Link className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" data-testid="leaderboard-link" to={'/leaderboard'}>Leaderboard</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ authUser }) => ({
  authUser,
});

export default connect(mapStateToProps)(Navbar);
