import React, { Component } from 'react'
import ReactPlayer from "react-player";
import {FaHeart, FaHourglass, FaHourglassEnd} from 'react-icons/fa'
import { Row, Col, Card, CardColumns } from 'react-bootstrap'
import News2 from './News/News2';
import kit from '../../src/assets/2122Away.jpg'
export default class Trending extends Component {
    render() {
        return (
            <div className="trending">
                <h3>Trending 📈</h3>
                <h5 id="kit" style={{marginBottom:"1rem"}}><b>The Cannon returns! 💛</b></h5>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                    {/* <ReactPlayer
                        style={{width: "auto"}}
                        url="https://www.youtube.com/watch?v=0sbBijhhvQ0?autoplay=1"
                    /> */}
                    <img src={kit} alt="Kieran Tierney dos the new away jersey." style={{width: "100%", height: "100%"}}/>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <p style={{textAlign: "left", fontSize: "1.125rem"}}>
                            <b>Arsenal launch their new away kit ahead of the 2021/22 season.</b>
                            <br/>
                            <br/>
                            50 years on from our momentous 1970/71 league and FA Cup double, we’re proud to present a new away kit inspired by the strip worn by our heroes.
                            <br/>
                            <br/>
                            The new kit will be worn for the first time by Arsenal Women in their Vitality Women's FA Cup tie against Crystal Palace on Sunday, May 16. 
                            The men’s team will also wear the new kit in their final away fixture of the season – also against Crystal Palace – on Wednesday, May 19.
                            <br/>
                            <br/>
                            The new kit is available to buy exclusively until May 20 at Arsenal Direct, our flagship Armoury store and official adidas stores.
                        </p>
                    </Col>
                </Row>
            </div>
        )
    }
}
