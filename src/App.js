import logo from './logo.svg';
import './App.css';
// import     <link
// rel="stylesheet"
// href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
// integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
// crossorigin="anonymous"
// referrerpolicy="no-referrer"
// />

function App() {
    
    return (
        <div className="container">
            <div className="title">
                <img src="../images/IMG-20230306-WA0002[5].jpg" alt="" />
                <h3>ssbl<span>iss</span></h3>
            </div>
            <button className='btn'>
                <h2>+91 9159073070</h2>
            </button>
            <div className="header">
                <h3>room booking procedure</h3>
                <ul>
                    <li>Room will be allotted only for minimum 3 persons and to the maximum 12 persons</li>
                    <li>Room will not be allotted for Single occupancy</li>
                    <li>Original ID required at the time room allotment.</li>
                    <li>Cancellation or Postponement is not available</li>
                    <li>The room will be allotted for 24 hours.</li>
                </ul>
            </div>

            <div className="table">
                <div className="tableone">
                    <table border="1px" cellSpacing="0">
                        <tr>
                            <th>s.no</th>
                            <th>cottage name</th>
                            <th>type</th>
                            <th>price per day</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Karthikeyan illam</td>
                            <td>single bedroom </td>
                            <td>R.S.200</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Karthikeyan illam</td>
                            <td>double bed room</td>
                            <td>R.S.400</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Karthikeyan illam</td>
                            <td>Cottage</td>
                            <td>R.S.750</td>
                        </tr>

                    </table>
                </div>
                <div className="tabletwo">
                    <table border="1px" cellSpacing="0">
                        <tr>
                            <th>s.no</th>
                            <th>cottage name</th>
                            <th>type</th>
                            <th>price per day</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Thanigai Illam</td>
                            <td>single bedroom</td>
                            <td>R.S.250</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Thanigai illam</td>
                            <td>double bed room</td>
                            <td>R.S.400</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Thanigai illam</td>
                            <td>Cottage</td>
                            <td>R.S.750</td>
                        </tr>

                    </table>
                </div>
                <div className='tablethree'>
                    <h3>thiruttani private rooms</h3>
                    <table border="1px" cellSpacing="0">
                        <tr>
                            <th>s.no</th>
                            <th>place</th>
                            <th>room type</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>hill top</td>
                            <td>Ac 2000/- <br />
                                <hr />Non Ac 1500/-
                            </td>

                        </tr>
                        <tr>
                            <td>2</td>
                            <td>hill top</td>
                            <td>Ac 2000 /-<br />
                                <hr />Non Ac 1500 /-
                            </td>


                        </tr>
                    </table>
                </div>
                <div className='footer'>
                    <h4>pre booking</h4>
                    <ul>
                        <li>need to cary recipt of online booking</li>
                        <li>rooms couldn't be provided for single person </li>
                        <li>minimum 3 members</li>
                    </ul>
                </div>

            </div>
            <div className='social'>
                <div>
                    <a href='https://www.facebook.com/profile.php?id=100083804299335&mibextid=ZbWKwL'><img src='../images/facebook (1).svg' alt='' />  <p>facebook</p></a>

                </div>
                <div>

                    <a href='https://instagram.com/sri_sai_bliss?igshid=ZDdkNTZiNTM='><img src='../images/instagram (1).svg' alt='' />   <p>instagram</p></a>

                </div>
                <div>
                    <a href='https://g.co/kgs/bcWfsj'><img src='../images/location-dot-solid.svg' alt='' />     <p>location</p></a>

                </div>


            </div>
            <div>
                <a href="https:/wa.me/6369687711" className="wtsapp"  ><img src='../images/whatsapp.svg' alt='' /></a>

            </div>




        </div>

    );
}

export default App;
