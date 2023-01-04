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
	@media screen and (min-width: 1050px) {
		background-color: rgb(40, 40, 40);
		display: grid;
		grid-template-rows: 40% 40%;
		gap: 30px;
		padding-top: 12px;
		justify-items: center;
	}

	@media screen and (min-width: 640px) and (max-width: 1050px) {
		background-color: rgb(40, 40, 40);
		display: grid;
		grid-template-rows: 40% 40%;
		gap: 30px;
		padding: 40px;
		justify-content: center;
	}

	@media screen and (min-width: 0px) and (max-width: 640px) {
		background-color: rgb(40, 40, 40);
		display: grid;
		grid-template-rows: 40% 40%;
		gap: 30px;
		padding: 40px;
		justify-content: center;
	}
`;
