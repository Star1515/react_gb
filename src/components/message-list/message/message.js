
export const Message = ({ message }) => {
    return (
      <div>
        <h2>{message.author}</h2>
        <h2>{message.text}</h2>
        <h2>{message.date}</h2>
        <hr />
      </div>
    );
  };