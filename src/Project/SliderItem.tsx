import './Slider.css';

export type Props = {
  imageSrc: string;
  imageAlt: string;
};

function SliderItem({ imageSrc, imageAlt }: Props) {
  return (
    <li className='slider-item'>
      <img src={imageSrc} alt={imageAlt} className='slider-image'></img>
    </li>
  );
}

export default SliderItem;
