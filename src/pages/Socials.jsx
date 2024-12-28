import React from 'react'
import './Socials.css'
import SocialCard from '../components/SocialCard'
const Socials = () => {
  return (
    <>
    <div className="socials-base">
    <SocialCard url="Instagramlogo.svg" id="@alokesh_maitra" />
    <SocialCard url="Linkedinlogo.svg" id="@Alokesh Maitra" />
    <SocialCard url="Githublogo.svg" id="@GLXALOKESH" />
    <SocialCard url="Vectorlogo.svg" id="@Alokesh_Maitra" />

      </div>
    </>
  )
}

export default Socials
