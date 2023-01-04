import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

export const StreamData = () => {
	const [latency, setLatency] = useState(null);

	useEffect(() => {
		const client = new W3CWebSocket('ws://localhost:55455');
		client.onmessage = (message) => {
			setLatency(new Date().getTime() - message.data);
		};
	}, []);

	return <Container> Value - {latency}</Container>;
};

const Container = styled.div`
	@media screen and (min-width: 640px) {
		font-size: 2rem;
		font-weight: bold;
	}

	@media screen and (min-width: 0px) and (max-width: 640px) {
		font-size: 1.5rem;
		font-weight: bold;
		padding-bottom: 5px;
	}
`;
