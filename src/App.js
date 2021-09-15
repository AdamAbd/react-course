import { Route, Switch } from 'react-router-dom';
import AllMetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AllMetupsPage />
        </Route>
        <Route path='/favorite'>
          <FavoritesPage />
        </Route>
        <Route path='/new-meet'>
          <NewMeetupPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
