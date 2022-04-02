import PropTypes from 'prop-types';
import React from 'react';
import { classNames } from '../../utils';

function FadeImage(props) {
	return (
		<div className="fade-image">
			<img src={props.src} alt={props.alt} className={classNames('w-100', props.className)} />
		</div>
	);
}

FadeImage.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	className: PropTypes.string
};

export default FadeImage;
