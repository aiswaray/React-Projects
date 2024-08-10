import React from 'react';
import '../Styles/DownloadButtons.scss';
import googlePlayIcon from '../Assets/images/google-play.svg';
import appStoreIcon from '../Assets/images/app-store.svg';

const DownloadButtons = () => {
    return (
        <div className="download-buttons">
          <h2>Download SMN app now!</h2>
          <div className="icons">
            <img src={googlePlayIcon} alt="Google Play" className="download-icon" />
            <img src={appStoreIcon} alt="App Store" className="download-icon" />
          </div>
        </div>
      );
    }

export default DownloadButtons;