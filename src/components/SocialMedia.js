import React, { Component } from 'react';
import { Grid, Icon } from 'semantic-ui-react'

function SocialMedia() {
  return (
    <div className="wrapper-social">
      <Grid container columns={5}>
          <Grid.Column textAlign="center"> 
            <span className="linkedin"><Icon className="icon-linkedin" name="linkedin" aria-hidden="true"></Icon></span>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <span className="github"><Icon className="icon-github" name="github" aria-hidden="true"></Icon></span>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <span className="angellist"><Icon className="icon-angellist" name="angellist" aria-hidden="true"></Icon></span>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <span className="google"><Icon className="icon-google" name="google" aria-hidden="true"></Icon></span>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <span className="resume"><Icon className="icon-resume" name="wordpress forms" aria-hidden="true"></Icon></span>
          </Grid.Column>
      </Grid>
    </div>
  );
}

export default SocialMedia;

{/* <ul>
<li className="linkedin"><Icon className="icon-linkedin" name="linkedin" aria-hidden="true"></Icon></li>
<li className="github"><Icon className="icon-github" name="github" aria-hidden="true"></Icon></li>
<li className="angellist"><Icon className="icon-angellist" name="angellist" aria-hidden="true"></Icon></li>
<li className="google"><Icon className="icon-google" name="google" aria-hidden="true"></Icon></li>
<li className="resume"><Icon className="icon-resume" name="wordpress forms" aria-hidden="true"></Icon></li>
</ul> */}