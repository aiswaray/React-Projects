import React from 'react';
import '../Styles/FooterCopyright.scss'


const FooterCopyright = () => {
  return (
    <div className="footer">
      <p className='footer-cnt'>
        {new Date().getFullYear()}@All rights reserved to technologies.ae
      </p>
    </div>
  )
}

export default FooterCopyright;