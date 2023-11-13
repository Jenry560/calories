import React from "react";

const Message = ({ msg }) => {
  let styles = {
    with: "100px",
    padding: "30px",
    marginBottom: "1rem",
    textAlign: "center",
    color: "green",
    fontWeight: "bold",
    
  };

  return (
    <div style={styles}>
      {/* <p>{msg}</p> */}
      <p dangerouslySetInnerHTML={{ __html: msg }} />
    </div>
  );
};

export default Message;