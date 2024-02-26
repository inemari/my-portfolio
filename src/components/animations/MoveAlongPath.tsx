import { m, useAnimation } from 'framer-motion';
import React from 'react';

function MoveAlongPath() {
    const controls = useAnimation();

    return (
        <motion.path
            d="M10,10 L90,90"
            animate={controls}
            transition={{ duration: 2 }}
        >
            <motion.div
                style={{ position: 'absolute' }}
                animate={{ pathLength: [0, 1] }}

            >
                <p>Moving along a path</p>
            </motion.div>
        </motion.path>
    );
}

export default MoveAlongPath;
