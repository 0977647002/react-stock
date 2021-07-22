function Message(props) {
  return (
    <>
      {props.message === "" ? (
        ""
      ) : (
        <div className="message">
          <h3>{props.message}</h3>
        </div>
      )}
    </>
  );
}
export default Message;
