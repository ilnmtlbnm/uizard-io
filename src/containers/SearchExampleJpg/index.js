import React from 'react';
import { Link } from 'react-router-dom';

import CircleImage from '../../components/CircleImage';
import Icon from '../../components/Icon';
import Image from '../../components/Image';
import InputField from '../../components/InputField';
import Main from '../../components/Main';
import NavigationHeader from '../../components/NavigationHeader';
import Paragraph from '../../components/Paragraph';
import Row from '../../components/Row';
import Stack from '../../components/Stack';

export default () => (
	<Main style={{ justifyContent: 'space-between', alignItems: 'center' }}>
		<NavigationHeader>
			<Icon liga="bars" />
			<CircleImage style={{ width: '40px', height: '40px', backgroundImage: 'url(/images/placeholder-01.jpg)' }} />
		</NavigationHeader>
		<Stack style={{ minWidth: '50px', minHeight: '50px' }}>
			<Row style={{ flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
				<InputField placeholder="Input Field" style={{ width: '240px' }} />
				<Icon liga="search" />
			</Row>
			<Row style={{ justifyContent: 'flex-start', flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
				<Link to="/travel-example-jpg">
					<Image style={{ width: 'calc(100% - 20px)', height: '150px', backgroundImage: 'url(/images/placeholder-02.jpg)' }} />
				</Link>
			</Row>
			<Row style={{ flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
				<Paragraph>
					Lorem ipsum dolor sit amet
				</Paragraph>
				<Link to="/travel-example-jpg">
					<Icon liga="arrow-right" />
				</Link>
			</Row>
			<Row style={{ justifyContent: 'flex-start', flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
				<Link to="/travel-example-jpg">
					<Image style={{ width: 'calc(100% - 20px)', height: '150px', backgroundImage: 'url(/images/placeholder-03.jpg)' }} />
				</Link>
			</Row>
			<Row style={{ flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
				<Paragraph>
					Consectetur adipiscing nisl
				</Paragraph>
				<Link to="/travel-example-jpg">
					<Icon liga="arrow-right" />
				</Link>
			</Row>
		</Stack>
	</Main>
);
