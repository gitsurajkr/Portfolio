import {
    HiHome,
    HiUser,
    HiSquare2Stack,
    HiEnvelope,
    HiChatBubbleBottomCenterText
} from "react-icons/hi2"

import { FaHtml5, FaJs, FaReact, FaFigma } from "react-icons/fa"
import {  SiFramer, SiNextdotjs, SiTypescript } from "react-icons/si"
import { RiTailwindCssFill } from "react-icons/ri";

export const LINKS = [
    {
        title: 'home',
        icon: <HiHome />,
        path: '/'
    }
    ,
    {
        title: 'about',
        icon: <HiUser />,
        path: '/about'
    }
    ,
    {
        title: 'work',
        icon: <HiSquare2Stack />,
        path: '/work'
    }
    ,
    {
        title: 'testimonials',
        icon: <HiChatBubbleBottomCenterText />,
        path: '/testimonials'
    }
    ,
    {
        title: 'contact',
        icon: <HiEnvelope />,
        path: '/contact'
    }

]

export const ACCORDION = [
    {
        question: "What sets your approach apart from others?",
        answer: "My passion for work and constant exploration of new technologies make my approach unique."
    },
    {
        question: "What inspires you to keep learning and growing?",
        answer: "My curiosity, love for technology, and encouragement from my close circle inspire me to stay updated and continuously grow."
    },
    {
        question: "How do you stay updated with the latest trends in technology?",
        answer: "I follow platforms like Reddit and X, and have regular discussions with tech-savvy friends to stay ahead."
    },
    {
        question: "Who has influenced your journey the most?",
        answer: "My elder brother and one of my best friends have been my biggest supporters, constantly pushing me to achieve my best."
    },
    {
        question: "How do you approach challenges in your work?",
        answer: "I tackle challenges with positivity, leveraging support from some senior developer and fresh ideas from tech discussions."
    }
]

export const aboutData = [
    {
        title: 'expertise',
        info: [
            {
                title: 'Web Development',
                icons: [
                    <FaHtml5 key="html5" />,
                    <RiTailwindCssFill key="css3" />,
                    <FaJs key="js" />,
                    <FaReact key="react" />,
                    <SiNextdotjs key="nextjs" />,
                    <SiFramer key="framer" />,
                    <SiTypescript key="typescript" />
                ],
            },
            {
                title: 'API Integration',
                icons: ["🔗 📡 🌐" ]
            },
            {
                title: "Secure Coding Practices",
                icons: ["🔐 🛡️ 🧩" ]
            },
            {
                title: "Problem Solving",
                icons: ["🧠 🤖 📐 "] 
            }

        ]
    },
    {
        title: 'experience',
        info: [
            // {
            //     title: 'UI/UX Designer - XYZ Company',
            //     year: '2012-2023'

            // },
            

        ],
    },
    {
        title: 'education',
        info: [
            {
                title: 'BTech CSE - Galgotias University',
                year: '2023-2027'
            },
            // {
            //     title: 'Front End Development - ABC university ,USA abcd' ,
            //     year: '2009'
            // },
            // {
            //     title: 'Full Stack Development - ABC university ,USA',
            //     year: '2011'
            // },
        ]
    }
]

export const workData = [
    {
        title: 'FrontEnd',
        projects: [
            {
                title: 'Website',
                url: '/img1.png',
            },
            {
                title: 'Website',
                url: '/img2.png',
            },
            {
                title: 'Application',
                url: '/img3.png',
            },
            {
                title: 'Application',
                url: '/img4.png',
            }

        ]
    },
    {
        title: 'BackEnd',
        projects: [
            {
                title: 'Website',
                url: '/img4.png',
            },
            {
                title: 'Website',
                url: '/img3.png',
            },
            {
                title: 'Application',
                url: '/img1.png',
            },
            {
                title: 'Application',
                url: '/img5.png',
            }

        ]
    },
    {
        title: 'Full Stack',
        projects: [
            {
                title: 'Website',
                url: '/img5.png',
            },
            {
                title: 'Website',
                url: '/img1.png',
            },
            {
                title: 'Application',
                url: '/img2.png',
            },
            {
                title: 'Application',
                url: '/img3.png',
            }

        ]
    },

]

export const testimonialData = [
    {
        url: '/person-1.jpg',
        name: 'Olovia Andreson',
        position: 'Customer',
        message: 'Lorem ipsum dolor, sit amet consectetur adipisicing eli dolore tenetur fugiat ratione iusto libero numquam non.'
    },
    {
        url: '/person-2.jpg',
        name: 'Olovia Andreson',
        position: 'Customer',
        message: 'Lorem ipsum dolor, sit amet consectetur adipisicing eli dolore tenetur fugiat ratione iusto libero numquam non.'
    },
    {
        url: '/person-3.jpg',
        name: 'Olovia Andreson',
        position: 'Customer',
        message: 'Lorem ipsum dolor, sit amet consectetur adipisicing eli dolore tenetur fugiat ratione iusto libero numquam non.'
    },
    {
        url: '/person-4.jpg',
        name: 'Olovia Andreson',
        position: 'Customer',
        message: 'Lorem ipsum dolor, sit amet consectetur adipisicing eli dolore tenetur fugiat ratione iusto libero numquam non.'
    },

]