import { useState, useEffect } from 'react';

function Count(props) {

  const { init, increment } = props
  const [clickCount, setClickCount] = useState(parseInt(localStorage.getItem("clickCount")))

  // function updateClicksIncrease() {
  //   setClickCount(clickCount + 1)
  // }

  // function updateClicksDecrease() {
  //   setClickCount(clickCount - 1)
  // }

  useEffect(() => {
    document.title = `You clicked ${clickCount} times`;
    localStorage.setItem('clickCount', clickCount);
  }, [clickCount]
  );

  return (
    <div>
      <h3>1:</h3>
      <button onClick={() => setClickCount(clickCount + increment)}>+</button> <button onClick={() => setClickCount(clickCount - increment)}>-</button>
      <br /><br /><span>You clicked {clickCount} times</span>
    </div>
  )
}

export default Count