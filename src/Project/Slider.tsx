import { SliderItemType } from '../types';
import './Slider.css';
import SliderItem from './SliderItem';

export type Props = {
  items: Array<SliderItemType>;
};

function Slider({ items }: Props) {
  return (
    <div className='slider-container'>
      <ul className='slider-list'>
        {items.map((item, idx) => (
          <SliderItem key={idx} {...item} />
        ))}
      </ul>
    </div>
  );
}

export default Slider;
