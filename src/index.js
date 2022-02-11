import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  // <>
  //   {/* <div className="image" id="logo">
  //   <img src="https://www.iaspaper.net/wp-content/uploads/2018/08/Charusat.png" id="charusatImage" style={{float:'left'}} width="100px" height="100px"/>
  //   </div> */}
  //
  //   <div className="Header">
  //
  //   <img src="https://www.iaspaper.net/wp-content/uploads/2018/08/Charusat.png" id="charusatImage" style={{float:'left'}} width="100px" height="100px"/>
  //     <a href="https://www.google.com" target="_blank" style={{color:"black",textDecoration:"none"}}>
  //     <p style={{textAlign:"right"}}>About Us</p>
  //     </a>
  //
  //     <a href="https://www.youtube.com" target="_blank" style={{marginLeft:"20px",color:'black',textDecoration:"none"}}  ><p>Login</p></a>
  //     <a style={{marginLeft:"20px",color:'black',textDecoration:"none"}} href="https://www.netflix.com" target="_blank">Director's Message</a>
  //   </div>
  //   <div className="second">
  //     <img src="https://lh3.googleusercontent.com/proxy/7vfTx2WwwaD3pXy7vCCkNeqt5Y_I-x-WuZQRboU1HK6XBsdcJqp2IKvxgTUQF87XIePN3x8AhO6nF10Ca7lu9J0WaH4Xb8DYmVFeF2RqYx_tOb7SkHbJ0pMusEkrUylH4idfkaE" id="charusatMain"/>
  //   </div>
  // </>
    <>
        <meta charSet="utf-8" />
        <title>Udemy</title>
        {/*<link rel="stylesheet" href="css/styles.css" />*/}
        <link rel="stylesheet" href="/src/index.css" />
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
            rel="stylesheet"
            type="text/css"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <div className="app-row">
            <a href="index.html">
                <img
                    className="udemy-logo"
                    alt="Udemy"
                    width={91}
                    height={34}
                    src="/images/UDEMY.png"
                />
            </a>
            <h4 className="title">| The Complete 2022 Web Development Bootcamp</h4>
            <a href="#">
                <img className="progress" src="/images/trophy.png" alt="progress-img" />
            </a>
            <h4 className="progress-title">Your Progress</h4>
            <a className="css-button">
      <span className="css-button-icon">
        <i className="fa fa-share" aria-hidden="true" />
      </span>
                <span className="css-button-text">Share</span>
            </a>
        </div>
        <div className="grid-container">
            <div className="grid-item1">
                <video controls="" className="video">
                    {/*<source src="videos/video1.mp4" type="video/mp4" />*/}
                    <source src="/videos/video1.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="grid-item2">
                <h2>Course content</h2>
                <div className="vertical-menu">
                    <a href="#" className="active">
                        Home
                    </a>
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                    <a href="#">Link 4</a>
                    <a href="#">Link 5</a>
                    <a href="#">Link 6</a>
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                    <a href="#">Link 4</a>
                    <a href="#">Link 5</a>
                    <a href="#">Link 6</a>
                </div>
            </div>
        </div>
    </>

    ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

