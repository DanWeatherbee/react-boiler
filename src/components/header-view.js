import React from 'react';
import HomeImg from '../images/image1.jpg';

const style = {
    width: "100%",
    height: "100%"
}
class HeaderView extends React.Component {

    render () {return <img style={style} src={HomeImg}/>}

}

export default HeaderView
