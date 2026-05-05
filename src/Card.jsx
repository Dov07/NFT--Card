import React from 'react'
import imgeth from './assets/icon-ethereum.svg'
import whois from './assets/image-avatar.png'
import iconview from './assets/icon-view.svg'
import clock from './assets/icon-clock.svg'
import './Card.css'
const Card = ({ CardDetails }) => {
    const { price, name, description, img } = CardDetails[0];
    return (


        <div className='card'>
            <div className='nft '>
                <img className='nft-img' src={img} alt=" nft img" />
                <img className='view' src={iconview} alt="nft view" />
            </div>
            <div className='details'>
                <div className='top-head'>
                    <h2>{name}</h2>
                    <p>{description}</p>

                </div>
                <div className='price-time'>
                    <div className='price'>
                        <img src={imgeth} alt="ethereum icon" />
                        <p>{price} ETH</p>
                    </div>
                    <div className='time'>
                        <img src={clock} alt="" />
                        <p>3 days left</p>
                    </div>
                </div>
                <div className='whois'>
                    <img src={whois} alt="avatar" />
                    <p>Creation of <a>Jules Wyvern</a></p>
                </div>
            </div>
        </div>
    )
}

export default Card