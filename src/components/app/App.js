import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainPage, ComicsPage, Page404, SingleComicPage } from '../pages';
import AppHeader from '../appHeader/AppHeader';
import AppBanner from '../appBanner/AppBanner';

const App = () => {
  return (
    <Router basename="/marvel-app">
      <div className="app">
        <AppHeader />
        <main>
          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route exact path="/comics">
              <ComicsPage />
            </Route>
            <Route exact path="/comics/:comicId">
              <AppBanner />
              <SingleComicPage />
            </Route>
            <Route path="*">
              <Page404 />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
