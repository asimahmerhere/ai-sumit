import React from 'react';

export default function Footer() {
  return (
    <footer className="footer-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="footer-text">
                        <div className="ft-logo">
                            <a href="#home" className="footer-logo">
                                <img src="/img/ebp-logo.png" alt="EBP Logo" style={{ maxHeight: '90px', width: 'auto' }} />
                            </a>
                        </div>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#speakers">Speakers</a></li>
                            <li><a href="#schedule">Schedule</a></li>
                            <li><a href="#gallery">Gallery</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                        <div className="copyright-text">
                            <p>
                                Copyright &copy;{new Date().getFullYear()} All rights reserved | Education Bridge Pakistan
                            </p>
                        </div>
                        <div className="ft-social">
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-linkedin"></i></a>
                            <a href="#"><i className="fa fa-instagram"></i></a>
                            <a href="#"><i className="fa fa-youtube-play"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
}
