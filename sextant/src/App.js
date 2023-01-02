import styled from 'styled-components';
import './App.css';
import { Banner } from './components/Banner';
import { Exhibit } from './components/Exhibit';
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
		</div>
	);
}

export default App;

const Grid = styled.div`
	display: grid;
	grid-template-columns: 50% 50%;
	gap: 20px;
	margin: 20px 50px;
`;
