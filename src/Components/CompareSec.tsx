import React from 'react'
import { Compare } from "./ui/compare";

function CompareSec() {


    return (
        <>

            <div className="my-8 w-3/4 h-[60vh] px-1 md:px-8 flex items-center justify-center [perspective:800px] [transform-style:preserve-3d]">
                <div
                    style={{
                        transform: "rotateX(15deg) translateZ(80px)",
                    }}
                    className="p-1 md:p-4 border rounded-3xl bg-neutral-900 border-neutral-800 mx-auto w-3/4 h-1/2 md:h-3/4"
                >
                    <Compare
                        firstImage="https://assets.aceternity.com/code-solution.png"
                        secondImage="https://assets.aceternity.com/linear-dark.png"
                        firstImageClassName="object-cover object-left-top w-full"
                        secondImageClassname="object-cover object-left-top w-full"
                        className="w-full h-full rounded-[22px] md:rounded-lg"
                        slideMode="hover"
                        autoplay={true}
                    />
                </div>
            </div>
            
        </>
    )
}

export default CompareSec
