import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


export const FooterComponent = () => {
  return (
    <div>
      <footer className="new_footer_area bg_color">
        <div className="new_footer_top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div
                  className="f_widget social-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.8s"
                  style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInLeft' }}
                >
                  <h3 className="f-title f_600 t_color f_size_18">Contact me</h3>
                  <div className="f_social_icon">
                    <a href="https://www.facebook.com/share/z9wczaeFcA1bxZhE/?mibextid=LQQJ4d" className="fab fa-facebook"></a>
                    <a href="#" className="fab fa-twitter"></a>
                    <a href="https://www.linkedin.com/in/sahiru-deshan-weerapperuma-b9a346318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="fab fa-linkedin"></a>
                    <a href="https://github.com/weerapperuma" className="fab fa-github"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer_bg">
            <div className="footer_bg_one"></div>
            <div className="footer_bg_two"></div>
          </div>
        </div>

        <div className="footer_bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-7">
                <p className="mb-0 f_400">© penguin Inc.. 2024 All rights reserved.</p>
              </div>
              <div className="col-lg-6 col-sm-5 text-right">
                <p>
                  Made <i className="icon_heart"></i> by{' '}
                  <a href="https://github.com/weerapperuma" target="_blank" rel="noopener noreferrer">
                    weerapperuma
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
