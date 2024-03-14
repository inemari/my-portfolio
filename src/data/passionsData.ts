import { AnimationConfigWithData } from 'lottie-web';
import uxAnimation from '../assets/lottieFiles/uxGif.json';
import codeAnimation from '../assets/lottieFiles/developmentGif.json';
import testAnimation from '../assets/lottieFiles/fPN697U7p5.json';




export interface Passion {
    id: number;
    title: string
    shortDescription: string;
    coverAltText?: string;
    cover: string | AnimationConfigWithData | React.ReactNode;
}

const passions: Passion[] = [
    {
        id: 1,
        cover: codeAnimation as unknown as AnimationConfigWithData,
        title: 'Front-end development',
        shortDescription: '(React, Javascript, Typescript, Bootstrap, Tailwind)',
    },
    {
        id: 2,
        cover: uxAnimation as unknown as AnimationConfigWithData,
        title: `UX/UI Design`,
        shortDescription: '(Figma)',
    },
    {
        id: 3,
        cover: testAnimation as unknown as AnimationConfigWithData,
        title: 'Graphic design',
        shortDescription: '(Canva, Adobe Express)',
    },
    {
        id: 3,
        cover: testAnimation as unknown as AnimationConfigWithData,
        title: 'Photography',
        shortDescription: '(Fashion photography, Adobe Lightroom, Adobe Photoshop)',
    },
];

export default passions;
