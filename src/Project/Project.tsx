import '../Project/Project.css';
import Slider from './Slider';
import { brewletteItems, lifeStatsItems } from '../imageSrc';
import Heading from '../Heading/Heading';
import { brewletteHeading, lifeStatsHeading } from '../Heading/headings';

export function Project() {
  return (
    <div className='container'>
      <Heading text={brewletteHeading} />
      <Slider items={brewletteItems} />
      <Heading text={lifeStatsHeading} />
      <Slider items={lifeStatsItems} />
    </div>
  );
}
