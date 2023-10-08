import { useEffect, useRef } from 'react'
import './carousel.css'

type CarouselProps = {
    items: {
        img: string,
        imgNum: number,
        title: string
    }[],
    leftScrollButton: React.RefObject<HTMLDivElement>,
    rightScrollButton: React.RefObject<HTMLDivElement>,
}

export const Carousel = (props: CarouselProps) => {
    const { items, leftScrollButton, rightScrollButton } = props;
    const carouselRef = useRef<HTMLDivElement>(null)
    const firstItemRef = useRef<HTMLDivElement>(null)


    useEffect(() => {

        const handleLeft = () => {
            const firstImgWidth = firstItemRef.current === null ? 0 : firstItemRef.current.clientWidth + 14
            if (carouselRef.current) carouselRef.current.scrollLeft += -firstImgWidth * 4
            tog()
        }

        const tog = () => {
            setTimeout(() => {
                let scrollWidth = carouselRef.current!.scrollWidth - carouselRef.current!.clientWidth
                console.log(scrollWidth)
                console.log(carouselRef.current?.scrollLeft!)
                if (carouselRef.current?.scrollLeft != null) {
                    if (carouselRef.current?.scrollLeft! == scrollWidth) {
                        rightScrollButton.current?.setAttribute("active", "")
                    } else {
                        rightScrollButton.current?.setAttribute("active", "active")
                    }
                    if (carouselRef.current?.scrollLeft! == 0) {
                        leftScrollButton.current?.setAttribute("active", "")
                    } else {
                        leftScrollButton.current?.setAttribute("active", "active")
                    }
                }
            }, 700);
        }

        leftScrollButton.current?.addEventListener("click", handleLeft)

        const handleRight = () => {
            const firstImgWidth = firstItemRef.current === null ? 0 : firstItemRef.current.clientWidth + 14
            if (carouselRef.current) carouselRef.current.scrollLeft += firstImgWidth * 4
            tog()
        }

        rightScrollButton.current?.addEventListener("click", handleRight)

        return () => {
            leftScrollButton.current?.removeEventListener('click', handleLeft)
            rightScrollButton.current?.removeEventListener('click', handleRight)
        }
    }, [carouselRef, firstItemRef, leftScrollButton, rightScrollButton])

    return (
        <div className="wrapper">

            {/* <i id="left" className="fa-solid fa-angle-left"></i> */}
            <div ref={carouselRef} className="carousel">
                {items.map((it, index) => {
                    return <div ref={index === 0 ? firstItemRef : undefined} key={`${it.img} ${index}`} className='item'>
                        <img className='car-image' src={it.img} alt="" />
                        <h4>{it.title}</h4>
                        <a className='more' href='#'>
                            <p>Подробнее об услуге</p>
                            <img src="/src/assets/arrow_right.svg" alt="" />
                        </a>
                    </div>
                })}
            </div>
            {/* <i id="right" className="fa-solid fa-angle-right"></i> */}
        </div>
    )
}
