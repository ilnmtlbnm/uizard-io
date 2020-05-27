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
	<Main style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
		<NavigationHeader>
			<Icon liga="bars" />
			<Link to="/3-jpg">
				<CircleImage style={{ width: '50px', height: '50px', backgroundImage: 'url(/images/placeholder-01.jpg)' }} />
			</Link>
		</NavigationHeader>
		<Stack style={{ justifyContent: 'flex-start', minWidth: '50px', minHeight: '50px' }}>
			<Row style={{ flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
				<InputField placeholder="Input Field" style={{ width: '190px' }} />
				<Icon liga="search" />
			</Row>
			<Image style={{ width: 'calc(100% - 20px)', height: '190px', backgroundImage: 'url(/images/placeholder-02.jpg)' }} />
			<Row style={{ flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
				<Paragraph>
					Lorem ipsum dolor sit amet ipsum
				</Paragraph>
				<Link to="/2-jpg">
					<Icon liga="arrow-right" />
				</Link>
			</Row>
			<Image style={{ width: 'calc(100% - 20px)', height: '190px', backgroundImage: 'url(/images/placeholder-03.jpg)' }} />
			<Row style={{ flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
				<Paragraph>
					Adipiscing elit aliquam volutpat
				</Paragraph>
				<Icon liga="arrow-right" />
			</Row>
		</Stack>
	</Main>
);
