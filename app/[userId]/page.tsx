import { getUserInfo, getUserPins } from '../actions/firebaseActions';
import { PinList, UserInfo } from '../components';

type Props = { params: { userId: string } };

export default async function UserPage({ params }: Props) {
  const userInfo = await getUserInfo(params);

  const listOfPins = await getUserPins(params);

  return (
    <>
      <UserInfo userInfo={userInfo} />

      <PinList listOfPins={listOfPins} />
    </>
  );
}
