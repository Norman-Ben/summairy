import Hero from '../components/Hero';
import Summarizer from '../components/Summarizer';
import MySummaries from '../components/MySummaries';
import { useSelector } from 'react-redux';
import { RootState } from '../services/store';

function Dashboard() {
  const { user } = useSelector((state: RootState) => state.auth);
  return (
    <>
      <Hero />
      <Summarizer />
      {user && <MySummaries />}
    </>
  );
}

export default Dashboard;
