import Card from '../Card/Card';

export default function Cards({ drivers }) {

  const cardComponents = drivers.map((driver) => {
    if (typeof driver !== undefined) {
      if (driver.name.forename) {
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
      else {
        return (
          <Card
            key={driver.id}
            id={driver.id}
            name={driver.name}
            /* teams={driver.teams} */
            image={driver.image}
          />
        );
      }
    }
    return null;
  });

  return (
    <div>
      {cardComponents}
    </div>
  );
}
