import Card from '../Card/Card';

export default function Cards({ drivers }) {

  const cardComponents = drivers.map((driver) => {
    if (typeof driver !== undefined) {
      return (
        <Card
          key={driver[0].id}
          id={driver[0].id}
          name={driver[0].name.forename}
          teams={driver[0].teams}
          image={driver[0].image.url}
        />
      );
    }
    return null;
  });

  return (
    <div>
      {cardComponents}
    </div>
  );
}
