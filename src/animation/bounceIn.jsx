import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const BounceInDownButton = (props) => {

    const ref = useRef(null);
    const isInview = useInView(ref, { once: true })

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInview) {
            mainControls.start({ opacity: 1, y: 0 });
        }
    }, [isInview])

    return (
        <div ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                exit={{ opacity: 0, y: 50 }}
                animate={mainControls}
                {...props}
            />
        </div>
    )
}