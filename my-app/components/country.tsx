const CountryCard = ({ name, flag }) => {
  return (
    <div>
      <h1>{name}</h1>
      <img src={flag} />
    </div>
  );
};

export default CountryCard;
