import './card-user.css';

interface Props {
  user: string;
  date: string;
  continent: string;
  send: boolean;
  gender: string;
  avatar: string;
}

export default function CardUser(props: Props) {
  return (
    <div className="card-user">
      <div className="card-user__avatar" style={{ backgroundImage: `url(${props.avatar})` }}></div>
      <div className="card-user__name">Name: {props.user}</div>
      <div className="card-user__data">Was born:{props.date}</div>
      <div className="card-user__continent">From: {props.continent}</div>
      <div className="card-user__gender">Gender: {props.gender}</div>
      <div className="card-user__sent">News: {props.send ? 'sent' : `don't sent`}</div>
    </div>
  );
}
