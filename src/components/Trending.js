import React, { Component } from 'react'
import ReactPlayer from "react-player";
import {FaHeart, FaHourglass, FaHourglassEnd} from 'react-icons/fa'
import { Row, Col, Card, CardColumns } from 'react-bootstrap'
import News2 from './News/News2';
import TH14 from '../../src/assets/TH14.jpg'

export default class Trending extends Component {
    render() {
        return (
            <div className="trending">
                <h3>Trending 📈</h3>
                <h5 id="kit" style={{marginBottom:"1rem"}}><b>The King gets inducted in the PL Hall of Fame! 🤴🏼</b></h5>
                <Row>
                    <Col lg={7} md={7} sm={12}>
                    {/* <ReactPlayer
                        style={{width: "auto"}}
                        url="https://www.youtube.com/watch?v=0sbBijhhvQ0?autoplay=1"
                    /> */}
                    <img src={TH14} alt="The King gets inducted in the PL Hall of Fame! (Source: @premierleague)" style={{width: "100%", height: "100%"}}/>
                    </Col>
                    <Col lg={5} md={5} sm={12}>
                        <p style={{textAlign: "left", fontSize: "1.125rem"}}>
                            <b>Congratulations to Thierry Henry, who is one of the first two players to be named in the official Premier League Hall of Fame. </b>
                            <br/>
                            <br/>
                            Our legend has been inducted alongside the league's leading scorer, Alan Shearer, after winning a record four Premier League Golden Boot awards during his eight-year stay in north London.
                            <br/>
                            <br/>
                            Henry scored a club-record 175 Premier League goals in 258 appearances for us, and netted more than 20 league goals in five consecutive seasons between 2001 and 2006 while 
                            winning the Premier League title twice and was a key member of our Invincibles team, who went unbeaten during the 2003/04 season. 
                            {/* The new strip will be worn on the pitch for the first time when we kick off the Premier League season against Fulham on Saturday.*/}
                            <br/>
                            <br/>
                            Seven more former Gunners - Tony Adams, Dennis Bergkamp, Sol Campbell, Ashley Cole, Robin van Persie, Patrick Vieira and Ian Wright
                             have been shortlisted for the Premier League's Hall of Fame.
                            <br/>
                            <br/>
                            Fans can vote for their favourite <span><a className="pl-vote" href="https://www.premierleague.com/hall-of-fame" target="_blank"><b>here</b></a></span>. The voting closes at 6pm (UK time) on May 9.
                            {/*The new shirt colours are intended to represent the lights and atmosphere that illuminate Emirates Stadium during a night match. The shirt pattern was created from a custom set of tie dye prints. */}
                        </p>
                    </Col>
                </Row>
            </div>
        )
    }
}
