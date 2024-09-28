 import { FaArrowUp } from "react-icons/fa";
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white mt-32 py-8">
      <ScrollLink  to="Home" smooth={true} cla > <FaArrowUp  size={40} className="border-4 border-indigo-600 ml-8 "/></ScrollLink>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Footer Content */}
          <div className="text-center">
            {/* Contact Section */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Pavendra Rajput</h3>
            </div>

            {/* Social Media Links Section */}
            <div>
              <ul className="flex justify-center space-x-4 mt-4">
                <li>
                  <a
                    href="https://github.com/Pavendra21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-white transition-colors"
                  >
                    <i className="fab fa-github"></i> GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/pavendra-singh-rajput-551481248/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-white transition-colors"
                  >
                    <i className="fab fa-linkedin"></i> LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/pavendra.rajput/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-white transition-colors"
                  >
                    <i className="fab fa-twitter"></i> Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Pavendra. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
