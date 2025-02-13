const Notification = () => {
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
    marginBottom: 5,
  };

  const message = null;
  if (message) {
    return <div style={style}>{message}</div>;
  } else {
    return null;
  }
};

export default Notification;
