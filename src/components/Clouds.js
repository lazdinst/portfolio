import React from 'react'
import Skyline from './Skyline'
import { Container, Card, Image, Grid, Segment } from 'semantic-ui-react';

function Clouds() {
  return (
    <div className="paralax-cloud">
      <div className="wrapper-earth">
          <img className="earth" src='https://i.imgur.com/ZyzXD0g.png' />
      </div>
      <div className="paralax-title">Parallax Demo</div>
      <Container>
      <Grid columns={2} stackable>
      <Grid.Row columns={3}>
        <Grid.Column>
            Content
        </Grid.Column>
        <Grid.Column>
          <Segment>Content</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Content</Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
      </Container>
      <Skyline />
    </div>
  );
}
export default Clouds;