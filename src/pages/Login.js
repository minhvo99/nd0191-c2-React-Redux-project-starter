import { useState } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { handleLoginAuthedUser } from '../actions/authedUser';

const Login = ({ dispatch, loggedIn }) => {
  const [credentials, setCredentials] = useState({
    username: 'tylermcginnis',
    password: 'abc321',
  });
  const [error, setError] = useState('');
  if (loggedIn) {
    const urlParams = new URLSearchParams(window.location.search);
    const redirectUrl = urlParams.get('redirectTo');
    console.log(redirectUrl);
    return <Navigate to={redirectUrl ? redirectUrl : '/'} />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = dispatch(handleLoginAuthedUser(credentials));
    if (!res) {
      setError('Invalid username or password');
    }
  };

  const handleLogin = (username, password) => {
    dispatch(handleLoginAuthedUser({ username, password }));
  };

  return (
    <>
      <div className=" flex justify-center flex-col items-center gap-6">
        <h1 className="text-center">Login</h1>
        <div className="dropdown">
          <label
            data-testid="existing-user-label"
            tabIndex="0"
            className="btn m-1"
          >
            Existing User
          </label>
          <ul
            tabIndex="0"
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li
              onClick={() => {
                handleLogin('sarahedo', 'password123');
              }}
            >
              <span>Sarah Edo</span>
            </li>
            <li
              onClick={() => {
                handleLogin('tylermcginnis', 'abc321');
              }}
            >
              <span>Tyler McGinnis</span>
            </li>
            <li
              onClick={() => {
                handleLogin('mtsamis', 'xyz123');
              }}
            >
              <span>Mike Tsamis</span>
            </li>
            <li
              onClick={() => {
                handleLogin('zoshikanlu', 'pass246');
              }}
            >
              <span>Zenobia Oshikanlu</span>
            </li>
          </ul>
        </div>
        {/* Login Form with username and password */}
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
          <div className="mb-5">
            <label
              htmlFor="username"
              data-testid="username-label"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Username
            </label>
            <input
              data-testid="username-input"
              onChange={(e) =>
                setCredentials({
                  ...credentials,
                  username: e.target.value,
                })
              }
              value={credentials.username}
              type="text"
              id="username"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"

            />
          </div>
          <div className="mb-5">
            <label
              data-testid="password-label"
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              data-testid="password-input"
              onChange={(e) =>
                setCredentials({
                  ...credentials,
                  password: e.target.value,
                })
              }
              value={credentials.password}
            />
          </div>
            {error && (
              <div className="alert alert-error">
                <div>
                  <i className="fa-regular fa-circle-xmark"></i>
                  <span data-testid="error-message">
                    Username or password is incorrect
                  </span>
                </div>
              </div>
            )}
          <button
            data-testid="submit-login"
            className="btn text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

const mapStateToProps = ({ authUser }) => {
  return {
    loggedIn: !!authUser,
  };
};

export default connect(mapStateToProps)(Login);
