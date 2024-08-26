import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import backgroundImage from '../../assets/contsol-members.jpeg';

const Hero = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <div ref={ref} className="relative h-[50vh] flex items-center justify-center">
            <AnimatePresence>
                {inView && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.9 }}
                        className="absolute inset-0 z-[-1]"
                    >
                        <Image
                            src={backgroundImage}
                            alt="Background"
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                        />
                        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.div
                className="absolute bottom-0 max-w-3xl left-0 p-12 text-left z-10"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="text-white">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold">
                        ABOUT US
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-lg mt-2 md:mt-4">
                        Hello, we are Cont Solution Development, your digital problem-solving solution.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;
