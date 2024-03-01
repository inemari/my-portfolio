import { useState, useEffect } from 'react';
import { m } from "framer-motion"
const DEFAULT_MS = 30;

export interface ITypewriterProps {
    text: string | string[];
    speed?: number;
    loop?: boolean;
    random?: number;
    delay?: number;
    cursor?: boolean;
    onFinished?: () => void;
    onStart?: () => void;
    className?: string;
}

export default function AnimatedText({
    text,
    className,
    speed = DEFAULT_MS * 3,
    loop = false,
    random = DEFAULT_MS,
    delay = DEFAULT_MS,
    cursor = true,
    onFinished = () => { },
    onStart = () => { }
}: ITypewriterProps) {

    const [currentStringIndex, setCurrentStringIndex] = useState(0);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [animationCompleted, setAnimationCompleted] = useState(false);

    if (!Array.isArray(text))
        text = [text];

    useEffect(() => {
        if (!animationCompleted) {
            const timeoutId = setTimeout(() => {
                if (currentTextIndex === 0) {
                    onStart();
                }

                if (currentTextIndex < text[currentStringIndex].length) {
                    setCurrentTextIndex(currentTextIndex + 1);
                } else {
                    if (currentStringIndex < text.length - 1) {
                        setTimeout(() => {
                            setCurrentTextIndex(0);
                            setCurrentStringIndex(currentStringIndex + 1);
                        }, delay);
                    } else {
                        if (loop) {
                            setTimeout(() => {
                                setCurrentTextIndex(0);
                                setCurrentStringIndex(0);
                            }, delay);
                        } else {
                            setAnimationCompleted(true);
                            onFinished();
                        }
                    }
                }
            }, speed + (Math.random() * random));

            return () => clearTimeout(timeoutId);
        }
    }, [text, currentStringIndex, currentTextIndex, speed, loop, random, delay, cursor, onFinished, onStart, animationCompleted]);

    return (
        <m.span className={className} variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {}
        }}
            initial="hidden">
            {
                text[currentStringIndex].substring(0, currentTextIndex)
            }
            {cursor && !animationCompleted && (
                <span>▎</span>
            )}
        </m.span>
    );
}











// import React from "react";
// import { motion } from "framer-motion";

// interface AnimatedTextProps {
//     text: string;
// }

// const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
//     const textArray = text.split(" ");

//     return (
//         <div>
//             {textArray.map((el, i) => (
//                 <motion.span
//                     key={i}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{
//                         duration: 0.25,
//                         delay: i / 10,
//                     }}
//                 >
//                     {el}{" "}
//                 </motion.span>
//             ))}
//         </div>
//     );
// };

// export default AnimatedText;
