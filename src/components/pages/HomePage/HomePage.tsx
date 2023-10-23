import HomeControls from './HomeControls';
import HomeList from './HomeList';
import HomeWrapper from './HomeWrapper';

export default function HomePage() {
  return (
    <HomeWrapper>
      <HomeControls />
      <HomeList />
    </HomeWrapper>
  )
}
