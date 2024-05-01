import { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleAddQuestion } from '../actions/polls';

const NewPoll = ({ dispatch }) => {
  const navigate = useNavigate();
  const [options, setOptions] = useState({
    firstOption: '',
    secondOption: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (options.firstOption === '' || options.secondOption === '') {
      alert('Please enter both options');
      return;
    }
    dispatch(handleAddQuestion(options.firstOption, options.secondOption));
    navigate('/');
  };
  
  return (
    <div>
      <h1 className=" text-4xl text-center">New Poll</h1>
      <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="firstOption"
            data-testid="firstOptionLabel"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            First Option
          </label>
          <input
            value={options.firstOption}
            onChange={(e) =>
              setOptions({ ...options, firstOption: e.target.value })
            }
            type="text"
            name="firstOption"
            id="firstOption"
            data-testid="firstOption"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="secondOption"
            data-testid="secondOptionLabel"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Second Option
          </label>
          <input
            value={options.secondOption}
            onChange={(e) =>
              setOptions({
                ...options,
                secondOption: e.target.value,
              })
            }
            type="text"
            name="secondOption"
            id="secondOption"
            data-testid="secondOption"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

          />
        </div>
        <button
          type="submit"
          data-testid="submit-poll"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Poll
        </button>
      </form>

    </div>
  );
};

export default connect()(NewPoll);
