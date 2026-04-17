import React from 'react';
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import Image from 'next/image';

const OrbitApps = () => {
    return (
        <div className="relative left-3 min-h-screen  flex h-[500px] w-full flex-col items-center justify-center overflow-hidden ">
            {/* Grid background with radial fade */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-0 opacity-40"
                style={{
                    backgroundImage: `
      linear-gradient(to right, rgba(148,163,184,0.35) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(148,163,184,0.35) 1px, transparent 1px)
    `,
                    backgroundSize: "32px 32px",
                    maskImage:
                        "radial-gradient(ellipse at center, black 55%, transparent 100%)",
                    WebkitMaskImage:
                        "radial-gradient(ellipse at center, black 55%, transparent 100%)",
                }}
            />


            <span className="pointer-events-none b whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
                Opsell
            </span>

            <OrbitingCircles radius={150} duration={20} delay={10}>
                <div className="flex h-28 w-28 items-center justify-center rounded-2xl">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 48 48"
                        className="h-10 w-10"
                    >
                        <path
                            fill="#FFB300"
                            d="M39.6,39c-4.2,3.1-10.5,5-15.6,5c-7.3,0-13.8-2.9-18.8-7.4c-0.4-0.4,0-0.8,0.4-0.6c5.4,3.1,11.5,4.9,18.3,4.9c4.6,0,10.4-1,15.1-3C39.7,37.7,40.3,38.5,39.6,39z"
                        />
                        <path
                            fill="#37474F"
                            d="M36.9,29.8c-1-1.3-2-2.4-2-4.9v-8.3c0-3.5,0-6.6-2.5-9c-2-1.9-5.3-2.6-7.9-2.6C19,5,14.2,7.2,13,13.4c-0.1,0.7,0.4,1,0.8,1.1l5.1,0.6c0.5,0,0.8-0.5,0.9-1c0.4-2.1,2.1-3.1,4.1-3.1c1.1,0,3.2,0.6,3.2,3v3c-3.2,0-6.6,0-9.4,1.2c-3.3,1.4-5.6,4.3-5.6,8.6c0,5.5,3.4,8.2,7.8,8.2c3.7,0,5.9-0.9,8.8-3.8c0.9,1.4,1.3,2.2,3,3.7c0.4,0.2,0.9,0.2,1.2-0.1l0,0c1-0.9,2.9-2.6,4-3.5C37.4,30.9,37.3,30.3,36.9,29.8z M27,22.1L27,22.1c0,2-0.1,6.9-5,6.9c-3,0-3-3-3-3c0-4.5,4.2-5,8-5V22.1z"
                        />
                    </svg>
                </div>

                <div className="flex h-28 w-28 items-center justify-center rounded-2xl">
                    <Image
                        src="/assets/flipkart.png"
                        alt="Flipkart"
                        width={84}
                        height={84}
                        className="object-contain"
                    />
                </div>
            </OrbitingCircles>

            <OrbitingCircles radius={230} duration={20} delay={10} reverse>
                <div className="flex h-28 w-28 items-center justify-center rounded-2xl">
                    <Image
                        src="/assets/ajio.png"
                        alt="Ajio"
                        width={84}
                        height={84}
                        className="object-contain"
                    />
                </div>
                <div className="flex h-28 w-28 items-center justify-center rounded-2xl">
                    <Image
                        src="/assets/zepto.png"
                        alt="Ajio"
                        width={100}
                        height={100}
                        className="w    "
                    />
                </div>
                <div className="flex h-28 w-28 items-center justify-center rounded-2xl">
                    <Image
                        src="/assets/blinkit.png"
                        alt="Ajio"
                        width={100}
                        height={100}
                        className=" "
                    />
                </div>

                <div className="flex h-28 w-28 items-center justify-center rounded-2xl">
                    <Image
                        src="/assets/meesho1.png"
                        alt="Meesho"
                        width={88}
                        height={88}
                        className="object-contain"
                    />
                </div>

                <div className="flex h-28 w-28 items-center justify-center rounded-2xl">
                    <Image
                        src="/assets/myntra.png"
                        alt="Myntra"
                        width={88}
                        height={88}
                        className="object-contain"
                    />
                </div>
            </OrbitingCircles>
        </div>
    );
};

export default OrbitApps;
