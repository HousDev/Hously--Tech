// src/components/TimelineDot.tsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const TimelineDot = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const getPointOnBezierCurve = (
        p0: number,
        p1: number,
        p2: number,
        p3: number,
        t: number
    ) => {
        const u = 1 - t;
        return (
            u * u * u * p0 +
            3 * u * u * t * p1 +
            3 * u * t * t * p2 +
            t * t * t * p3
        );
    };

    const getPosition = (progress: number) => {
        if (progress <= 0.5) {
            const t = progress * 2;
            return {
                x: getPointOnBezierCurve(800, 780, 350, 400, t),
                y: getPointOnBezierCurve(100, 200, 500, 650, t),
            };
        } else {
            const t = (progress - 0.5) * 2;
            return {
                x: getPointOnBezierCurve(400, 450, 750, 800, t),
                y: getPointOnBezierCurve(650, 800, 950, 1100, t),
            };
        }
    };

    const pathProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <div ref={containerRef} className="absolute inset-0 pointer-events-none">
            <svg
                viewBox="0 0 1200 1200"
                className="absolute inset-0 w-full h-full hidden sm:block"
                fill="none"
                preserveAspectRatio="none"
            >
                <path
                    d="M 800 100 C 780 200, 350 500, 400 650 C 450 800, 750 950, 800 1100"
                    stroke="#d1d5db"
                    strokeWidth="3"
                    strokeDasharray="4 8"
                    fill="none"
                />

                <motion.path
                    d="M 800 100 C 780 200, 350 500, 400 650 C 450 800, 750 950, 800 1100"
                    stroke="#ffd801"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="8 10"
                    style={{ pathLength: pathProgress }}
                />

                <motion.circle
                    r="5"
                    fill="#0076d8"
                    cx={useTransform(pathProgress, (p) => getPosition(p).x)}
                    cy={useTransform(pathProgress, (p) => getPosition(p).y)}
                />
            </svg>
        </div>
    );
};

export default TimelineDot;
