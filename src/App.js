import { Route, Switch } from 'react-router-dom';
import MainNavigation from './components/layout/MainNavigation';
import AllMetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';

function App() {
  return (
    <div>
      <MainNavigation />
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
    </div>
  );
}

export default App;
