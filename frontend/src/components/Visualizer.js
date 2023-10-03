import React, { useState, useEffect } from 'react';
import Bar from './Bar'
import { FaPlay as Play } from 'react-icons/fa';
import { FaStop as Stop } from 'react-icons/fa';
import { FaArrowRotateLeft as Reset} from 'react-icons/fa6';

const Visualizer = ({ fetchedData }) => {
  // const [playing, setIsPlaying] = useState(false) <- todo: replay controller/button locking tool?
  const [bars, setCurrentBars] = useState(null)
  const [iteration, setIteration] = useState(null)
  const [delay, setDelay] = useState(null)
  const [speed, setSpeed] = useState(500)

  const init = fetchedData.data[0]
  const steps = fetchedData.data[1]

  useEffect(() => {
    setDelay(speed)
    generateBars(init);
    // warning on this react-hooks/exhaustive-deps ... not sure if concern or not?
  }, []);
  
  /**
  * @function
  * calls @generateBars on each index of steps
  * sets iterator state for display to user
  * calls @sleep so there's visible delay between bar renders
  */
  const start = async () => {
    let i = 0

    while (i < steps.length) {
      console.log("start executed", i)
      generateBars(steps[i])
      setIteration(i)
      await sleep(delay)
      i++
    }
  }  

  /**
  * @function
  * returns a promise that resolves the timeout
  */
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
  * @function
  * @param {array} 
  * takes array and renders the sub-elements as bars of given color
  * sets the currentBar state for actual display to user
  * useEffect calls this on init render
  */
  async function generateBars(array) {
    let color = 1;

    let bars = array.map((value, index) => (
      <Bar 
        key={index}
        index={index}
        length={value}
        color={color}
        />
      ));
      setCurrentBars(bars)
  }
  
  const playButton = (
    <button className='controller' onClick={start}>
      <Play />
    </button>
  );
  
  /**
  * @function
  * resets state
  * initializes initial state again
  * todo: !!currently doesn't stop the while loop!!
  */
  const reset = () => {
    setCurrentBars(null)
    setIteration(null)
    generateBars(init)
  }
  
  const resetButton = (
    <button className='controller' onClick={reset}>
      <Reset />
    </button>
  )

  const stop = () => {
    // do something to stop the loop
  }

  const stopButton = (
    <button className='controller' onClick={stop}>
      <Stop />
    </button>
  )
  
  return (
  <>
  {/* todo: div needs to be limited to page width, currently will spill out like crazy with large arr sizes */}
    <div className='frame'>
      <div className='barsDiv container card'>{bars}</div>
    </div>
    <div><p>Steps taken: {iteration}</p></div>
    <div className='control-panel'>
      <div className='control-buttons'>
        <p>start the sort!</p>
        {playButton}
        <p>reset sort state</p>
        {resetButton}
        <p>stop sort</p>
        {stopButton}
        <label className="label">Speed:</label>
          <select
            defaultValue={500}
            onChange={(e) => setSpeed(e.target.value)}
            >
            <option value={750}>slow</option>
            <option value={500}>standard</option>
            <option value={200}>fast</option>
          </select>
      </div>
    </div>
    <div className='panel'></div>
  </>
    );
  }

export default Visualizer;
