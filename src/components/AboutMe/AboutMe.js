import React, { Component } from 'react'
import Valerie from '../../images/Valerie.png'
import Navbar from '../NavBar/Navbar'
import './AboutMe.css'
export default class AboutMe extends Component {
    render() {
        return (
            <div className="AboutMe">
                <Navbar />
                <div className="Image">
                <img src={Valerie} alt="" />
                </div>

                <div className="About_Details">
                    <h3 className="Heading"><p>More About Myself</p><p>____________</p></h3>
                    <div className="About_intro">
                        <h2> I'm <span>Samantha Williams</span>, a UI/UX Designer/Develper.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Placeat odio corporis, accusamus, recusandae aperiam labore omnis 
                         perspiciatis suscipit ea veniam hic enim incidunt dolores quis explicabo
                         quas velit soluta sed!</p>
                    </div>
                    <h2>Skills -</h2>
                    <div className="Skills">
                    
                        <div className="Skills_1">
                            <p>Web Design -</p>
                            <p>Intermediate</p>
                            <p>____________________________________</p>
                            <p>Angular -</p>
                            <p>Beginner</p>
                            <p>____________________________________</p>
                            <p>Bootstrap -</p>
                            <p>Intermediate</p>
                            <p>____________________________________</p>
                        </div>
                        <div className="Skills_2">
                            <p>React js -</p>
                            <p>Expert</p>
                            <p>____________________________________</p>
                            <p>HTMl/CSS -</p>
                            <p>Expert</p>
                            <p>____________________________________</p>
                            <p>Vue -</p>
                            <p>Beginner</p>
                            <p>____________________________________</p>
                        </div>
                    </div>

                    <div className="footer">
                        <div className="footer_1"><p>5</p><p>year of Experience</p></div>
                        <div className="footer_1"><p>35</p><p>Project Done</p></div>
                        <div className="footer_1"><p>40</p><p>Clients</p></div>
                    </div>

                </div>
            </div>
        )
    }
}

