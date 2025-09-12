import { useState, useEffect, useRef } from 'react'
import { featuredProjects } from './projects'
import { BiSolidChevronLeftSquare, BiSolidChevronRightSquare } from "react-icons/bi";
import Image from 'next/image'
import Link from 'next/link'

const FeatureCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const length = featuredProjects.length
    const timerRef = useRef<NodeJS.Timeout | null>(null)
    const MS_CD = 3000

    const startTimer = () => {
        if (timerRef.current) clearTimeout(timerRef.current)
        timerRef.current = setTimeout (() => {
            nextSlide(false)
        }, MS_CD) 
    }

    const nextSlide = (reset: boolean = true) => {
        setCurrentIndex(prev => (prev === length - 1 ? 0 : prev + 1));
        if (reset) startTimer();
    }

    const prevSlide = () => {
        setCurrentIndex(prev => (prev === 0 ? length - 1 : prev - 1));
        startTimer();
    }

    const mapColors = (color: string) => {
        const colors: Record<string,string> = {
            'red-500': 'border-red-500 text-red-500',
            'yellow-500': 'border-yellow-500 text-yellow-500',
            'blue-500': 'border-blue-500 text-blue-500',
            '[#FF4E08]': 'border-[#FF4E08] text-[#FF4E08]',
        }
        return colors[color]
    }

    useEffect(() => {
        startTimer()
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current)
        }
    }, [currentIndex])

    return (
        <div className="w-4/5 h-2/5 max-w-7xl mx-auto flex gap-6 flex-col">
            {/* Carousel Wrapper */}
            <div 
                className="relative overflow-hidden"
            >
                {/* Slides Container */}
                <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${ currentIndex * 100 }%)`}}>
                    {featuredProjects.map((project, index) => (
                        <div key={ index } className="w-full aspect-[5/3] flex-shrink-0 relative">
                            <Image 
                                src={ project.image } 
                                alt={ `Image of ${ project.title }`}
                                className='object-cover'
                                fill
                            />
                        </div>  
                    ))}
                </div>
                <button 
                    onClick={ prevSlide }
                    className='absolute top-1/2 left-0 p-2 md:p-4 text-white bg-black/10 hover:bg-black/30 h-full -translate-y-1/2 text-3xl font-bold'
                >
                    <BiSolidChevronLeftSquare />
                </button>
                <button 
                    onClick={ () => nextSlide() }
                    className='absolute top-1/2 right-0 p-4 h-full bg-black/10 hover:bg-black/30 text-white hover:bg-opacity-50 -translate-y-1/2 text-3xl font-bold'
                >
                    <BiSolidChevronRightSquare />
                </button>
            </div>
            {/* Shortcut Buttons */}
            <div className="flex justify-center gap-2">
                { featuredProjects.map((_, index) => (
                    <button
                        key={ index }
                        onClick={() => {
                            setCurrentIndex(index);
                            startTimer();
                        }}
                        className={`w-7 h-7 border-2 border-black text-center rounded-md ${ currentIndex === index ? 'bg-white text-black': 'bg-black text-white' }`}
                    >
                        { index + 1 }
                    </button>
                ))}
            </div>
            <div className="flex flex-col justify-center items-center gap-6">
                <h1 className='text-4xl font-bold'>{featuredProjects[currentIndex].title}</h1>
                <div className="flex flex-col text-center gap-2">
                    <h3 className="text-lg font-semibold">Team / Department:</h3>
                    <h3 
                        className={`text-xl px-5 py-1 rounded-full border-2 ${ mapColors(featuredProjects[currentIndex].color) }`} 
                        style={{ borderColor: featuredProjects[currentIndex].color }}> 
                            { featuredProjects[currentIndex].department }
                    </h3>
                </div>
                <div className="sm:h-[300px] lg:h-[220px] flex flex-col gap-5 items-center justify-between text-left">
                    <p className='text-xl'>{ featuredProjects[currentIndex].description }</p>
                    { featuredProjects[currentIndex].link && (                    
                        <Link
                            href={ featuredProjects[currentIndex].link }
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className={`border-2 border-black dark:border-white bg-black text-white hover:bg-white hover:text-black px-4 py-3 rounded-md`}>
                                Learn More
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export { FeatureCarousel }