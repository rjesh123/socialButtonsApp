const Button = (props) => {
  //  Write your code here.
  const { className, buttonText } = props;
  return <button className={className}>{buttonText}</button>;
};

const element = (
  //  Write your code here.
  <div className="social-buttons-card-container">
    <div className="content-container">
      <h1 className="card-heading">Social Buttons</h1>
      <div className="buttons-container">
        <Button className="button like-button" buttonText="Like" />
        <Button className="button comment-button" buttonText="Comment" />
        <Button className="button share-button" buttonText="Share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
