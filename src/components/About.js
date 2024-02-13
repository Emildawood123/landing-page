import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faTwitter, faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons'

function About() {
    return (
        <section id="about">
            <p>This application idea come when i face the problem to segemnt set of people to teams</p>
            <h3>Contact Us
            <a href='https://twitter.com/0SJ0GvO14ycsgpk' className="twitter" target='_blank'><FontAwesomeIcon icon={faTwitter}/></a>
            <a href='https://www.linkedin.com/in/emil-dawood-82296a1a9/' className="linkedin" target='_blank'><FontAwesomeIcon icon={faLinkedin}/></a>
            <a href='https://github.com/Emildawood123' target='_blank' className='github'><FontAwesomeIcon icon={faGithub}/></a>   
            </h3>
            
        </section>
    )
}
export default About;
