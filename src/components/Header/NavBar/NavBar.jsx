import { useState } from 'react';
import styled from 'styled-components';
import BurgerButton from '../BurgerButton/BurgerButton';

const NavBar = () => {
	const [clicked, setClicked] = useState(false);

	const handleClick = (e) => {
		const widthScreen = window.screen.width;
		if (widthScreen <= 767) {
			setClicked(!clicked);
		}
	};
	return (
		<>
			<NavContainer>
				<div className='container-navbar'>
					<h2>
						Learn <span>English</span>
					</h2>
				</div>
				<div className={`links ${clicked ? 'active' : ''}`}>
					<a href='/'>Home</a>
					<a href='/#/present-simple' onClick={handleClick}>
						Present Simple
					</a>
					<a href='/#/past-simple' onClick={handleClick}>
						Past Simple
					</a>
					<a href='/'>Contact</a>
					<a href='/'>Blog</a>
				</div>
				<div className='burguer'>
					<BurgerButton clicked={clicked} handleClick={handleClick} />
				</div>
				<BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
			</NavContainer>
		</>
	);
};

export default NavBar;

const NavContainer = styled.nav`
	.container-navbar {
		z-index: 5;
	}

	padding: 0.4rem;
	background-color: #333;
	display: flex;
	align-items: center;
	justify-content: space-between;

	h2 {
		color: white;
		font-weight: 400;
		span {
			font-weight: bold;
		}
	}

	a {
		color: white;
		text-decoration: none;
		margin-right: 1rem;
	}
	.links {
		position: absolute;
		top: -700px;
		left: -2000px;
		right: 0;
		margin-left: auto;
		margin-right: auto;
		text-align: center;
		transition: all 0.5s ease;
		a {
			color: white;
			font-size: 2rem;
			display: block;
		}
		@media (min-width: 768px) {
			position: initial;
			margin: 0;
			a {
				font-size: 1rem;
				color: white;
				display: inline;
			}
			display: block;
		}
	}
	.links.active {
		z-index: 5;
		width: 100%;
		display: block;
		position: absolute;
		margin-left: auto;
		margin-right: auto;
		top: 15%;
		left: 0;
		right: 0;
		text-align: center;
		a {
			font-size: 2rem;
			margin-top: 1rem;
			color: white;
		}
	}
	.burguer {
		z-index: 5;
		@media (min-width: 768px) {
			display: none;
		}
	}
`;

const BgDiv = styled.div`
	background-color: #222;
	position: absolute;
	top: -1000px;
	left: -1000px;
	width: 100%;
	height: 100%;
	z-index: 1;
	transition: all 0.6s ease;

	&.active {
		z-index: 1;
		border-radius: 0 0 80% 0;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
`;
