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
	color: darkgray;
	position: relative;
	height: 70vh;
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
			font-size: 6.2rem;
			margin: 0;
			letter-spacing: 10px;
			color: #bb5cbb;
		}
		p {
			margin: 0;
			color: #e0b9e0;
		}
	}
`;
