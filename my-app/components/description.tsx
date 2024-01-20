const Description = ({ name, flag }) => {
  return (
    <div>
      <img src={flag} />
      <h1>{name}</h1>
    </div>
  );
};

export default Description;
