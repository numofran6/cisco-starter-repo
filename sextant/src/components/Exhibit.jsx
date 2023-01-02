import React from 'react';
import styled from 'styled-components';

export const Exhibit = ({ children, heading }) => {
	return (
		<Container>
			<h2>{heading} </h2>

			{children}
		</Container>
	);
};

const Container = styled.div`
	background-color: #2d2c2c;
	height: 40vh;
	border-radius: 10px;
	border: 1px solid #525252;
	display: flex;
	flex-direction: column;
	justify-content: center;
	h2 {
		margin: 0;
		color: #ca8a04;
		text-transform: uppercase;
		font-size: 2rem;
	}
`;
