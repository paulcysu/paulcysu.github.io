import { FooterCentered } from 'features/footer';
import { HeaderResponsive } from 'features/header';

const links = [
  {link: '/', label: 'Home'},
  {link: '#projects', label: 'Projects'},
  {link: '#about', label: 'About'},
]

const Portfolio = () => {
  return (
    <div id="portfolio">
      <HeaderResponsive links={links} />
      <FooterCentered links={[]} />
    </div>
  )
}

export default Portfolio