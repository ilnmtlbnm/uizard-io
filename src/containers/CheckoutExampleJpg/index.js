import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox';
import CircleImage from '../../components/CircleImage';
import Icon from '../../components/Icon';
import Image from '../../components/Image';
import Main from '../../components/Main';
import NavigationHeader from '../../components/NavigationHeader';
import Paragraph from '../../components/Paragraph';
import Row from '../../components/Row';
import Stack from '../../components/Stack';
import Switch from '../../components/Switch';

export default () => (
	<Main style={{ justifyContent: 'space-between', alignItems: 'center' }}>
		<NavigationHeader>
			<Link to="/">
				<Icon liga="bars" />
			</Link>
			<CircleImage style={{ width: '40px', height: '40px', backgroundImage: 'url(/images/placeholder-01.jpg)' }} />
		</NavigationHeader>
		<Stack style={{ minWidth: '50px', minHeight: '50px' }}>
			<Row style={{ justifyContent: 'flex-start', flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
				<Image style={{ width: 'calc(100% - 20px)', height: '130px', backgroundImage: 'url(/images/placeholder-02.jpg)' }} />
			</Row>
			<Row style={{ flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
				<Paragraph>
					Lorem ipsum erat
				</Paragraph>
				<Switch />
			</Row>
			<Row style={{ flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
				<Paragraph>
					Sit amet egestas
				</Paragraph>
				<Switch />
			</Row>
			<Row style={{ flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
				<Paragraph>
					Adipiscing sit
				</Paragraph>
				<Checkbox />
			</Row>
			<Row style={{ flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
				<Link to="/travel-example-jpg">
					<Icon liga="arrow-left" />
				</Link>
				<Button>
					Finibus
				</Button>
			</Row>
		</Stack>
	</Main>
);
