import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import CircleImage from '../../components/CircleImage';
import Icon from '../../components/Icon';
import Image from '../../components/Image';
import Main from '../../components/Main';
import NavigationHeader from '../../components/NavigationHeader';
import Paragraph from '../../components/Paragraph';
import Stack from '../../components/Stack';

export default () => (
	<Main style={{ justifyContent: 'space-between', alignItems: 'center' }}>
		<NavigationHeader>
			<Link to="/">
				<Icon liga="bars" />
			</Link>
			<CircleImage style={{ width: '40px', height: '40px', backgroundImage: 'url(/images/placeholder-01.jpg)' }} />
		</NavigationHeader>
		<Stack style={{ justifyContent: 'flex-start', alignItems: 'flex-start', minWidth: '50px', minHeight: '50px' }}>
			<Image style={{ width: 'calc(100% - 20px)', height: '230px', backgroundImage: 'url(/images/placeholder-02.jpg)' }} />
			<Paragraph style={{ width: 'calc(100% - 20px)' }}>
				Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam convallis sapien sit amet arcu dictum at finibus est placerat sed
			</Paragraph>
			<Link to="/checkout-example-jpg">
				<Button style={{ width: 'calc(100% - 20px)' }}>
					Sollicitudin
				</Button>
			</Link>
		</Stack>
	</Main>
);
