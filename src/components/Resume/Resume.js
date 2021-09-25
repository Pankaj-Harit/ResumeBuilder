import React, { Component } from 'react'
import DownloadIcon from '@mui/icons-material/Download';
import Navbar from '../NavBar/Navbar'
import './Resume.css'

export default class Resume extends Component {
    render() {
        return (
            <div className="Resume">
            <Navbar />
                <div className="Resume-Heading">
                    <h1>Resume</h1>
                    <p>_______________</p>
                </div>
                
                <div className="Resume-Details">
                    <div className="education">
                        <h2> Education</h2>
                        <div className="section">
                            <h3 className="institute-name">Secondary & Sr. Secondary Schooling =</h3>
                            <p>St. Michael's School</p>
                            <p>2007-2008</p>
                        </div>
                        <div className="section">
                            <h3 className="institute-name">Secondary & Sr. Secondary Schooling =</h3>
                            <p>St. Michael's School</p>
                            <p>2007-2008</p>
                        </div>
                        <div className="section">
                            <h3 className="institute-name">Secondary & Sr. Secondary Schooling =</h3>
                            <p>St. Michael's School</p>
                            <p>2007-2008</p>
                        </div>
                        <div className="section">
                            <h3 className="institute-name">Secondary & Sr. Secondary Schooling =</h3>
                            <p>St. Michael's School</p>
                            <p>2007-2008</p>
                        </div>
                    </div>                    

                    <div className="experience">
                        <h2> Experience -</h2>
                        <div className="section">
                            <h3 className="institute-name">Secondary & Sr. Secondary Schooling -</h3>
                            <p>St. Michael's School</p>
                            <p>2007-2008</p>
                        </div>
                        <div className="section">
                            <h3 className="institute-name">Secondary & Sr. Secondary Schooling -</h3>
                            <p>St. Michael's School</p>
                            <p>2007-2008</p>
                        </div>
                        <div className="section">
                            <h3 className="institute-name">Secondary & Sr. Secondary Schooling -</h3>
                            <p>St. Michael's School</p>
                            <p>2007-2008</p>
                        </div>
                        <div className="section">
                            <h3 className="institute-name">Secondary & Sr. Secondary Schooling</h3>
                            <p>St. Michael's School</p>
                            <p>2007-2008</p>
                        </div>
                    </div>
                </div>
                <div className="downloadcv">
                    <button className="downloadBtn" type="submit"> <DownloadIcon sx={{fontSize:20}}/>Download CV</button>
                </div>    
                
            </div>
        )
    }
}
