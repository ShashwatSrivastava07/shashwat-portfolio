import React from 'react'
import HeadingGrade from './HeadingGrade'
import { Timeline } from "./ui/timeline";
import Image from "next/image";

import mac from '/Public/Assets/macpage.png'

import tka1 from '/Public/Assets/tka-exp/tka-img-1.png'
import tka2 from '/Public/Assets/tka-exp/tka-img-2.png'
import tka3 from '/Public/Assets/tka-exp/tka-img-3.png'
import tka4 from '/Public/Assets/tka-exp/tka-img-4.png'

import tata1 from '/Public/Assets/tata-nexarc-exp/img-tata-1.png'
import tata2 from '/Public/Assets/tata-nexarc-exp/img-tata-2.png'
import tata3 from '/Public/Assets/tata-nexarc-exp/img-tata-3.png'

import perso from '/Public/Assets/personal/perso-img-1.png'
import perso2 from '/Public/Assets/personal/perso-img-2.png'
import perso3 from '/Public/Assets/personal/perso-img-3.png'


function Exp() {


    const data = [
        {
            title: "2023-Present",
            content: (
                <div>
                    <p className="text-neutral-200 text-xl md:text-2xl font-normal mb-8">
                        The Knowledge Academy - Front End Developer
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Image
                            src={tka1}
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-44 tb:h-[19rem] lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src={tka2}
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-44 tb:h-[19rem] lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src={tka3}
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-44 tb:h-[19rem] lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src={tka4}
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-44 tb:h-[19rem] lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "2022-2023",
            content: (
                <div>
                    <p className="text-neutral-200 text-xl md:text-2xl font-normal mb-8">
                        TATA Nexarc - UI Developer
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Image
                            src={tata1}
                            alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-44 tb:h-[19rem] lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src={tata2}
                            alt="feature template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-44 tb:h-[19rem] lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src={tata3}
                            alt="bento template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-44 tb:h-[19rem] lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "2022-Present",
            content: (
                <div>
                    <p className="text-neutral-200 text-xl md:text-2xl font-normal mb-4">
                        Since 2022, I have developed and deployed several key personal projects, building cutting-edge components and features while continuously enhancing functionality and user experience.

                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Image
                            src={perso}
                            alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-44 tb:h-[19rem] lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src={perso2}
                            alt="feature template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-44 tb:h-[19rem] lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src={perso3}
                            alt="bento template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-44 tb:h-[19rem] lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src={mac}
                            alt="cards template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-44 tb:h-[19rem] lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
    ];

    return (
        <>
            <section id="exp-section">

                <HeadingGrade headingTxt="Journey So Far" />

                <div className="w-full">
                    <Timeline data={data} />
                </div>
                
            </section>

        </>
    )
}

export default Exp
