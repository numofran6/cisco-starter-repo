import styled from 'styled-components';

export const Banner = () => {
	return (
		<Container>
			<h1>SEXTANT</h1>
		</Container>
	);
};

const Container = styled.div`
	padding: 40px;
	background-color: #ca8a04;
	h1 {
		font-size: 7rem;
		text-align: left;
		color: rgb(36, 36, 36);
		margin: 0;
		font-weight: bolder;
	}
`;
