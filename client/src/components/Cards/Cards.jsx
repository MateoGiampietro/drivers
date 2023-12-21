import Card from '../Card/Card';

export default function Cards({drivers}) {

    const cardTest = console.log(drivers)

   /* const cardComponents = drivers.map((driver) => (
      <Card
        key = {driver.id}
        id = {driver.id}
        name = {driver.name}
        teams = {driver.teams}
        image = {driver.image}
      />
    )); */
   return (<div>{cardTest}</div>);
}