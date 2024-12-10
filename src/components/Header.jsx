import { Link } from 'react-scroll';

const Header = () => {
  return (
    <nav className="w-full bg-gray-800 text-white z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-6">
        <div className='flex items-center gap-5'>
        <div className="w-10 h-10 rounded-full bg-gray-300 mb-6 md:mb-0">
        <img src="/images/np.png" alt="A" className="w-full h-full object-cover rounded-full" />
        </div>
        <div className="text-2xl font-bold">Nikhil Pannala</div>
        </div>
        <div>
          <ul className="flex space-x-6">
            <li>
              <Link to="about" smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer">
                About
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={500} offset={-50} className="hover:text-gray-400 cursor-pointer">
                Skills
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500} offset={-50} className="hover:text-gray-400 cursor-pointer">
                Projects
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} offset={-50} className="hover:text-gray-400 cursor-pointer">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
