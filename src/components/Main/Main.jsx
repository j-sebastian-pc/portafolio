
import Section from '../Section/Section';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const img = 'https://t4.ftcdn.net/jpg/01/33/14/91/240_F_133149161_cZzY9SYCE9FjMOwMGRJ26W8OqMZx1opU.jpg';

export const Main = () => {
  return (
    <Section>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-2/3 px-40">
            <h3 className="text-gray-700 text-lg">Hello, it's Me</h3>
            <h2 className="text-3xl font-semibold mb-4">Juan Sebastian PC</h2>
            <h3 className="text-gray-700 text-lg mb-4">And I'm a <span className="text-blue-500">FrontEnd |</span></h3>
            <p className="text-gray-600">
              Software Analysis and Development student with a solid understanding of key programming and web development technologies. My focus is on constantly learning and growing in the world of technology, while applying my problem-solving skills in creative ways. With a focus on application development and creating efficient solutions, I aspire to contribute significantly in the field of software development.
            </p>

            <div className="mt-4 flex space-x-4">
              <a href="https://www.facebook.com/sebastian.cristancho4/" className="text-gray-500 hover:text-blue-400" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} className="text-2xl" />
              </a>
              <a href="https://twitter.com/ParaSebass?t=xywvFy8tiNFme-CRXKwo-Q&s=08" className="text-gray-500 hover:text-blue-400" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
              </a>
              <a href="https://www.instagram.com/sebastian_0_4_/" className="text-gray-500 hover:text-blue-400" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
              </a>
              <a href="https://www.linkedin.com/in/sebastian-cristancho-77227780/" className="text-gray-500 hover:text-blue-400" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl" />
              </a>
              <a href="https://github.com/j-sebastian-pc" className="text-gray-500 hover:text-blue-400" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="text-2xl" />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 px-4 mt-8 md:mt-0">
            <img src={img} alt="" className="rounded-lg shadow-md" />
          </div>
        </div>
      </section>
    </Section>
  );
};

export default Main;
