import React from 'react';
import ReactDOM from 'react-dom';
import Root from './frontend/Root'

document.addEventListener('DOMContentLoaded', ()=> {
    const main = document.getElementById("main")
    ReactDOM.render(<Root/>, main)
})