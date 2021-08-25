import React, { Fragment } from 'react';

class BlogBuilder {
  list = [];

  constructor({ title, image, description }) {
    this.title = title;
    this.image = image;
    this.description = description;
  }

  addHeading = (props) => {
    this.list.push(
      <Fragment key={this.list.length}>
        <h1 className=''>{props}</h1>
        <hr />
      </Fragment>
    );
    return this;
  };

  addParagraph = (props) => {
    this.list.push(
      <p key={this.list.length} className='lead'>
        {props}
      </p>
    );
    return this;
  };

  getBlog = () => {
    return <div className='container-lg'>{this.list}</div>;
  };
}

export { BlogBuilder };
