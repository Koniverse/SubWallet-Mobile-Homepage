import React from 'react';
import './App.css';
import MobileDetect from "mobile-detect";

const detect = new MobileDetect(navigator.userAgent, 1200);
const isAndroid = detect.os() === 'AndroidOS'
const isIOS = detect.os() === 'iOS'
const iOSLink = '#'
const androidLink = '#'

const openLink = function(url: string) {
    window.location.replace(url)
}
setTimeout(() => {
    if (isIOS) {
        openLink(iOSLink)
    } else if (isAndroid) {
        openLink(androidLink)
    }
}, 999)


function App() {
    return (
    <div className="app-wrapper">
      <header className="app-container">
        <div className="logo">
            <img src="/subwallet-logo.svg" alt="SubWallet"/>
        </div>
        <h4>Install SubWallet on your mobile device</h4>
      <div className="install-area">
        <a href={iOSLink} className='app-link'>
            <img alt="Download from App Store" src='/app-store-badge.png'/>
        </a>
        <a href={androidLink} className='app-link'>
            <img alt="Get it on Google Play" src='/google-play-badge.svg'/>
        </a>
      </div>
      </header>
    </div>
  );
}

export default App;
