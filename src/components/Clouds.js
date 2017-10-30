import React from 'react'
import Skyline from './Skyline'
import { Container, Card, Image, Grid, Segment, Icon, Label, Header } from 'semantic-ui-react';

function Clouds() {
  return (
    <div className="paralax-cloud">
      <div className="wrapper-earth">
        <img className="earth" src='https://i.imgur.com/ZyzXD0g.png' />
      </div>
      <Container>
      <Grid columns={2} stackable>
      <Grid.Row columns={3}>
        <Grid.Column>
          <Segment raised>
            <Label color='blue' ribbon>
              <h4>Front End Infrastructure</h4>
            </Label>
            <Image centered size='medium' src='https://i.imgur.com/Jnvb8dr.png' />
            <h5>
              Hack Reactor
            </h5>
            <ul>
              <li>React</li>
              <li><Redux/li>
              <li>HTML5</li>
            </ul>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment raised>
          <Label as='a' color='teal' ribbon>Server Side Requests</Label>
            <Image centered size='medium' src='https://i.imgur.com/qnMLbze.png' />
            <div>
              Server Request Management
              - Node
              - Express
              - Passport
              - Requests
            </div>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment raised>
          <Label as='a' color='green' ribbon>Database Development & Querying</Label>
            <Image centered size='medium' src='https://i.imgur.com/K6GLU25.png' />
            <div>
              - MySQL, PostgreSQL,
              - Sequelize, Bookshelf, Knex
              - MongoDB, NoSQL
              - Mongoose
            </div>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
      </Container>
      <Skyline />
    </div>
  );
}
export default Clouds;