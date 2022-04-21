import React from 'react'
import classes from './DetailHome.module.scss'
import ImgHome from '../../assets/images/save.jpg'
import { Link } from 'react-router-dom'

const HomeThree = () => {
    return (
        <div className='container'>
            <div className={classes.detail}>
                <img src={ImgHome} alt='img home' className={classes.img} />
                <SvgHome className={classes.svg} />
            </div>
        </div>
    )
}

export default HomeThree

const SvgHome = (props) => (
    <svg
        // width={1920}
        // height={1080}
        viewBox='0 0 1920 1080'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
    >
        <g clipPath='url(#a)' fill='#C4C4C4' fillOpacity={0.4}>
            <Link to='/home-12'>
                <path d='M480 825v63l147.5 100.5L1340 779v-60.5l-716.5 185L480 825Z' />
            </Link>
            <Link to='/home-12'>
                <path d='M480 733v92l143.5 78.5 716.5-185V661L623.5 802.5 480 733Z' />
            </Link>
            <Link to='/home-12'>
                <path d='M480 651.5V733l143.5 69.5L1340 661v-53l-716.5 93.5-143.5-50Z' />
            </Link>
            <Link to='/home-12'>
                <path d='M480 572v79.5l143.5 50L1340 608l1-55-717.5 47.5L480 572Z' />
            </Link>
            <Link to='/home-12'>
                <path d='M480 493.5V572l143.5 28.5L1341 553v-59.5L623.5 508 480 493.5Z' />
            </Link>
            <Link to='/home-12'>
                <path d='M480 411.5V494l143.5 14 717.5-15v-59.5l-717.5-18-143.5-4Z' />
            </Link>
            <Link to='/home-12'>
                <path d='M480 329.5v82l143.5 4L1341 433v-60.5L623 329l-143 .5Z' />
            </Link>
            <Link to='/home-12'>
                <path d='M480 261v68.5l143.5-.5 717.5 43.5v-63L623.5 243 480 261Z' />
            </Link>
            <Link to='/home-12'>
                <path d='M480 200.5V261l143.5-18 715 66v-63l-715-95L480 200.5Z' />
            </Link>
        </g>
        <defs>
            <clipPath id='a'>
                <path fill='#fff' d='M0 0h1920v1080H0z' />
            </clipPath>
        </defs>
    </svg>
)
const SvgComponent2 = (props) => (
    <svg
        viewBox='0 0 1920 1080'
        preserveAspectRatio='none'
        {...props}
        fillOpacity={0.4}
    >
        <a>
            <path d='m251 530 81.5-56.5L324 427l45-30 55 15.5 164-111-5.5-43.5 36.5-23.5 50.5 12.5 42.5-27.5 198.5 48L883 289l18 4.5-8.5 9.5L905 664.5 547.5 1020l-185-76.5-83.5-401-28-12.5Z' />
        </a>
        <a>
            <path d='m969 236.5-17-8.5 103-85.5 91 18.5 1-13.5 22.5-17.5 48 10v33.5l267.5 60 1.5-13.5 17.5-21.5 56.5 12.5-4.5 35 114.5 24-24.5 45.5-19.5 117-69.5-15-22.5 36-42-8.5-20 32-20 109.5 22 7-29 46-22-3.5-34 57-45.5-12.5-21 29.5-352.5-113-1.5-360.5Z' />
        </a>
    </svg>
)

const SvgComponent1 = (props) => (
    <svg viewBox='0 0 1920 1080' preserveAspectRatio='none' {...props}>
        <a>
            <path d='M280 559.5 559 454l56.5 43-7 6 15 172-136 58 42.5 39-8.5 3.5 14 15-11.5 5 19 148-134 74.5-110-123-44.5-209.5-9-10.5 61.5-28-17-75-10-12.5Z' />
        </a>
        <a>
            <path d='m868 336.5 65.5 36-9.5 6.5v155.5l-41.5 22 15 10.5.5 22 29 20.5-9 5.5 1.5 169.5-85 52-169-138-25.5-185 13.5-8-7-73.5-6.5-7 228-88.5Z' />
        </a>
        <a>
            <path d='m937 311.5 194.5-74L1194 268l-6 8-9.5 147.5-9.5 5 48.5 27-5 3 17 10-11 6L1210 606l-102.5 58.5-149-108 1.5-69-14.5-10v-160l-8.5-6Z' />
        </a>
        <a>
            <path d='m1354 153.5 67 27-7.5 3.5-14 120 44.5 19.5 15.5-132-6.5-3 56.5-23.5 203 78-10.5 5.5-24 124.5-41 23-7-3.5-31 15.5-119.5-52 5-7.5-2.5 1.5-7 5-17.5 125-87 47-139-79.5L1212 436l4-48-28.5-17.5L1195 223l-5-6 164-63.5Z' />
        </a>
    </svg>
)
