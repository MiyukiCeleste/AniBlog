import React from 'react'
import '../../styles/tnc/Polter.css'

function Policy() {
  return (
    <div className='pp'>
      <h2>Privacy Policy</h2>
      <div className="view">
        <div className="block">
            <h3>Introduction</h3>
            <p>
                Welcome to AniBlog. We are committed to protecting your 
                personal information and your right to privacy. This Privacy 
                Policy outlines how we collect, use, and safeguard your data 
                when you use our services, in accordance with applicable data 
                protection regulations such as the General Data Protection 
                Regulation (GDPR) and the California Consumer Privacy Act (CCPA).
            </p>
        </div>
        <div className="block">
            <h3>1. Information We Collect</h3>
            <p>We may collect the following types of information:</p>
            <ul>
                <li>
                    Personal identification information (e.g., Name, email 
                    address, contact details)
                </li>
                <li>Technical data (e.g., IP address, browser type, operating system)</li>
                <li>
                    Usage data (e.g., the pages you visit, the time you spend 
                    on the site, and other interaction data)
                </li>
                <li>
                    Cookies and tracking information (e.g., preferences, 
                    website interactions)
                </li>
            </ul>
        </div>
        <div className="block">
            <h3>2. How We Use Your Information</h3>
            <p>We use your information to:</p>
            <ul>
                <li>Provide, operate, and maintain our services</li>
                <li>Improve, personalize, and expand our services</li>
                <li>Communicate with you regarding updates, services, and offers</li>
                <li>Analyze website usage and optimize user experience</li>
                <li>Comply with legal obligations and protect against fraud</li>
            </ul>
        </div>
        <div className="block">
            <h3>3. Cookies & Tracking Technologies</h3>
            <p>
                We use cookies and similar tracking technologies to track activity 
                on our site and hold certain information. You can instruct your 
                browser to refuse all cookies or to indicate when a cookie is being 
                sent. However, if you do not accept cookies, you may not be able to 
                use some portions of our services.
                <br />
                <br />
                Cookies help us to understand your preferences based on previous or 
                current site activity, which enables us to provide you with improved 
                services.
            </p>
        </div>
        <div className="block">
            <h3>4. Data Protection</h3>
            <p>
                We take the security of your personal data seriously. We implement a 
                variety of security measures to protect your personal information 
                from unauthorized access, use, alteration, or disclosure. However, 
                no method of transmission over the Internet or method of electronic 
                storage is 100% secure, so we cannot guarantee absolute security.
            </p>
        </div>
        <div>
            <h3 className="block">5. Third-Party Disclosure</h3>
            <p className="block">
                We do not sell, trade, or otherwise transfer your personally 
                identifiable information to third parties except in the following 
                circumstances:
            </p>
            <ul className="block">
                <li>
                    With service providers who assist us in running our services 
                    and only to the extent necessary to perform their tasks
                </li>
                <li>
                    To comply with legal obligations, protect our rights, or 
                    enforce our site policies
                </li>
                <li>
                    In case of a merger, acquisition, or asset sale, your 
                    information may be transferred to the new entity
                </li>
            </ul>
        </div>
        <div>
            <h3 className="block">6. Your Rights</h3>
            <p className="block">
                Depending on your location, you may have the following rights 
                under privacy laws such as the GDPR or CCPA:
            </p>
            <ul className="block">
                <div className="block">
                <li>Right to access – You have the right to request copies of your personal data.</li>
                <li>
                    Right to rectification – You have the right to request correction of 
                    inaccurate or incomplete information.
                </li>
                <li>
                    Right to erasure – You have the right to request that we erase your 
                    personal data, under certain conditions.
                </li>
                </div>
                <div className="block">
                <li>
                    Right to restrict processing – You have the right to request that we 
                    restrict the processing of your personal data, under certain conditions.
                </li>
                <li>
                    Right to object to processing – You have the right to object to our 
                    processing of your personal data, under certain conditions.
                </li>
                <li>
                    Right to data portability – You have the right to request that we 
                    transfer your data to another organization, or directly to you, under 
                    certain conditions.
                </li>
                </div>
            </ul>
            <p className="block">
                To exercise any of these rights, please contact us at support@aniblog.org. 
                We may require you to verify your identity before processing such requests.
            </p>
        </div>
        <div className="block">
            <h3>7. Children's Privacy</h3>
            <p>
                Our services are not intended for individuals under the age of 13. 
                We do not knowingly collect personal data from children. If we 
                discover that a child under 13 has provided us with personal 
                information, we will delete such information from our servers 
                immediately.
            </p>
        </div>
        <div className="block">
            <h3>Changes to This Policy</h3>
            <p>
                We may update our Privacy Policy from time to time in order to 
                reflect changes to our practices or for other operational, legal, 
                or regulatory reasons. When we make material changes, we will notify 
                you via email or by posting a notice on our website prior to the 
                change becoming effective.
            </p>
        </div>      
      </div>
    </div>
  )
}

export default Policy
