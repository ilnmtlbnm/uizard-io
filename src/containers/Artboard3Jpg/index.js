import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Card from '../../components/Card';
import CircleImage from '../../components/CircleImage';
import Icon from '../../components/Icon';
import Main from '../../components/Main';
import NavigationHeader from '../../components/NavigationHeader';
import Paragraph from '../../components/Paragraph';
import Row from '../../components/Row';
import Stack from '../../components/Stack';
import Switch from '../../components/Switch';

export default () => (
	<Main style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
		<NavigationHeader>
			<Icon liga="bars" />
			<CircleImage style={{ width: '50px', height: '50px', backgroundImage: 'url(/images/placeholder-01.jpg)' }} />
		</NavigationHeader>
		<Stack style={{ justifyContent: 'flex-start', minWidth: '50px', minHeight: '50px' }}>
			<Row style={{ justifyContent: 'center', flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
				<CircleImage style={{ width: '120px', height: '120px', backgroundImage: 'url(/images/placeholder-02.jpg)' }} />
			</Row>
			<Row style={{ flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
				<Switch />
				<Paragraph>
					Lorem ipsum dolor sit amet
				</Paragraph>
			</Row>
			<Row style={{ flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
				<Switch />
				<Paragraph>
					Consectetur adipiscing nunc
				</Paragraph>
			</Row>
			<Row style={{ flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
				<Switch />
				<Paragraph>
					Aliquam convallis sapien
				</Paragraph>
			</Row>
			<Row style={{ justifyContent: 'center', flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
				<Card style={{ minWidth: '50px', minHeight: '200px', width: 'calc(100% - 20px)', flexGrow: '0' }}>
					<Row style={{ justifyContent: 'flex-start', flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
						<Paragraph>
							Blous
						</Paragraph>
					</Row>
					<Row style={{ flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
						<Button>
							Consequat
						</Button>
						<Link to="/">
							<Button>
								No
							</Button>
						</Link>
					</Row>
				</Card>
			</Row>
		</Stack>
	</Main>
);
