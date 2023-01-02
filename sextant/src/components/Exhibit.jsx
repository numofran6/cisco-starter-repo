import React from 'react';
import styled from 'styled-components';

export const Exhibit = ({ children, heading, forStrem }) => {
	if (forStrem) {
		return (
			<LatencyContainer>
				<h2>{heading} </h2>
				{children}
			</LatencyContainer>
		);
	}

	return (
		<Container>
			<h2>{heading} </h2>

			{children}
		</Container>
	);
};

const Container = styled.div`
	background-color: #2d2c2c;
	height: 30vh;
	border-radius: 10px;
	border: 1px solid #525252;
	display: grid;
	grid-template-columns: 40% 60%;
	place-items: center;
	h2 {
		margin: 0;
		color: white;
		text-transform: uppercase;
		font-size: 2.5rem;
		background-color: #ca8a04;
		width: 100%;
		height: 100%;
		border-radius: 10px 0 0 10px;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
`;

const LatencyContainer = styled.div`
	background-color: white;
	color: rgb(36, 36, 36);
	padding: 30px 0;
	h2 {
		font-size: 1.5rem;
		color: rgb(91, 88, 88);
	}
`;
