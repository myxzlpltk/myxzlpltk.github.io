import { Link } from 'react-scroll';
import PropTypes from 'prop-types';
import React from 'react';
import Text from '../atoms/Text';
import { classNames } from '../../utils';

function NavItem(props) {
	return (
		<Link
			key={props.name}
			to={props.href}
			activeClass="bg-indigo-900 text-white"
			className={classNames(
				'hover:bg-indigo-500 hover:text-white',
				props.block ? 'block w-full' : 'inline-block',
				'px-3 py-2 rounded-md cursor-pointer'
			)}
			spy={true} smooth={true} offset={-64} duration={500}
		>
			<Text className="font-sourceCodePro text-sm font-medium">{props.name}</Text>
		</Link>
	);
}

NavItem.propTypes = {
	name: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
	block: PropTypes.bool
};

export default NavItem;
