import {Component} from 'angular2/core';
import {Router, Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Index} from './components/index/index';
import {Login} from './components/login/login';
import {Home} from './components/home/home';
import {About} from './components/about/about';
import {RepoBrowser} from './components/repo-browser/repo-browser';

@Component({
  selector: 'seed-app',
  providers: [],
  templateUrl: 'app/seed-app.html',
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([
  new Route({ path: '/index', component: Index, name: 'Index'}),
  new Route({ path: '/login', component: Login, name: 'Login', useAsDefault: true}),
  new Route({ path: '/home', component: Home, name: 'Home'}),
  new Route({ path: '/about', component: About, name: 'About'}),
  new Route({ path: '/github/...', component: RepoBrowser, name: 'RepoBrowser'})
])
export class SeedApp {

  constructor() {}

}
