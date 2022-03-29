import '../Project/Project.css';
import Slider from './Slider';
import { brewletteItems, lifeStatsItems } from '../imageSrc';
import Heading from '../Heading/Heading';
import { Description } from '../Description/Description';
import {
  brewletteDescription,
  lifeStatsDescription,
} from '../Description/descriptions';
import { brewletteHeading, lifeStatsHeading } from '../Heading/headings';

export function Project() {
  return (
    <div className='container'>
      <Heading text={brewletteHeading} />
      <Description text={brewletteDescription} />
      <Slider items={brewletteItems} />
      <Heading text={lifeStatsHeading} />
      <Description text={lifeStatsDescription} />
      <Slider items={lifeStatsItems} />
    </div>
  );
}
