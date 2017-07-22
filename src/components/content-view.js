import React from 'react';
import Content0 from '../containers/content-containers/content0';
import Content1 from '../containers/content-containers/content1';
import Content2 from '../containers/content-containers/content2';
import Content3 from '../containers/content-containers/content3';
import Content4 from '../containers/content-containers/content4';
import Content5 from '../containers/content-containers/content5';
import Content6 from '../containers/content-containers/content6';
import Content7 from '../containers/content-containers/content7';
import Content8 from '../containers/content-containers/content8';
import Parallax from '../containers/parallax';
const h3Style = {
    textTransform: "uppercase",
    textShadow: "0 0 0"
}
class ContentView extends React.Component {

    render () {
      return (
        <div className="parallax">
                <Parallax />
                <section className="content-view animated slideInLeft slideInRight" id="1">
                        <h3 style={h3Style}>Home</h3>
                        <Content0 />
                </section>
                <br />
                <section className="content-view animated slideInLeft slideInRight" id="2">
                        <h3 style={h3Style}>About</h3>
                        <Content1 />
                </section>
                <br />
                <section className="content-view animated slideInLeft slideInRight" id="3">
                        <h3 style={h3Style}>Contact</h3>
                        <Content2 />
                </section>
                <br />
                <section className="content-view animated slideInLeft slideInRight" id="4">
                        <h3 style={h3Style}>Projects</h3>
                        <Content3 />
                </section>
                <br />
                <section className="content-view animated slideInLeft slideInRight" id="5">
                        <h3 style={h3Style}>Librarys</h3>
                        <Content4 />
                </section>
                <br />
                <section className="content-view animated slideInLeft slideInRight" id="6">
                        <h3 style={h3Style}>Proccessers</h3>
                        <Content5 />
                </section>
                <br />
                <section className="content-view animated slideInLeft slideInRight" id="7">
                        <h3 style={h3Style}>Languages</h3>
                        <Content6 />
                </section>
                <br />
                <section className="content-view animated slideInLeft slideInRight" id="8">
                        <h3 style={h3Style}>Frameworks</h3>
                        <Content7 />
                </section>
                <br />
                <section className="content-view animated slideInLeft slideInRight" id="9">
                        <h3 style={h3Style}>Ecosystem</h3>
                        <Content8 />
                </section>
        </div>
      )
    }
}

export default ContentView
