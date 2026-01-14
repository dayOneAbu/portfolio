import PillNav from './PillNav';
import logo from '../assets/abubker_logo.png';


function NavBar() {
  return (
  <PillNav
  logo={logo}
  logoAlt="Abubker."
  items={[
     
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ]}
  activeHref="/"
  className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between max-w-7xl mx-auto px-6 py-4 bg-background/80 backdrop-blur-md md:w-full"
  ease="power2.easeOut"
  baseColor="#000000"
  pillColor="#ffffff"
  hoveredPillTextColor="#ffffff"
  pillTextColor="#000000"
/>
  )
}

export default NavBar