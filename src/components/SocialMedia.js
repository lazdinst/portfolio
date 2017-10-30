import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react'

//TODO: Refactor into segments for responive behavior

function SocialMedia() {
  return (
    <div className="wrapper-social">
      <ul>
        <li className="linkedin"><Icon className="icon-linkedin" name="linkedin" aria-hidden="true"></Icon></li>
        <li className="github"><Icon className="icon-github" name="github" aria-hidden="true"></Icon></li>
        <li className="angellist"><Icon className="icon-angellist" name="angellist" aria-hidden="true"></Icon></li>
        <li className="google"><Icon className="icon-google" name="google" aria-hidden="true"></Icon></li>
        <li className="resume"><Icon className="icon-resume" name="wordpress forms" aria-hidden="true"></Icon></li>
      </ul>
    </div>
  );
}

export default SocialMedia;