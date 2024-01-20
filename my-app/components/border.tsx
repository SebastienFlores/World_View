const BorderCard = ({ border }) => {
  const lang = Object.keys(border);
  return (
    <div>
      {lang.map((lan) => {
        return (
          <div>
            <h4>Nom Commun : {border[lan]["common"]}</h4>
            <h4>Nom Officiel : {border[lan]["official"]}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default BorderCard;
