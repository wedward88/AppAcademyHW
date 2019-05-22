import React from 'react';
import { Provider } from 'react-redux';

import GiphysSearchContainer from './giphys_search_container';

const Root = ({ store }) => {
    return (
        <Provider store={store}>
            <GiphysSearchContainer store={store} />
        </Provider>
    );
};

export default Root;