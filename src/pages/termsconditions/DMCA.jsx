import React from 'react'
import '../../styles/tnc/Polter.css'

function DMCA() {
  return (
    <div className='pp'>
      <h2>Terms of Service</h2>
      <div className="view">
        <div className="block">
            <h3>Ability to Accept Terms of Service</h3>
            <p>
                By using Magus Manga, you affirm that you are at least 13 
                years of age and are competent to accept and comply with 
                these Terms of Service. If you are under 13, please refrain 
                from using our services. This platform is not intended for 
                minors below this age.
            </p>
        </div>
        <div>
            <h3>General Use of the Service</h3>
            <p className="block">
                When using Magus Manga, you join a global community of users. 
                We have established the following guidelines to ensure a 
                positive and enjoyable experience for all users. Please 
                adhere to these rules, and if you see content that violates 
                these terms, report it through the provided channels.
            </p>
            <ul>
                <li className="block">
                    <span>Spam & Deceptive Practices</span>: Content that 
                    misleads, scams, or spams users is strictly prohibited.
                </li>
                <li className="block">
                    <span>Sensitive Content</span>: We aim to protect our 
                    users, especially minors. Explicit content, including 
                    pornography or hentai, is not allowed on AniBlog.
                </li>
                <li className="block">
                    <span>Spoiler Content</span>: Content revealing major 
                    plot elements or spoilers without warnings is discouraged 
                    to maintain a positive user experience.
                </li>
                <li className="block">
                    <span>Misinformation</span>: Deliberate misinformation 
                    or deceptive content that could cause real-world harm 
                    is prohibited.
                </li>
            </ul>
        </div>
        <div>
            <h3 className="block">DMCA Report Requirements</h3>
            <ol>
                <li className="block">
                    Identify the copyrighted work that you claim has been 
                    infringed or provide a representative list if multiple 
                    works are involved.
                </li>
                <li className="block">
                    Identify the material or link that you claim is 
                    infringing, including the URL or location where the 
                    material may be found.
                </li>
                <li className="block">
                    Provide your full contact information (name, address, 
                    telephone number, and email address).
                </li>
                <li className="block">
                    Include both of the following statements in your Notice:
                    <i>
                    "I have a good faith belief that the use of the copyrighted 
                    material I am complaining of is not authorized by the 
                    copyright owner, its agent, or the law."
                    </i>
                    <i>
                    "The information in this notice is accurate, and under 
                    penalty of perjury, I am the owner, or authorized to act 
                    on behalf of the owner, of the copyright or exclusive 
                    right that is allegedly infringed."
                    </i>
                </li>
                <li className="block">
                    Provide your full legal name and an electronic or 
                    physical signature.
                </li>
            </ol>
        </div>
      </div>
    </div>
  )
}

export default DMCA
