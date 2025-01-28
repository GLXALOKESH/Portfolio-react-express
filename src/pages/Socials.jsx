import React from 'react'
import './Socials.css'
import SocialCard from '../components/SocialCard'
const Socials = () => {
  return (
    <>
    <div className="socials-base">
    <SocialCard url="Instagramlogo.svg" id="@alokesh_maitra" to="https://www.instagram.com/alokesh_maitra/"/>
    <SocialCard url="Linkedinlogo.svg" id="@Alokesh Maitra" to="https://www.linkedin.com/in/alokesh-maitra-a9a47028b/" />
    <SocialCard url="Githublogo.svg" id="@GLXALOKESH" to="https://github.com/GLXALOKESH" />
    <SocialCard url="Vectorlogo.svg" id="@Alokesh_Maitra" to="https://x.com/Alokesh_Maitra" />

      </div>
    </>
  )
}

export default Socials
