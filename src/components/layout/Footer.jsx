import React from 'react';

const Footer = () => {
  return (
    <footer id='footer'>
      <div className="footer__inner">
        <div>
          <h3>email</h3>
          <a href="mailto:kde66034@gmail.com">kde66034@gmail.com</a>
        </div>
        <div>
          <h3>kakao</h3>
          <a href="/">kde66034</a>
        </div>
        <div>
          <h3>social</h3>
          <ul>
            <li><a href="/">youtube</a></li>
          </ul>
          <ul>
            <li><a href="/">instagram</a></li>
          </ul>
          <ul>
            <li><a href="/">github</a></li>
          </ul>
          <ul>
            <li><a href="/">blog</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;