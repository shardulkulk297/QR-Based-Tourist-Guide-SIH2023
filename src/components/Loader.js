/** @format */

import React from "react";

const Loader = ({ loaderMessage }) => {
	return (
		<div className="loader-container">
			<div className="wave-loader-conatiner">
				<div className="circle circle-1"></div>
				<div className="circle circle-2"></div>
				<div className="circle circle-3"></div>
				<div className="circle circle-4"></div>
				<div className="circle circle-5"></div>
				<div className="circle circle-6"></div>
			</div>
			{loaderMessage ? <h3>{loaderMessage}</h3> : null}
		</div>
	);
};

export default Loader;
