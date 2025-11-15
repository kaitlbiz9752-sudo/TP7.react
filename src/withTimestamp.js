function withTimestamp(WrappedComponent) {
  return function WithTimestamp(props) {
    const timestamp = new Date().toLocaleString();

    return (
      <div>
        <p>Rendu à : {timestamp}</p>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default withTimestamp;
