import React, {Component} from 'react'
//import {View} from 'react-native'
import Jumbotron from 'react-bootstrap/Jumbotron'
import './darkmode.css'
import './pages.css'

import Profile from './Profile.js'
import Biotext from './Biotext.js'
import Contact from './Contact.js'
import ProjectsPage from './ProjectsPage.js'
import Login from './Login.js'
import ToggleProj from './ToggleProj.js'
import ToggleLeft from './ToggleLeft.js'
import ToggleRight from './ToggleRight.js'
import ToggleB from './ToggleB.js'
import UserInfo from './userInfo.js'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { Link } from 'react-router-dom'

import ChaoHover from './chaohover.png'
import RonHover from './ronhover.png'
import MusHover from './mushover.png'
import XuHover from './xuhover.png'
import MengHover from './menghover.png'
import { ToggleButton } from 'react-bootstrap'
import { Image } from 'react-native';


//import axios from 'axios'
//import {clientBanner} from './clientbanner.jpg'
//const clientBanner = "../../src/pages/clientbanner.jpg";


class HomePage extends Component {
  state = {
    galleryItems: [
    <img src="/image/ChaoWei.jpg" alt="chaowei"
      onMouseOver={e => (e.currentTarget.src = ChaoHover)}
      onMouseLeave={e => (e.currentTarget.src = "/image/ChaoWei.jpg")}/>,
    <img src="/image/Mengyan.jpg" alt="mengyan"
      onMouseOver={e => (e.currentTarget.src = MengHover)}
      onMouseLeave={e => (e.currentTarget.src = "/image/Mengyan.jpg")}/>,
    <img src="/image/MustafaFullBody.jpg" alt="mustafa"
      onMouseOver={e => (e.currentTarget.src = MusHover)}
      onMouseLeave={e => (e.currentTarget.src = "/image/MustafaFullBody.jpg")}/>,
    <img src="/image/Ron.jpg" alt="ron"
    onMouseOver={e => (e.currentTarget.src = RonHover)}
    onMouseLeave={e => (e.currentTarget.src = "/image/Ron.jpg")}/>,
    <img src="/image/Xu.jpg" alt="xuhan"
    onMouseOver={e => (e.currentTarget.src = XuHover)}
    onMouseLeave={e => (e.currentTarget.src = "/image/Xu.jpg")}/>
     ].map((i) => <h2 key={i}>{i}</h2>),
     colourMode: "",
  }

    // Keep the below definition, and always remember to provide a return to default option in the colour buttons
  // Make a new function for each colourscheme like the one below
  //
  //  setDarkMode= () => {
  //    this.setState({colourMode: 'Dark'});
  //  };
  //
  // And don't forget to add a button like below referencing your new switch function
  //
  // <button onClick={this.setDarkMode}>Set Dark Mode</button>
  //
  // And remember your default button!
  //
  // <button onClick={this.setDefaultMode}>Set default Mode</button>


  setDefaultMode = () => {
    this.setState({colourMode: ""})
  };

  setDarkMode= () => {
    this.setState({colourMode: "Dark"})
  };

  responsive = {
    0: { items: 1 },
    1024: { items: 3 },
  }

  stagePadding =   {
    paddingLeft: 500,     // in pixels
    paddingRight: 25
  }

  style = {
    display: 'flex',
    justifyContent: 'space-between',
    zIndex: 10,
    distanceFromBottom: 0,
    marginLeft:1000,
    fontFamily: 'Arial',
    fontSize: 25,
    align: 'right',
    position: 'fixed',
    color: '#8B008B'
  }


render () {
    return (
      <div className = {"fullPage" + this.state.colourMode}>

        <div className = "buttonBox">
        <button className = {"modeButton" + this.state.colourMode} onClick={this.setDefaultMode}>Set default Mode</button>
        <button className = {"modeButton" + this.state.colourMode} onClick={this.setDarkMode}>Set Dark Mode</button>
        </div>

        <Jumbotron className = {"banner" + this.state.colourMode}>
        <div className = "borderTitle">
          <div className = {"maintitle" + this.state.colourMode}>
          <h1>CRXMM </h1>
          </div>
          </div>
          {/*<p> really awesome people </p>*/}
        </Jumbotron>



        <div className = {"alice" + this.state.colourMode}>
        <AliceCarousel className = {"alice" + this.state.colourMode}
        items={this.state.galleryItems}
        responsive={this.responsive}
        controlsStrategy="responsive"
        autoPlayInterval={2000}
        autoPlayDirection="ltr"
        autoPlay={true}
        fadeOutAnimation={true}
        /*mouseTrackingEnabled={true}*/
        playButtonEnabled={true}
        /*disableAutoPlayOnAction={true}*/
        stopAutoPlayOnHover={false}
        onSlideChange={this.onSlideChange}
        onSlideChanged={this.onSlideChanged}
        buttonsDisabled={true}
        />
        </div>


        <div className = {"divider" + this.state.colourMode}>
        <div className= {"dividerTitleSmall" + this.state.colourMode}>
        <h1> Harry - Ron - Mustafa - Kelly - Zoe -</h1>
        </div>
        </div>

        <div className={"punk" + this.state.colourMode}>
          <Image  source="/image/logo.jpg" style={{width: 291.5, height: 107.9}}/>
        </div>

        <div className = {"aboutTriangle secondColor"+this.state.colourMode}>
            <div className={"intro" + this.state.colourMode}>
            <div className = {"quote1"+ this.state.colourMode}>“</div>
            <div className = "quote">Hi, this is
            CRXMM. We are a team of
            5 from the University of Melbourne.
            While we have different backgrounds,
            different passions, and are even in
            different timezones, we are in unity.
            As individuals we are
            strong, but together we are incredible.
          </div>
          <div className = {"quote2"+ this.state.colourMode}>”</div>
          </div>
        </div>

        {/*<ToggleB>hello</ToggleB>*/}


        <ToggleProj colourMode = {this.state.colourMode}>

      </ToggleProj>

      <div className="solid"><br/></div>

      <div className={"title" + this.state.colourMode} id="whoweare">Who we are</div>

      <div className="solid1"><br/></div>
        {/*first person*/}
        <ToggleLeft colourMode = {this.state.colourMode} name = "ChaoWei"/>
        <div className="solid1"><br/></div>
        {/*second person*/}
        <ToggleRight colourMode = {this.state.colourMode} name = "Ron"/>
        <div className="solid1"><br/></div>
        {/*third person*/}
        <ToggleLeft colourMode = {this.state.colourMode} name = "Mustafa"/>
        <div className="solid1"><br/></div>
        {/*fourth person*/}
        <ToggleRight colourMode = {this.state.colourMode} name = "Xu"/>
        {/*fifth person*/}
        <div className="solid1"><br/></div>
        <ToggleLeft colourMode = {this.state.colourMode} name = "Mengyan"/>
        <div className="solid1"><br/></div>
        <div className={"getInTouchHeader" + this.state.colourMode}>Contact Us</div>
        <Contact colourMode = {this.state.colourMode} />

        <div className= {"footer" + this.state.colourMode}><p>last edited: 21/10/2020</p></div>



      </div>

    )
  }
}

export default HomePage;
