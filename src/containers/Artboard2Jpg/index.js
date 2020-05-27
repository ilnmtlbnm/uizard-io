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
	<Main style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
		<NavigationHeader>
			<Icon liga="bars" />
			<CircleImage style={{ width: '50px', height: '50px', backgroundImage: 'url(/images/placeholder-01.jpg)' }} />
		</NavigationHeader>
		<Stack style={{ justifyContent: 'flex-start', minWidth: '50px', minHeight: '50px' }}>
			<Image style={{ width: 'calc(100% - 20px)', height: '210px', backgroundImage: 'url(/images/placeholder-02.jpg)' }} />
			<Stack style={{ flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
				<Paragraph style={{ width: 'calc(100% - 20px)', minHeight: '210px' }}>
					Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam convallis sapien sit amet arcu dictum at finibus est placerat aenean nunc urna interdum quis turpis non mattis viverra lorem in finibus ipsum vel lorem volutpat cursus nunc congue arcu
				</Paragraph>
				<Link to="/">
					<Button>
						BLOUP
					</Button>
				</Link>
			</Stack>
		</Stack>
	</Main>
);
