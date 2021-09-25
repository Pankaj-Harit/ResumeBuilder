import React, { Component } from 'react'
import IconImage from '../../images/IconImage.png'
import './ImageIcon.css'
export default class ImageIcon extends Component {
    render() {
        return (
            <div className="ImageIcon">
                <img src={IconImage} alt=""  />
                <p>Samantha Williams</p>
            </div>
        )
    }
}
