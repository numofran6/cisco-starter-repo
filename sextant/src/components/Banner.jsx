import styled from 'styled-components';
import cisco from '../assets/cisco.jpg';

export const Banner = () => {
	return (
		<Container>
			<img src={cisco} alt="" />

			<div className="description">
				<h1>Sextant.</h1>
				<p>
					A network dashboard created to assist field technicians in their
					day-to-day operations
				</p>
			</div>
		</Container>
	);
};

const Container = styled.div`
	@media screen and (min-width: 1050px) {
		color: darkgray;
		position: relative;
		height: 60vh;
		text-align: right;
		img {
			height: 100%;
			width: 100%;
			object-fit: fill;
			opacity: 0.5;
		}
		.description {
			position: absolute;
			bottom: 10px;
			right: 60px;
			h1 {
				font-size: 5.5rem;
				margin: 0;
				letter-spacing: 10px;
				color: #bb5cbb;
			}
			p {
				margin: 0;
				color: #e0b9e0;
				font-size: 0.9rem;
			}
		}
	}

	@media screen and (min-width: 640px) and (max-width: 1050px) {
		color: darkgray;
		position: relative;
		height: 50vh;
		text-align: right;
		img {
			height: 100%;
			width: 100%;
			object-fit: fill;
			opacity: 0.5;
		}
		.description {
			position: absolute;
			bottom: 10px;
			right: 30px;
			h1 {
				font-size: 4rem;
				margin: 0;
				letter-spacing: 10px;
				color: #bb5cbb;
			}
			p {
				margin: 0;
				color: #e0b9e0;
				font-size: 0.8rem;
			}
		}
	}

	@media screen and (min-width: 0px) and (max-width: 640px) {
		color: darkgray;
		position: relative;
		height: 30vh;
		text-align: right;
		img {
			height: 100%;
			width: 100%;
			object-fit: fill;
			opacity: 0.5;
		}
		.description {
			position: absolute;
			bottom: 10px;
			right: 10px;
			h1 {
				font-size: 2rem;
				margin: 0;
				letter-spacing: 10px;
				color: #bb5cbb;
			}
			p {
				margin: 0;
				color: #e0b9e0;
				font-size: 0.6rem;
			}
		}
	}
`;
