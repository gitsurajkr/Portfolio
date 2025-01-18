import React from 'react'
import { motion } from 'framer-motion'
const LanguageProgress = () => {

    const languages = [
        { language: 'C++', proficiency: 50, bgColor: '#306998' },
        { language: 'Java', proficiency: 75, bgColor: '#a8b9cc' },
        { language: 'JavaScript', proficiency: 80, bgColor: '#F7DF1E' },
        { language: 'TypeScript', proficiency: 75, bgColor: '#007ACC' },
        { language: 'MongoDB', proficiency: 70, bgColor: '#4DB33D' },
        {language: 'Postgres', proficiency: 70, bgColor: '#FFCA28'},
        { language: 'Express', proficiency: 75, bgColor: '#68a063' },
        { language: 'React', proficiency: 90, bgColor: '#61DAFB' },
        { language: 'Node', proficiency: 73, bgColor: '#3C873A' },
        { language: 'Next.Js', proficiency: 50, bgColor: '#000000' },
        {language: 'Redux', proficiency: 90, bgColor: '#764ABC' },
        {language: 'Hono', proficiency: 70, bgColor: '#ff0039' },
        {language: 'Docker', proficiency: 70, bgColor: '#E10098' },

        ]

    return (
        <div className='max-w-md mb-8 max-xl:mx-auto '>
            <h4 className='bold-28 mb-4 max-xl:text-center'>Language / Framework Proficiency</h4>
            <div className='flexStart flex-wrap max-xl:flexCenter'>
                {languages.map((lang, index) => (
                    <CircularProgress
                        key={index}
                        language={lang.language}
                        proficiency={lang.proficiency}
                        bgColor={lang.bgColor}

                    />
                ))}
            </div>
        </div>
    )
}


const CircularProgress = ({ language, proficiency, bgColor }) => {

    const radius = 20;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference * (1 - proficiency / 100)


    return (
        <div>
            <svg className='w-24 h-24 mr-1' viewBox='0 0 50 50'>

                <circle
                    cx={'25'}
                    cy={'25'}
                    r={radius}
                    fill='none'
                    stroke='#e0e0e0'
                    strokeWidth={'7'}
                />
                <motion.circle
                    cx={'25'}
                    cy={'25'}
                    r={radius}
                    fill='none'
                    stroke={bgColor}
                    strokeWidth={"4"}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap='round'
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset: strokeDashoffset }}
                    transition={{ duration: 1 }}

                />
                <text
                    x={'50%'}
                    y={'50%'}
                    textAnchor='middle'
                    dominantBaseline='middle'
                    fill='#333'
                    fontSize={'6px'}
                    fontWeight={'bold'}
                >
                    {language}
                </text>
            </svg>
        </div>
    )
}

export default LanguageProgress