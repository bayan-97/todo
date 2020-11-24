import React, { useState } from 'react';

// 1 create a context and export it to be used for consuming
export const SettingsContext = React.createContext();

function SettingsProvider(props) {
	const [ completed, setCompleted ] = useState(false);
	const [ itemsDisplay1, setItemsDisplay1 ] = useState(3);
	const [ sort, setSort ] = useState('difficulty');

	const state = {
		completed,
		setCompleted,
		itemsDisplay1,
		setItemsDisplay1,
		sort,
		setSort
	};

	return <SettingsContext.Provider value={state}>{props.children}</SettingsContext.Provider>;
}

export default SettingsProvider;
