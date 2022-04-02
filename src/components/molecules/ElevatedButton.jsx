import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import Text from '../atoms/Text';
import { classNames } from '../../utils';

function ElevatedButton(props) {
	return (
		<Link
			to={props.to ? props.to :  "#"}
			target={props.external ? "_blank" : ""}
			className={classNames(
				'rounded-md inline-flex items-center justify-center border border-transparent bg-indigo-600 hover:bg-indigo-700 drop-shadow-xl',
				props.className,
				props.compact ? 'px-4 py-1' : 'px-8 py-3 md:py-4 md:px-10'
			)}
		>
			<Text button className="text-white">
				{props.children}
			</Text>
		</Link>
	);
}

ElevatedButton.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	compact: PropTypes.bool,
	to: PropTypes.string,
	external: PropTypes.bool
};

export default ElevatedButton;
