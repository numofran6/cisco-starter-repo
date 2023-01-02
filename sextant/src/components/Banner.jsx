import styled from 'styled-components';
import cisco from '../assets/cisco.jpg';

export const Banner = () => {
	return (
		<Container>
			<img src={cisco} alt="" />

			<div className="description">
				<h1>SEXTANT</h1>
				<p>
					A network dashboard created to assist field technicians in their
					day-to-day operations
				</p>
			</div>
		</Container>
	);
};

const Container = styled.div`
	color: darkgray;
	position: relative;
	height: 65vh;
	text-align: right;
	img {
		height: 100%;
		width: 100%;
		object-fit: fill;
		opacity: 1;
	}
	.description {
		position: absolute;
		bottom: 10px;
		right: 60px;
		h1 {
			font-size: 5rem;
			margin: 0;
			letter-spacing: 10px;
			color: white;
		}
		p {
			margin: 0;
		}
	}
`;
