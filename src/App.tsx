import React from 'react';
import './App.css';
import { brewletteItems } from './imageSrc';
// import { Project } from './Project/Project';
import Slider from './Project/Slider';

function App() {
  const descriptionText1 =
    'Takes the hassle out of picking a place to go for drinks';
  const descriptionText2 =
    'Created using React.js for front-end and SQL and Node.js for the back-end';
  const descriptionText3 = 'Mobile Forward App';
  return (
    <div className='App'>
      <div className='console-box'>
        <div className='console-screen'>
          <div className='black-slider-container'>
            <Slider items={brewletteItems} />
          </div>
          <div className='background-shaper'></div>
          <div className='black-text-container'>
            <h3 className='title-text'>BREWLETTE</h3>
            <div className='section-back-light'>{'   '}</div>
            <ul className='description-text-list'>
              {descriptionText1.split(' ').map((text) => {
                return (
                  <li className='description-text' key={text}>
                    {text}
                  </li>
                );
              })}
            </ul>
            <ul className='description-text-list'>
              {descriptionText2.split(' ').map((text1) => {
                return (
                  <li className='description-text' key={text1}>
                    {text1}
                  </li>
                );
              })}
            </ul>
            <ul className='description-text-list'>
              {descriptionText3.split(' ').map((text2) => {
                return (
                  <li className='description-text' key={text2}>
                    {text2}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className='console-divider-box-left'></div>
        <div className='console-screen'></div>
        <div className='console-divider-box-right'></div>
        <div className='console-screen'></div>
      </div>
      <div className='console-interface-box'>
        <div className='console-interface-key-pad'>
          <div className='key-pad-box'></div>
          <div className='key-pad-box-2'>
            <div className='key-pad-button'></div>
            <div className='key-pad-button'></div>
            <div className='key-pad-button'></div>
            <div className='key-pad-button'></div>
            <div className='key-pad-button'></div>
            <div className='key-pad-button'></div>
            <div className='key-pad-button'></div>
            <div className='key-pad-button'></div>
            <a
              className='brewlette-git-hub'
              href='https://github.com/BREWLETTE'
            >
              Code
            </a>
            <div className='key-pad-button'></div>
            <div className='key-pad-button'></div>
            <a className='brewlette-site' href='https://www.brewlette.rocks/'>
              Site
            </a>
            <div className='key-pad-button'></div>
            <div className='key-pad-button'></div>
            <div className='key-pad-button'></div>
            <div className='key-pad-button'></div>
            <div className='key-pad-button'></div>
            <div className='key-pad-button'></div>
            <div className='key-pad-button'></div>
            <div className='key-pad-button'></div>
            <div className='key-pad-button'></div>
            <div className='key-pad-button'></div>
            <div className='key-pad-button'></div>
            <div className='key-pad-button'></div>
          </div>
          <div className='key-pad-box-3'></div>
        </div>
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
