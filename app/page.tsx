import { getAllPins } from './actions/firebaseActions';
import { PinList } from './components';

export default async function Home() {
  const listOfPins = await getAllPins();

  return (
    <main className="p-3">
      <PinList listOfPins={listOfPins} />
    </main>
  );
}
