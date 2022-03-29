import React from 'react';
import './App.css';
import { brewletteItems } from './imageSrc';
// import { Project } from './Project/Project';
import Slider from './Project/Slider';

function App() {
  return (
    <div className='App'>
      <div className='console-box'>
        <div className='console-screen'>
          <div className='black-slider-container'>
            <Slider items={brewletteItems} />
          </div>
          <div className='background-shaper'></div>
          <div className='black-text-container'>
            <h3 className='title-text'>Brewlette</h3>
            <div className='section-back-light'>
              {'   '}
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              </span>
            </div>
          </div>
        </div>
        <div className='console-divider-box-left'></div>
        <div className='console-screen'></div>
        <div className='console-divider-box-right'></div>
        <div className='console-screen'></div>
      </div>
      <div className='console-interface-box'>
        <div className='console-interface-key-pad'></div>
        <div className='console-interface-divider-box-left'></div>
        <div className='console-interface-key-pad'></div>
        <div className='console-interface-divider-box-right'></div>
        <div className='console-interface-key-pad'></div>
      </div>
      <div className='back-wall'>
        <div className='bottom-detail-gap-box-left'></div>
        <div className='bottom-detail-gap-box'></div>
        <div className='bottom-detail-gap-box-right'></div>
        <div className='bottom-detail-gap-box-left'></div>
        <div className='bottom-detail-gap-box'></div>
        <div className='bottom-detail-gap-box-right'></div>
        <div className='bottom-detail-gap-box-left'></div>
        <div className='bottom-detail-gap-box'></div>
        <div className='bottom-detail-gap-box-right'></div>
      </div>
      {/* <Project /> */}
      {/* <AboutMe /> */}
    </div>
  );
}

export default App;
