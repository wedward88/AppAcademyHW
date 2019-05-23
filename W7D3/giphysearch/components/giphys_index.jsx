import React from 'react';
import GiphysIndexItem from './giphys_index_item';

const giphyIndex = (props) => {
    
    let gifs = null;
    if (props.giphyArr.length > 0) {
        gifs = props.giphyArr.map((gif, idx)=> (<li key={idx}><img src={gif.bitly_url}/></li>))
    }
    return (
        <ul>
            {gifs}
        </ul>
    )
};

export default giphyIndex;