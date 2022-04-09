import "./App.css";
import moment from "moment";

const Tweet = (props) => {
  const { tweet } = props;
  const { userName, content, date } = tweet;
  return (
    <div className="specificTweet">
      <div className="nameAndDate">
        <span className="userName">
          <b>{userName}</b>
        </span>
        <span className="specificDate">
          <b>{moment(date).format("MMMM Do YYYY, h:mm:ss a")}</b>
        </span>
      </div>
      <p>{content}</p>
    </div>
  );
};

export default Tweet;
