import logo from './img/logo.png'
import instagram from './img/instagram.png'
import facebook from './img/facebook.png'
import twitter from './img/twiter.png'
import { FooterContainer } from './FooterStyle'
import { Link } from 'react-router-dom';

const Footer = () => (
  <FooterContainer>
    <div className="Container">
      <img src={logo} alt="efood" />
      <ul>
        <li>
          <Link href="#">
            <img src={instagram} alt="instagram" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <img src={facebook} alt="facebook" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <img src={twitter} alt="twitter" />
          </Link>
        </li>
      </ul>
      <h4>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
        estabelecimento contratado.
      </h4>
    </div>
  </FooterContainer>
)

export default Footer
