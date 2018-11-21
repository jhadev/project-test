import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const LeftNav = (props) => {
  return (
    <SideNav
    onSelect={(selected) => {
       
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                About Us
            </NavText>
        </NavItem>
        <NavItem eventKey="charts">
            <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Walmart
            </NavText>
            <NavItem eventKey="charts/linechart">
                <NavText>
                    Budget
                </NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
                <NavText>
                    Another thing
                </NavText>
            </NavItem>
        </NavItem>
    </SideNav.Nav>
</SideNav>
  )
}

export default LeftNav;