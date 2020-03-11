/**
  This CodeSandbox has been automatically generated using
  `codesandboxer`. If you're curious how that happened, you can
  check out our docs here: https://github.com/codesandbox/codesandboxer

  If you experience any struggles with this sandbox, please raise an issue
  on github. :)
*/
import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './routes';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<Navigation />,
document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

// if ('serviceWorker' in navigator) {
//   console.log('CLIENT: service worker registration in progress.');
//   navigator.serviceWorker.register('/service-worker.js').then(function() {
//     console.log('CLIENT: service worker registration complete.');
//   }, function() {
//     console.log('CLIENT: service worker registration failure.');
//   });
// } else {
//   console.log('CLIENT: service worker is not supported.');
// }