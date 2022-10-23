// Import libraries
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreeting } from '../redux/reducer';

// Greeting function
const Greeting = () => {
  // dispatcher
  const dispatch = useDispatch();

  // state .greeting.
  const greeting = useSelector((state) => state.greetings);
  useEffect(() => {
    dispatch(getGreeting());
  }, []);

  // show message.
  return (
    <div>
      <div>
        <h1>{greeting}</h1>
      </div>
    </div>
  );
};

export default Greeting;
