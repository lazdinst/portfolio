import React, { Component } from 'react';
import _ from 'lodash'
import { summaryContent, profileImage } from '../data/summary';
import Space from './Space'
import Clouds from './Clouds'
import SocialMedia from './SocialMedia'
import Skyline from './Skyline'
import WorkExperience from './WorkExperience'
import {
  Container, Divider, Dropdown, Grid, Header, Icon, Image, List, Menu, Segment, Visibility,
} from 'semantic-ui-react'

const menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  marginBottom: '1em',
  marginTop: '4em',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease',
}

const fixedMenuStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
}

export default class ContentHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuFixed: false,
      overlayFixed: false,
    }
  }

  handleOverlayRef = (c) => {
    const { overlayRect } = this.state

    if (!overlayRect) this.setState({ overlayRect: _.pick(c.getBoundingClientRect(), 'height', 'width') })
  }
  stickTopMenu = () => this.setState({ menuFixed: true })
  unStickTopMenu = () => this.setState({ menuFixed: false })

  render() {
    const { menuFixed, overlayRect } = this.state;
    const summaryText = summaryContent.map((content) => {return <div><p style={{paddingBottom: '1rem'}}>{content}</p></div>});
    return (
      <div>
        <div className="space">
          <Space/>
          <div className="tmoney">Talis Lazdins</div>
          <Container text>
            <div className="tmoney-summary">
              {summaryText}
            </div>
            <SocialMedia />
          </Container>
        </div>
        <Clouds />
        <WorkExperience />
        <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}
        >
          <Menu
            borderless
            fixed={menuFixed && 'top'}
            style={menuFixed ? fixedMenuStyle : menuStyle}
          >
            <Container text>
              <Menu.Item>
                <Image size='mini' src='/logo.png' />
              </Menu.Item>
              <Menu.Item header>Talis A. Lazdins</Menu.Item>
              <Menu.Item as='a'>Blog</Menu.Item>
              <Menu.Item as='a'>Articles</Menu.Item>

              <Menu.Menu position='right'>
                <Dropdown text='Dropdown' pointing className='link item'>
                  <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>Header Item</Dropdown.Header>
                    <Dropdown.Item>
                      <i className='dropdown icon' />
                      <span className='text'>Submenu</span>
                      <Dropdown.Menu>
                        <Dropdown.Item>List Item</Dropdown.Item>
                        <Dropdown.Item>List Item</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Menu>
            </Container>
          </Menu>
        </Visibility>
      </div>
    );
  }
}