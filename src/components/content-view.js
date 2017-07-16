import React from 'react';
import Content from '../containers/content';

class ContentView extends React.Component {

    render () {
      return (
        <div>
                <section className="content-view" id="1">
                        <h3>Header 1</h3>
                        <Content />
                </section>
                <br />
                <section className="content-view" id="2">
                        <h3>Header 2</h3>
                        <Content />
                </section>
                <br />
                <section className="content-view" id="3">
                        <h3>Header 3</h3>
                        <Content />
                </section>
                <br />
                <section className="content-view" id="4">
                        <h3>Header 4</h3>
                        <Content />
                </section>
                <br />
                <section className="content-view" id="5">
                        <h3>Header 5</h3>
                        <Content />
                </section>
                <br />
                <section className="content-view" id="6">
                        <h3>Header 6</h3>
                        <Content />
                </section>
                <br />
                <section className="content-view" id="7">
                        <h3>Header 7</h3>
                        <Content />
                </section>
                <br />
                <section className="content-view" id="8">
                        <h3>Header 8</h3>
                        <Content />
                </section>
                <br />
                <section className="content-view" id="9">
                        <h3>Header 9</h3>
                        <Content />
                </section>
        </div>
      )
    }
}

export default ContentView
