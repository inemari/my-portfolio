import { AnimationConfigWithData } from 'lottie-web';
import testAnimation from '../assets/lottieFiles/Animation-1707897135994.json';
import codeAnimation from '../assets/lottieFiles/developmentGif.json';
import uxAnimation from '../assets/lottieFiles/ux-animation.json';
import CardItem from './CardItem';



// interface Passion extends CardItem {
//     extravalue?: string;
// }

const passions: CardItem[] = [
    {
        id: 1,
        cover: codeAnimation as unknown as AnimationConfigWithData,
        title: 'Front-end development',
        shortDescription: '(React, Javascript, Typescript, Bootstrap, Tailwind)',
    },
    {
        id: 2,
        cover: uxAnimation as unknown as AnimationConfigWithData,
        title: 'UX/UI Design',
        shortDescription: '(Figma)',
    },
    {
        id: 3,
        cover: testAnimation as unknown as AnimationConfigWithData,
        title: 'Graphic design',
        shortDescription: '(React, Javascript, Typescript, Bootstrap, Tailwind)',
    },
];

export default passions;
