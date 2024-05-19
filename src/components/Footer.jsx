import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa';
import logo from '../assets/RShorts.png';
const Footer = () => {
  const HowItWorks = () => {
    const pricingSection = document.getElementById('HowItWorks');
    pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricingSection');
    pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const Portfolio = () => {
    const pricingSection = document.getElementById('portfolio');
    pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const Testimonial = () => {
    const pricingSection = document.getElementById('testimonial');
    pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src={logo} className="w-[8rem] mb-4" alt="Logo" />
            <p className="text-gray-400 mb-4 max-w-[25rem]">
              Streamlining Video Editing, Empowering Your Creativity. Let Us
              Handle the Editing so You Can Dive into Content Creation
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/watch/rodhisource/?paipv=0&eav=Afa6yd10Zn-RWMIdahm1MO6Juk6-uflm9Su2Nba08Tvc8kxBSgXqSAZY7NuwvP-5Juw&_rdr"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.youtube.com/@rodhi.sources"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.instagram.com/p/Ci5HeMzBJIg/?hl=en"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/82490648/admin/feed/posts/"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.pinterest.com/rodhisources/"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaTiktok />
              </a>
              <a
                href="https://www.tiktok.com/@rodhi.sources"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaPinterest />
              </a>
            </div>
          </div>
          <div className="ml-10 mt-10">
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="grid grid-cols-2 md:grid-cols-2 gap-4">
              <li onClick={HowItWorks}>How it works</li>
              <li onClick={scrollToPricing}>Pricing</li>
              <li onClick={Portfolio}>Our Portfolio</li>
              <li onClick={Testimonial}>Testimonial</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
