import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';




/*  ICONS  */
import HomeIcon from './assets/menu/home.svg';
import SearchIcon from './assets/menu/search.svg';
import TopIcons from './assets/menu/top.svg';
import AllIcon from './assets/menu/all.svg';



/*  PAGES  */
import Home from './pages/Home';
import Search from './pages/Search';
import Top from './pages/Top';
import All from './pages/All';

/*  CSS  */
import '@ionic/react/css/core.css';
import './theme/global.css';

/*  APP  */
class App extends Component {
  refreshPage = () => {
    window.location.reload();
  };

  render() {
    return (
      <IonApp>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/home" component={Home} exact={true} />
              <Route path="/search" component={Search} exact={true} />
              <Route path="/top" component={Top} />
              <Route path="/all" component={All} />
              <Route
                path="/"
                render={() => <Redirect to="/home" />}
                exact={true}
              />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="home" href="/home">
                <IonIcon icon={HomeIcon} />
              </IonTabButton>
              <IonTabButton
                tab="search"
                href="/search"
                onClick={this.refreshPage}
              >
                <IonIcon icon={SearchIcon} />
              </IonTabButton>
              <IonTabButton tab="Top" href="/top">
                <IonIcon icon={TopIcons} />
              </IonTabButton>
              <IonTabButton tab="all" href="/all">
                <IonIcon icon={AllIcon} />
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </IonApp>
    );
  }
};

export default App;
