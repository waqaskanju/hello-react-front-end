import React from 'react';

function Greetings(props) {
  return (
    <div>
      <h1> These Messages are from the API </h1>

      {props.greetings.map((greeting) => {
        if (greeting.id === Math.floor(Math.random() * 8)) {
          return (
            <div key={greeting.id}>
              <h2>
                {greeting.msg}
                {' '}
              </h2>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Greetings;
