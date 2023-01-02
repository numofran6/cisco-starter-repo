import styled from 'styled-components';
import './App.css';
import { Banner } from './components/Banner';
import { Exhibit } from './components/Exhibit';
import { StreamData } from './components/StreamData';
import { UserIP } from './components/UserIP';

function App() {
	return (
		<div className="App">
			<Banner />

			<Grid>
				<Exhibit
					heading={'Discover IPV4'}
					children={<UserIP ipVersion={'ipv4'} />}
				/>
				<Exhibit
					heading={'Discover IPV6'}
					children={<UserIP ipVersion={'ipv6'} />}
				/>
			</Grid>

			<Exhibit
				forStrem={true}
				heading={'Pylon Connection Latency'}
				children={<StreamData />}
			/>
		</div>
	);
}

export default App;

const Grid = styled.div`
	display: grid;
	grid-template-columns: 40% 40%;
	gap: 50px;
	margin: 50px 0;
	justify-content: center;
`;
