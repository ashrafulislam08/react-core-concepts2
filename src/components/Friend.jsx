const Friend = ({ friend }) => {
  const { email, name } = friend;
  return (
    <div className="box">
      <h3>Name: {name}</h3>
      <p>Email: {email}</p>
    </div>
  );
};

export default Friend;