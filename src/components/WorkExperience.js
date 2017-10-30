import React, { Component } from 'react';
import { Image, Item } from 'semantic-ui-react'

class WorkExperience extends Component {
  render() {
    return (
      <div className="paralax-experience">
        <Item.Group>
          <Item>
            <Item.Image size='tiny' src='https://i.imgur.com/OuiiuR2.png' />
            <Item.Content>
              <Item.Header as='a'>Hack Reactor</Item.Header>
              <Item.Meta>Software Engineer</Item.Meta>
              <Item.Extra>2017</Item.Extra>
              <Item.Description>
                <ul>
                  <li>Developed Full Stack Javascript web applications with Node and Express for the server side</li>
                  <li>Designed and constructed complex multi-page front-end infrastructure with React to ensure excellent composability and modularity while decreasing overall load times</li>
                  <li>Integrated React Router to improve the scalability and modularity</li>
                  <li>Employed a Redux State Management layer to improve maintainability, serviceability, and modularity</li>
                  <li>Implemented a modular and responsive design utilizing a React Bootstrap framework</li>
                  <li>Enhanced the front-end client with a Bootstrap, SASS, and CSS to provide a user-friendly experience</li>
                </ul>  
              </Item.Description>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image size='tiny' src='https://i.imgur.com/TmfPfZH.png' />
            <Item.Content>
              <Item.Header as='a'>Safeway Inc.</Item.Header>
              <Item.Meta>Technical Project Manager</Item.Meta>
              <Item.Description>
                <ul>
                  <li>Led the development of a Warehouse Management System software, employing robotics for system automation</li>
                  <li>Orchestrated the planning, engineering, and coordination of Distribution Center conversion projects up to $13.5M</li>
                  <li>Responsible for reviewing, interpreting, communicating and negotiating contractual matters for Engineering and Project Management, including contract conditions and scopes of work</li>
                  <li>Managed SDLC and process improvement for Material Handling Systems and Distribution Center balance of plant equipment</li>
                </ul>  
              </Item.Description>
              <Item.Extra>Additional Details</Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image size='tiny' src='https://i.imgur.com/whc31P3.png' />
            <Item.Content>
              <Item.Header as='a'>Dematic Corp.</Item.Header>
              <Item.Meta>Project Manager</Item.Meta>
              <Item.Description>
                <ul>
                  <li>Reviewed RFP documentation for completeness and accuracy, ensuring that the content addressed customer functional requirements and scope</li>
                  <li>Curated the budgeting, forecasting, and cost control of Warehouse Automation projects up to $3M</li>
                  <li>Developed and maintained project schedules and milestones</li>
                  <li>Responsible for the management of risk and mitigating their impacts on projects</li>
                  <li>Coordinated the manufacturing, installation, engineering commissioning, and system acceptance testing activities</li>
                </ul>  
              </Item.Description>
              <Item.Extra>Additional Details</Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image size='tiny' src='https://i.imgur.com/whc31P3.png' />
            <Item.Content>
              <Item.Header as='a'>Dematic Corp.</Item.Header>
              <Item.Meta>Project Engineer</Item.Meta>
              <Item.Description>
                <ul>
                  <li>Reviewed RFP documentation for completeness and accuracy, ensuring that the content addressed customer functional requirements and scope</li>
                  <li>Curated the budgeting, forecasting, and cost control of Warehouse Automation projects up to $3M</li>
                  <li>Developed and maintained project schedules and milestones</li>
                  <li>Responsible for the management of risk and mitigating their impacts on projects</li>
                  <li>Coordinated the manufacturing, installation, engineering commissioning, and system acceptance testing activities</li>
                </ul>  
              </Item.Description>
              <Item.Extra>Additional Details</Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image size='tiny' src='https://i.imgur.com/whc31P3.png' />
            <Item.Content>
              <Item.Header as='a'>Dematic Corp.</Item.Header>
              <Item.Meta>Controls Engineer</Item.Meta>
              <Item.Description>
                <ul>
                  <li>Reviewed RFP documentation for completeness and accuracy, ensuring that the content addressed customer functional requirements and scope</li>
                  <li>Curated the budgeting, forecasting, and cost control of Warehouse Automation projects up to $3M</li>
                  <li>Developed and maintained project schedules and milestones</li>
                  <li>Responsible for the management of risk and mitigating their impacts on projects</li>
                  <li>Coordinated the manufacturing, installation, engineering commissioning, and system acceptance testing activities</li>
                </ul>  
              </Item.Description>
              <Item.Extra>Additional Details</Item.Extra>
            </Item.Content>
          </Item>

        </Item.Group>
      </div>
    );
  }
}

export default WorkExperience;