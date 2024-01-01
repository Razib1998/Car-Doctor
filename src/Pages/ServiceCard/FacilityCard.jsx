

const FacilityCard = ({ item }) => {
  const { name, details } = item;
  console.log(item);

  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

export default FacilityCard;