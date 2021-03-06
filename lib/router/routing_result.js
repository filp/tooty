export default class RoutingResult {
  constructor(routeSearch, matchedRoute) {
    this.routeSearch = routeSearch;
    this.matchedRoute = matchedRoute;
    this.handler = matchedRoute && matchedRoute.handler;
  }

  isSuccess() {
    // TODO: There's probably a better check for a route's success.
    return this.matchedRoute !== null;
  }
}
