const NavLink = ({ href, children, mobile = false, activeSection, scrollToSection }) => (
  <button
    onClick={() => scrollToSection(href)}
    className={`${
      mobile ? 'block w-full text-left px-4 py-2' : 'px-4 py-2'
    } text-gray-700 hover:text-blue-600 transition-colors font-medium ${
      activeSection === href ? 'text-blue-600 border-b-2 border-blue-600' : ''
    }`}
  >
    {children}
  </button>
);

export default NavLink;