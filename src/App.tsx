import './App.css';
import { brewletteItems, lifeStatsItems } from './imageSrc';
import Slider from './Project/Slider';
import {
  descriptionText1,
  descriptionText2,
  descriptionText3,
  descriptionText4,
  descriptionText5,
  descriptionText6,
} from './Description/descriptions';

function App() {
  return (
    <div className='App'>
      <div className='over-head-pannel'></div>
      <div className='console-box'>
        <div className='console-screen'>
          <div className='black-slider-container'>
            <Slider items={brewletteItems} />
          </div>
          <div className='background-shaper'></div>
          <div className='black-text-container'>
            <h3 className='title-text'>
              BREWLETTE
              <div className='circle-red-object'></div>
            </h3>
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
        <div className='console-screen'>
          <div className='black-text-container'>
            <h3 className='title-text'>
              {/* need to add css to this */}
              <div className='circle-blue-object'></div>
              LIFE STATS
            </h3>
            <div className='section-back-light'>{'   '}</div>
            <ul className='description-text-list'>
              {descriptionText4.split(' ').map((text) => {
                return (
                  <li className='description-text' key={Math.random()}>
                    {text}
                  </li>
                );
              })}
            </ul>
            <ul className='description-text-list'>
              {descriptionText5.split(' ').map((text1) => {
                return (
                  <li className='description-text' key={Math.random()}>
                    {text1}
                  </li>
                );
              })}
            </ul>
            <ul className='description-text-list'>
              {descriptionText6.split(' ').map((text2) => {
                return (
                  <li className='description-text' key={Math.random()}>
                    {text2}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='background-shaper-right'></div>
          <div className='black-slider-container'>
            <Slider items={lifeStatsItems} />
          </div>
        </div>
      </div>
      <div className='console-interface-box'>
        <div className='console-interface-key-pad'>
          <div className='key-pad-box'>
            <div className='key-pad-button-vertical-red'></div>
            <div className='key-pad-button-vertical'></div>
            <div className='key-pad-button-vertical'></div>
            <div className='key-pad-button-vertical'></div>
            <div className='key-pad-button-vertical-red'></div>
            <div className='key-pad-button-vertical'></div>
            <div className='key-pad-button-vertical'></div>
            <div className='key-pad-button-vertical'></div>
            <div className='key-pad-button-vertical-red'></div>
            <div className='key-pad-button-vertical'></div>
            <div className='key-pad-button-vertical'></div>
            <div className='key-pad-button-vertical'></div>
          </div>
          <div className='key-pad-box-2'>
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
          <div className='key-pad-box-3'>
            <a className='brewlette-site' href='https://www.brewlette.rocks/'>
              Website
            </a>
            <a
              className='brewlette-git-hub'
              href='https://github.com/BREWLETTE'
            >
              Code
            </a>
          </div>
        </div>
        <div className='console-interface-divider-box-left'></div>
        <div className='console-interface-key-pad'></div>
        <div className='console-interface-divider-box-right'></div>
        <div className='console-interface-key-pad'>
          <div className='key-pad-box-3'>
            <a
              className='life-stats-site'
              href='https://pedantic-pasteur-453987.netlify.app'
            >
              Website
            </a>
            <a
              className='life-stats-git-hub'
              href='https://github.com/Life-Stats/Life-stats'
            >
              Code
            </a>
          </div>
          <div className='key-pad-box-2-right'>
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
          <div className='key-pad-box-right'>
            <div className='key-pad-button-vertical-blue'></div>
            <div className='key-pad-button-vertical'></div>
            <div className='key-pad-button-vertical'></div>
            <div className='key-pad-button-vertical'></div>
            <div className='key-pad-button-vertical-blue'></div>
            <div className='key-pad-button-vertical'></div>
            <div className='key-pad-button-vertical'></div>
            <div className='key-pad-button-vertical'></div>
            <div className='key-pad-button-vertical-blue'></div>
            <div className='key-pad-button-vertical'></div>
            <div className='key-pad-button-vertical'></div>
            <div className='key-pad-button-vertical'></div>
          </div>
        </div>
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
