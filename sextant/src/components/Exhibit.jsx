import React from 'react';
import styled from 'styled-components';
import latency from '../assets/latency.png';

export const Exhibit = ({ children, heading, forStrem }) => {
	if (forStrem) {
		return (
			<LatencyContainer>
				<div>
					<img src={latency} alt="" />
				</div>

				<div className="content">
					<h2>{heading} </h2>
					<p>How long the packet took to traverse the network </p>
					{children}
				</div>
			</LatencyContainer>
		);
	}

	return (
		<Container>
			<h2>{heading} </h2>

			<div className="children">{children}</div>
		</Container>
	);
};

const Container = styled.div`
	@media screen and (min-width: 1050px) {
		background-color: rgb(35, 35, 35);
		height: 15vh;
		border-radius: 10px;
		display: flex;
		justify-content: center;
		flex-direction: column;
		padding: 0 150px;
		h2 {
			margin: 0;
			padding: 0;
			color: white;
			text-transform: uppercase;
			font-size: 1.4rem;
		}
	}

	@media screen and (min-width: 640px) and (max-width: 1050px) {
		background-color: rgb(35, 35, 35);
		height: 15vh;
		border-radius: 10px;
		display: flex;
		justify-content: center;
		flex-direction: column;
		padding: 0 150px;
		h2 {
			margin: 0;
			padding: 0;
			color: white;
			text-transform: uppercase;
			font-size: 1.4rem;
		}
	}

	@media screen and (min-width: 0px) and (max-width: 640px) {
		background-color: rgb(35, 35, 35);
		height: 15vh;
		border-radius: 10px;
		display: flex;
		justify-content: center;
		flex-direction: column;
		h2 {
			margin: 0;
			padding: 0;
			color: white;
			text-transform: uppercase;
			font-size: 1.4rem;
		}
	}
`;

const LatencyContainer = styled.div`
	@media screen and (min-width: 1050px) {
		display: grid;
		grid-template-columns: 20% 70%;
		color: white;
		background-color: rgb(27, 27, 27);
		img {
			height: 100%;
			width: 100%;
			object-fit: cover;
		}
		.content {
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: start;
			padding: 20px;
			h2 {
				font-size: 2rem;
				color: rgb(167, 162, 162);
				text-transform: uppercase;
				margin: 0;
				padding: 0;
			}
			p {
				color: rgb(167, 162, 162);
				margin: 0 0 20px 0;
				padding: 0;
			}
		}
	}

	@media screen and (min-width: 640px) and (max-width: 1050px) {
		display: grid;
		grid-template-columns: 30% 70%;
		color: white;
		background-color: rgb(27, 27, 27);
		overflow: hidden;
		img {
			height: 100%;
			width: 100%;
			object-fit: cover;
		}
		.content {
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: start;
			padding: 20px;
			h2 {
				font-size: 2rem;
				color: rgb(167, 162, 162);
				text-transform: uppercase;
				margin: 0;
				padding: 0;
			}
			p {
				color: rgb(167, 162, 162);
				margin: 0 0 20px 0;
				padding: 0;
			}
		}
	}

	@media screen and (min-width: 0px) and (max-width: 640px) {
		display: grid;
		grid-template-rows: 40% 60%;
		color: white;
		background-color: rgb(27, 27, 27);
		overflow: hidden;
		height: 30vh;
		img {
			height: 100%;
			width: 100%;
			object-fit: cover;
		}
		.content {
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: start;
			padding: 10px;
			align-items: center;
			h2 {
				font-size: 1rem;
				color: rgb(167, 162, 162);
				text-transform: uppercase;
				margin: 0;
				padding-top: 10px;
			}
			p {
				color: rgb(167, 162, 162);
				margin: 0 0 20px 0;
				padding: 0;
			}
		}
	}
`;
