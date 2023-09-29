import React, { useState, useEffect, useRef } from 'react';
import Bar from './Bar'
import { FaPlay as Play } from 'react-icons/fa';
// import { FaArrowRightLong as Forward } from 'react-icons/fa6';
// import { FaArrowLeftLong as Backward } from 'react-icons/fa6';
// import { FaArrowRotateLeft as RotateLeft} from 'react-icons/fa6';

const Visualizer = ({ fetchedData }) => {
  // useful for locking controls or conditional display of reset button (rotateleft)
  const [playing, setIsPlaying] = useState(false)
  const [bars, setCurrentBars] = useState(null)

  // destructure data
  const init = fetchedData.data[0]
  const steps = fetchedData.data[1]
  console.log('init data', init)
  console.log('steps', steps)

  useEffect(() => {
    generateBars(init);
  }, []);
  
  const start = () => {
    let i = 0
    while (i < steps.length) {
      console.log("start executed", i)
      // generateBars(steps)
      i++
    }
  }  

  function generateBars(array) {
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

  // let color = 1;
  // let bars = init.map((value, index) => (
  //   <Bar 
  //     key={index}
  //     index={index}
  //     length={value}
  //     color={color}
  //     />
  //   ));
  
  let playButton = (
    <button className='controller' onClick={start}>
      <Play />
    </button>
  );

  return (
  <>
  {/* todo: div needs to be limited to page width, currently will spill out like crazy with large arr sizes */}
    <div className='frame'>
      <div className='barsDiv container card'>{bars}</div>
    </div>
    <div className='control-panel'>
      <div className='control-buttons'>
        <h3>start the sort!</h3>
        {playButton}
      </div>
    </div>
    <div className='panel'></div>
  </>
    );
  }

export default Visualizer;
