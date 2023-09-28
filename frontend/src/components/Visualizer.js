import React, { useEffect, useRef } from 'react';
import Bar from './Bar'
import { FaPlay as Play } from 'react-icons/fa';
import { FaArrowRightLong as Forward } from 'react-icons/fa6';
import { FaArrowLeftLong as Backward } from 'react-icons/fa6';
import { FaArrowRotateLeft as RotateLeft} from 'react-icons/fa6';

const Visualizer = ({ fetchedData }) => {
  const init = fetchedData.data[0]
  const steps = fetchedData.data[1]
  console.log('init data', init)
  console.log('steps', steps)

  // const start = () => {
  //   let i = 0
  //   while (i < data.length) {
  //     // render the bars
  //   }
  // }  

  // this needs to go in a loop, but still have its output readable by the div
  // maybe put in a useEffect so first loop renders init, then on play it can cycle through steps?
  // let length = steps[1].length
  let bars = steps.map((index, length) => (
    <Bar
      key={index}
      index={index}
      length={length}
    />
  ));

  // let playButton = (
  //   <button className='controller' onClick={start}>
  //     <Play />
  //   </button>
  // );

  return (
  <>
    <div className='frame'>
      <div className='barsDiv container card'>{bars}</div>
    </div>
    <div className='control-panel'>
      <p>control buttons go here</p>
      {/* <div className='control-buttons'>
        <button className='controller' onClick={this.previousStep}>
          <Backward />
        </button>
        {playButton}
        <button className='controller' onClick={this.nextStep}>
          <Forward />
        </button> 
      </div> */}
    </div>
    <div className='panel'></div>
  </>
    );
  }

export default Visualizer;
