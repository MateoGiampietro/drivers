import Card from '../Card/Card';

export default function Cards({ drivers }) {

  const cardComponents = drivers.map((driver) => {
    if (typeof driver !== undefined) {
      return (
        <Card
          key={driver.id}
          id={driver.id}
          name={driver.name.forename}
          teams={driver.teams}
          image={driver.image.url}
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
