import testAnimation from '../assets/lottieFiles/Animation - 1707897135994.json';
import codeAnimation from '../assets/lottieFiles/developmentGif.json';
import uxAnimation from '../assets/lottieFiles/ux-animation.json';
import CardItem from './CardItem';



interface Passion extends CardItem {
    extravalue?: string;
}

const passions: Passion[] = [
    {
        id: 1,
        cover: codeAnimation,
        title: 'Front-end development',
        shortDescription: '(React, Javascript, Typescript, Bootstrap, Tailwind)',
    },
    {
        id: 2,
        cover: uxAnimation,
        title: 'UX/UI Design',
        shortDescription: '(Figma)',
    },
    {
        id: 3,
        cover: testAnimation,
        title: 'Graphic design',
        shortDescription: '(React, Javascript, Typescript, Bootstrap, Tailwind)',
    },
];

export default passions;
