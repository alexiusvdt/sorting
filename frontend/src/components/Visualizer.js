import React, { useState, useEffect } from 'react';
import Bar from './Bar'
import { FaPlay as Play } from 'react-icons/fa';
// import { FaArrowRightLong as Forward } from 'react-icons/fa6';
// import { FaArrowLeftLong as Backward } from 'react-icons/fa6';
import { FaArrowRotateLeft as Reset} from 'react-icons/fa6';

const Visualizer = ({ fetchedData, speed }) => {
  // const [playing, setIsPlaying] = useState(false) <- todo: replay controller/button locking tool?
  const [bars, setCurrentBars] = useState(null)
  const [iteration, setIteration] = useState(null)
  const [delay, setDelay] = useState(null)

  const init = fetchedData.data[0]
  const steps = fetchedData.data[1]
  console.log('init data', init)
  // console.log('steps', steps)
  // console.log('speed', speed)

  useEffect(() => {
    setDelay(speed)
    generateBars(init);
    // warning on this react-hooks/exhaustive-deps ... not sure if concern or not?
  }, []);
  
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

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

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

  const reset = () => {
    // do something to re-render init array
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
      {/* <Stop /> */}
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
        {/* {stopButton} */}
      </div>
    </div>
    <div className='panel'></div>
  </>
    );
  }

export default Visualizer;
