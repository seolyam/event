import { useState, useEffect, useRef } from 'react'
import { featuredProjects } from './projects'
import Image from 'next/image'
import { BiSolidChevronLeftSquare, BiSolidChevronRightSquare } from "react-icons/bi";
import Link from 'next/link'

const FeatureCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const length = featuredProjects.length
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    const nextSlide = () => setCurrentIndex(prev => (prev === length - 1 ? 0 : prev + 1));
    const prevSlide = () => setCurrentIndex(prev => (prev === 0 ? length - 1 : prev - 1));
    const mapColors = (color: string) => {
        const colors: Record<string, string> = {
            'red-500': 'bg-red-500',
            'yellow-500': 'bg-yellow-500',
            'blue-500': 'bg-blue-500',
            '[#FF4E08]': 'bg-[#FF4E08]',
        }
        return colors[color]
    }

    const startInterval = () => {
        intervalRef.current = setInterval(nextSlide, 5000)
    }
    const clearSlideInterval = () => {
        if(intervalRef.current) clearInterval(intervalRef.current)
    }

    useEffect(() => {
        startInterval()
        return () => clearSlideInterval()
    }, [])
    
    return (
        <div className="h-2/5 max-w-7xl mx-auto flex gap-6 flex-col">
            {/* Carousel Wrapper */}
            <div 
                className="relative overflow-hidden"
                onMouseEnter={ clearSlideInterval }
                onMouseLeave={ startInterval }
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
                    onClick={ nextSlide }
                    className='absolute top-1/2 right-0 p-2 md:p-4 h-full bg-black/10 hover:bg-black/30 text-white hover:bg-opacity-50 -translate-y-1/2 text-3xl font-bold'
                >
                    <BiSolidChevronRightSquare />
                </button>
            </div>
            {/* Shortcut Buttons */}
            <div className="flex justify-center gap-2">
                {featuredProjects.map((_, index) => (
                    <button
                        key={ index }
                        onClick={() => setCurrentIndex(index)}
                        className={`w-7 h-7 border-2 border-black text-center rounded-md ${currentIndex === index ? 'bg-white text-black': 'bg-black text-white'}`}
                    >
                        { index + 1 }
                    </button>
                ))}
            </div>
            <div className="flex flex-col justify-center items-center gap-6">
                <h1 className='text-4xl font-bold'>{featuredProjects[currentIndex].title}</h1>
                <div className="flex flex-col text-center">
                    <h3 className="text-lg">Team / Department:</h3>
                    <h3 className={`text-xl text-white px-5 py-3 rounded-full ${mapColors(featuredProjects[currentIndex].color)}`} style={{ backgroundColor: featuredProjects[currentIndex].color }}> {featuredProjects[currentIndex].department}</h3>
                </div>
                <p className='text-lg'>{featuredProjects[currentIndex].description}</p>
                {featuredProjects[currentIndex].link !== "" && (                    
                    <Link
                        href={featuredProjects[currentIndex].link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className={`bg-black text-white hover:bg-white hover:text-black border-2 border-black px-4 py-3 rounded-md `}>
                            Learn More
                        </button>
                    </Link>
                )}
            </div>
        </div>
    )
}

export { FeatureCarousel }