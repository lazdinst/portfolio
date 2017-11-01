import React, { Component } from 'react';
import { Container, Image, Item, Grid, Segment, Header } from 'semantic-ui-react'

class WorkExperience extends Component {
  render() {
    return (
      <Container>
        <div className="paralax-title">
          Experience
        </div>
        <Grid>
          <Grid.Column width={16}>
            <Header as='h3'>
              <Image size='small' src='https://i.imgur.com/OuiiuR2.png' />
              <Header.Content>
                Hack Reactor
                <Header.Subheader>
                  Software Engineer
                </Header.Subheader>
              </Header.Content>
            </Header>
            <ul>
              <li>Developed Full Stack Javascript web applications with Node and Express for the server side</li>
              <li>Designed and constructed complex multi-page front-end infrastructure with React to ensure excellent composability and modularity while decreasing overall load times</li>
              <li>Integrated React Router to improve the scalability and modularity</li>
              <li>Employed a Redux State Management layer to improve maintainability, serviceability, and modularity</li>
              <li>Implemented a modular and responsive design utilizing a React Bootstrap framework</li>
              <li>Enhanced the front-end client with a Bootstrap, SASS, and CSS to provide a user-friendly experience</li>
            </ul>
          </Grid.Column>
        </Grid>
        <Grid>
          <Grid.Column width={16}>
            <Header as='h3'>
              <Image size='small' src='https://i.imgur.com/TmfPfZH.png' />
              <Header.Content>
                Safeway Inc.
                <Header.Subheader>
                  Technical Project Manager
                </Header.Subheader>
              </Header.Content>
            </Header>
            <ul>
              <li>Led the development of a Warehouse Management System software, employing robotics for system automation</li>
              <li>Orchestrated the planning, engineering, and coordination of Distribution Center conversion projects up to $13.5M</li>
              <li>Responsible for reviewing, interpreting, communicating and negotiating contractual matters for Engineering and Project Management, including contract conditions and scopes of work</li>
              <li>Managed SDLC and process improvement for Material Handling Systems and Distribution Center balance of plant equipment</li>
          </ul> 
          </Grid.Column>
        </Grid>
        <Grid>
          <Grid.Column width={16}>
            <Header as='h3'>
              <Image size='small' src='https://i.imgur.com/whc31P3.png' />
              <Header.Content>
                Dematic Corporation
                <Header.Subheader>
                  Technical Project Manager
                </Header.Subheader>
              </Header.Content>
            </Header>
            <ul>
              <li>Reviewed RFP documentation for completeness and accuracy, ensuring that the content addressed customer functional requirements and scope</li>
              <li>Curated the budgeting, forecasting, and cost control of Warehouse Automation projects up to $3M</li>
              <li>Developed and maintained project schedules and milestones</li>
              <li>Responsible for the management of risk and mitigating their impacts on projects</li>
              <li>Coordinated the manufacturing, installation, engineering commissioning, and system acceptance testing activities</li>
            </ul>
          </Grid.Column>
        </Grid>
        <Grid>
          <Grid.Column width={16}>
            <Header as='h3'>
              <Image size='small' src='https://i.imgur.com/whc31P3.png' />
              <Header.Content>
                Dematic Corporation
                <Header.Subheader>
                  Project Engineer
                </Header.Subheader>
              </Header.Content>
            </Header>
            <ul>
              <li>Reviewed RFP documentation for completeness and accuracy, ensuring that the content addressed customer functional requirements and scope</li>
              <li>Curated the budgeting, forecasting, and cost control of Warehouse Automation projects up to $3M</li>
              <li>Developed and maintained project schedules and milestones</li>
              <li>Responsible for the management of risk and mitigating their impacts on projects</li>
              <li>Coordinated the manufacturing, installation, engineering commissioning, and system acceptance testing activities</li>
            </ul> 
          </Grid.Column>
        </Grid>
        <Grid>
          <Grid.Column width={16}>
            <Header as='h3'>
              <Image size='small' src='https://i.imgur.com/whc31P3.png' />
              <Header.Content>
                Dematic Corporation
                <Header.Subheader>
                  Controls Engineer
                </Header.Subheader>
              </Header.Content>
            </Header>
            <ul>
              <li>Reviewed RFP documentation for completeness and accuracy, ensuring that the content addressed customer functional requirements and scope</li>
              <li>Curated the budgeting, forecasting, and cost control of Warehouse Automation projects up to $3M</li>
              <li>Developed and maintained project schedules and milestones</li>
              <li>Responsible for the management of risk and mitigating their impacts on projects</li>
              <li>Coordinated the manufacturing, installation, engineering commissioning, and system acceptance testing activities</li>
            </ul> 
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default WorkExperience;