import React from 'react';
import './classschedule.css';
import Newsletter from '../../Newsletter';
import Footer from '../../Footer';

const ClassSchedule = () => {
  return (
    <>
      {/* Inner Heading Start */}
      <div className="innerHeading-wrap">
        <div className="container">
          <h1>Class Schedule</h1>
        </div>
      </div>
      {/* Inner Heading End */}

      {/* Inner Content Start */}
      <div className="innerContent-wrap">
        <div className="container">
          <div className="blog_inner bloggridWrp">
            <div className="row">
              <div className="col-lg-8">
                <div className="class_left">
                  <div className="class_Img">
                    <img src="/assets/images/class-schedule.jpg" alt="Class Schedule" />
                    <u>
                      <h2 className="school-name" style={{ textAlign: 'center' }}>Saint Arnold’s School</h2>
                    </u>
                    <u>
                      <h2 className="school-location" style={{ textAlign: 'center' }}>Salajpur – Belda</h2>
                    </u>
                    <br />
                    <p className="class-schedule-title">
                      <strong>Class Schedule for School</strong>
                    </p>
                    <table className="class-schedule-table table-separation">
                      <thead>
                        <tr className="header-row">
                          <th className="header-cell">Hour /Days</th>
                          <th className="header-cell">&nbsp;</th>
                          <th className="header-cell" colSpan="2">1</th>
                          <th className="header-cell">2</th>
                          <th className="header-cell">3</th>
                          <th className="header-cell">&nbsp;</th>
                          <th className="header-cell">4</th>
                          <th className="header-cell">5</th>
                          <th className="header-cell">6</th>
                          <th className="header-cell">&nbsp;</th>
                          <th className="header-cell">7</th>
                          <th className="header-cell">8</th>
                        </tr>
                        <tr className="header-row">
                          <th className="time-cell">Time</th>
                          <th className="time-cell">7.50 - 8.00 AM</th>
                          <th className="time-cell" colSpan="2">8.00 – 8.40 AM</th>
                          <th className="time-cell">8.40 – 9.20 AM</th>
                          <th className="time-cell">9.20 – 10.00 AM</th>
                          <th className="time-cell">10.00 – 10.20 AM</th>
                          <th className="time-cell">10.20 – 11.00 AM</th>
                          <th className="time-cell">11.00 – 11.40 PM</th>
                          <th className="time-cell">11.40 – 12.15 PM</th>
                          <th className="time-cell">12.15 – 12.20 PM</th>
                          <th className="time-cell">12.20 -12.55 PM</th>
                          <th className="time-cell">12.55 – 1.30 PM</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="day-cell">Monday</td>
                          <td className="assembly-cell" rowSpan="5">Morning

Assembly&nbsp;</td>
                          <td className="empty-cell" colSpan="2">&nbsp;</td>
                          <td className="empty-cell">&nbsp;</td>
                          <td className="empty-cell">&nbsp;</td>
                          <td className="tiffin-break-cell" rowSpan="5">Tiffin Break&nbsp;</td>
                          <td className="empty-cell">&nbsp;</td>
                          <td className="empty-cell">&nbsp;</td>
                          <td className="short-break-cell" rowSpan="5">Short Break&nbsp;</td>
                          <td className="empty-cell">&nbsp;</td>
                          <td className="empty-cell">&nbsp;</td>
                        </tr>
                        <tr>
                          <td className="day-cell">Tuesday</td>
                          <td className="empty-cell" colSpan="2">&nbsp;</td>
                          <td className="empty-cell">&nbsp;</td>
                          <td className="empty-cell">&nbsp;</td>
                          <td className="empty-cell">&nbsp;</td>
                          <td className="empty-cell">&nbsp;</td>
                          <td className="empty-cell">&nbsp;</td>
                        </tr>
                        <tr>
                          <td className="day-cell">Wednesday</td>
                          <td className="empty-cell" colSpan="2">&nbsp;</td>
                          <td className="empty-cell">&nbsp;</td>
                          <td className="empty-cell">&nbsp;</td>
                          <td className="empty-cell">&nbsp;</td>
                          <td className="empty-cell">&nbsp;</td>
                          <td className="empty-cell">&nbsp;</td>
                        </tr>
                        <tr>
                          <td className="day-cell">Thursday</td>
                          <td className="empty-cell" colSpan="2">&nbsp;</td>
                          <td className="empty-cell">&nbsp;</td>
                          <td className="empty-cell">&nbsp;</td>
                          <td className="empty-cell">&nbsp;</td>
                          <td className="empty-cell">&nbsp;</td>
                          <td className="empty-cell">&nbsp;</td>
                        </tr>
                        <tr>
                          <td className="day-cell">Friday</td>
                          <td className="empty-cell" colSpan="2">&nbsp;</td>
                          <td className="empty-cell">&nbsp;</td>
                          <td className="empty-cell">&nbsp;</td>
                          <td className="empty-cell">&nbsp;</td>
                          <td className="empty-cell">&nbsp;</td>
                          <td className="empty-cell">&nbsp;</td>
                        </tr>
                        <tr>
                          <td className="day-cell">Saturday</td>
                          <td className="assembly-cell">Assembly</td>
                          <td className="activity-cell">Class Test</td>
                          <td className="activity-cell" colSpan="3">Activity – 1</td>
                          <td className="tiffin-break-cell">Tiffin Break</td>
                          <td className="activity-cell" colSpan="2">Activity – 2</td>
                          <td className="activity-cell">Activity - 3</td>
                          <td className="empty-cell" colSpan="3">&nbsp;</td>
                        </tr>
                        <tr>
                          <td className="empty-row" colSpan="13">&nbsp;</td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="class-schedule-title">
                      <strong>Class Schedule for Pre-primary (Nursery, KG -1, KG -2)</strong>
                    </p>
                    <table className="class-schedule-table table-separation">
                      <thead>
                        <tr className="header-row">
                          <th className="header-cell">Hour / Days</th>
                          <th className="header-cell">&nbsp;</th>
                          <th className="header-cell">1</th>
                          <th className="header-cell">2</th>
                          <th className="header-cell">&nbsp;</th>
                          <th className="header-cell">3</th>
                          <th className="header-cell">4</th>
                        </tr>
                        <tr className="header-row">
                          <th className="time-cell">Time</th>
                          <th className="time-cell">7.50 – 8.00 AM</th>
                          <th className="time-cell">8.00 – 8.40 AM</th>
                          <th className="time-cell">8.40 – 9.20 AM</th>
                          <th className="time-cell">9.20 – 9.45 AM</th>
                          <th className="time-cell">9.45 – 10.25 AM</th>
                          <th className="time-cell">10.25 – 11.00 PM</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="day-cell">Monday</td>
                          <td className="assembly-cell" rowSpan="5">Short Break&nbsp;</td>
                          <td className="empty-cell">&nbsp;</td>
                          <td className="empty-cell">&nbsp;</td>
                          <td className="tiffin-break-cell" rowSpan="6">Tiffin Break&nbsp;</td>
                          <td className="empty-cell">&nbsp;</td>
                          <td className="empty-cell">&nbsp;</td>
                        </tr>
                        <tr>
                          <td className="day-cell">Tuesday</td>
                          <td className="empty-cell">&nbsp;</td>
                          <td className="empty-cell">&nbsp;</td>
                          <td className="empty-cell">&nbsp;</td>
                          <td className="empty-cell">&nbsp;</td>
                        </tr>
                        <tr>
                          <td className="day-cell">Wednesday</td>
                          <td className="empty-cell">&nbsp;</td>
                          <td className="empty-cell">&nbsp;</td>
                          <td className="empty-cell">&nbsp;</td>
                          <td className="empty-cell">&nbsp;</td>
                        </tr>
                        <tr>
                          <td className="day-cell">Thursday</td>
                          <td className="empty-cell">&nbsp;</td>
                          <td className="empty-cell">&nbsp;</td>
                          <td className="empty-cell">&nbsp;</td>
                          <td className="empty-cell">&nbsp;</td>
                        </tr>
                        <tr>
                          <td className="day-cell">Friday</td>
                          <td className="empty-cell">&nbsp;</td>
                          <td className="empty-cell">&nbsp;</td>
                          <td className="empty-cell">&nbsp;</td>
                          <td className="empty-cell">&nbsp;</td>
                        </tr>
                        <tr>
                          <td className="day-cell">Saturday</td>
                          <td className="holiday-cell" colSpan="3">Holiday</td>
                          <td className="holiday-cell" colSpan="2">Holiday</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-widgets widget_category">
                  <h4>Highlights</h4>
                  <ul className="property_sec">
                    <li className="highlight-item">
                      <div className="highlight-img">
                        <img src="/assets/images/gallery-1.jpg" alt="Gallery 1" />
                      </div>
                      <div className="highlight-info">
                        <h4><a href="#">English Classroom</a></h4>
                        <p>Lorem ipsum dolor sit amet, adipiscing elit.</p>
                      </div>
                    </li>
                    <li className="highlight-item">
                      <div className="highlight-img">
                        <img src="/assets/images/gallery-2.jpg" alt="Gallery 2" />
                      </div>
                      <div className="highlight-info">
                        <h4><a href="#">English Classroom</a></h4>
                        <p>Lorem ipsum dolor sit amet, adipiscing elit.</p>
                      </div>
                    </li>
                    <li className="highlight-item">
                      <div className="highlight-img">
                        <img src="/assets/images/gallery-3.jpg" alt="Gallery 3" />
                      </div>
                      <div className="highlight-info">
                        <h4><a href="#">English Classroom</a></h4>
                        <p>Lorem ipsum dolor sit amet, adipiscing elit.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="single-widgets widget_category archives-widget">
                  <h4>Archives</h4>
                  <ul className="categories">
                    <li><a href="#">May 2020 </a></li>
                    <li><a href="#">February 2019 </a></li>
                    <li><a href="#">August 2018 </a></li>
                  </ul>
                </div>
                <div className="single-widgets tags-widget">
                  <h4>Tags</h4>
                  <ul className="tags">
                    <li><a href="#">School</a></li>
                    <li><a href="#">Study</a></li>
                    <li><a href="#">English</a></li>
                    <li><a href="#">Parents</a></li>
                    <li><a href="#">Sports</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Teachers</a></li>
                    <li><a href="#">Art</a></li>
                    <li><a href="#">Meetings</a></li>
                    <li><a href="#">Design</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Inner Content End */}

      {/* Newsletter Start */}
      <Newsletter />
      {/* Newsletter End */}

      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </>
  );
};

export default ClassSchedule;
