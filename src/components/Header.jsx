import { useState } from 'react'
import trollFace from '../assets/troll-face.png'

export default function Header(){
    return(
        <div className='Header'>
            <img src={trollFace} alt="" />
            <h2>Meme Generator</h2>
            <h4>React Course - Project 3</h4>            
        </div>
    )
}