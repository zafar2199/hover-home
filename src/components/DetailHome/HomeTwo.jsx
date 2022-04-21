import React from 'react'
import classes from './DetailHome.module.scss'
import ImgHome from '../../assets/images/home2.jpg'
import { Link } from 'react-router-dom'

const HomeTwo = () => {
    return (
        <div className='container'>
            <div className={classes.detail}>
                <img src={ImgHome} alt='img home' className={classes.img} />
                <SvgComponent2 className={classes.svg} />
            </div>
        </div>
    )
}

export default HomeTwo

const SvgComponent2 = (props) => (
    <svg
        viewBox='0 0 1920 1080'
        preserveAspectRatio='none'
        {...props}
        fillOpacity={0.4}
    >
        <Link to='/home-two'>
            <path d='m251 530 81.5-56.5L324 427l45-30 55 15.5 164-111-5.5-43.5 36.5-23.5 50.5 12.5 42.5-27.5 198.5 48L883 289l18 4.5-8.5 9.5L905 664.5 547.5 1020l-185-76.5-83.5-401-28-12.5Z' />
        </Link>
        <a>
            <path d='m969 236.5-17-8.5 103-85.5 91 18.5 1-13.5 22.5-17.5 48 10v33.5l267.5 60 1.5-13.5 17.5-21.5 56.5 12.5-4.5 35 114.5 24-24.5 45.5-19.5 117-69.5-15-22.5 36-42-8.5-20 32-20 109.5 22 7-29 46-22-3.5-34 57-45.5-12.5-21 29.5-352.5-113-1.5-360.5Z' />
        </a>
    </svg>
)
