import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export const UserIP = ({ ipVersion }) => {
	const [publicIP, setPublicIP] = useState(null);

	const fetchIP = async (url) => {
		const ipAddr = await axios
			.get(url)
			.then((res) => res.data)
			.catch((err) => console.log(err));
		setPublicIP(ipAddr);
	};

	useEffect(() => {
		if (ipVersion === 'ipv6') {
			fetchIP('https://api64.ipify.org');
		}
		if (ipVersion === 'ipv4') {
			fetchIP('https://api.ipify.org');
		}
	}, [ipVersion]);

	return (
		<Container>
			<p>
				Your IP address in {ipVersion} is - <span>{publicIP}</span>
			</p>
		</Container>
	);
};

const Container = styled.div`
	p {
		margin: 0;
		font-weight: bold;
		span {
			font-weight: bolder;
			color: #bb5cbb;
			font-size: 1.2rem;
		}
	}
`;
