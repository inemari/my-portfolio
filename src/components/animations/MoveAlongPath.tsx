import { m, useAnimation } from 'framer-motion';


function MoveAlongPath() {
    const controls = useAnimation();

    return (
        <m.path
            d="M10,10 L90,90"
            animate={controls}
            transition={{ duration: 2 }}
        >
            <m.div
                style={{ position: 'absolute' }}
                animate={{ pathLength: [0, 1] }}

            >
                <p>Moving along a path</p>
            </m.div>
        </m.path>
    );
}

export default MoveAlongPath;
