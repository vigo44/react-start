import React from 'react';
import './card-user.css';

interface Props {
  user: string;
  data: string;
  continent: string;
  send: boolean;
  gender: string;
  avatar: string | false;
}

export default class CardUser extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="card-user">
        <div
          className="card-user__avatar"
          style={{ backgroundImage: `url(${this.props.avatar})` }}
        ></div>
        <div className="card-user__name">Name: {this.props.user}</div>
        <div className="card-user__data">Was born:{this.props.data}</div>
        <div className="card-user__continent">From: {this.props.continent}</div>
        <div className="card-user__gender">Gender: {this.props.gender}</div>
        <div className="card-user__sent">News: {this.props.send ? 'sent' : `don't sent`}</div>
      </div>
    );
  }
}
