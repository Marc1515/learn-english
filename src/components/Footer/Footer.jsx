import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import './Footer.css';

const Footer = () => {
	return (
		<div className='footer-container'>
			<div className='left-footer'>
				<span>Learn English</span>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
					sequi? Illo rerum accusantium iure est? Consequuntur neque maxime
					quidem similique, iusto voluptatem itaque aperiam architecto sequi
					corporis. Inventore, eligendi laudantium!
				</p>
			</div>
			<div className='center-footer'>
				<a href='https://www.instagram.com/marc_espp/'>
					<InstagramIcon />
				</a>
				<a href='https://www.linkedin.com/in/marc-espa%C3%B1a-833924141/'>
					<LinkedInIcon />
				</a>
				<a href='https://twitter.com/MaarcEsp15'>
					<TwitterIcon />
				</a>
			</div>
			<div className='right-footer'>
				<span>Marc España Quinquilla</span>
				<p className='explication-right-footer'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
					maiores officia pariatur erdsa.
				</p>
				<p className='email-right-footer'>
					<MailOutlineIcon /> meq.1515@gmail.com
				</p>
				<p className='phone-right-footer'>
					<PhoneIcon /> 628246363
				</p>
			</div>
		</div>
	);
};

export default Footer;
