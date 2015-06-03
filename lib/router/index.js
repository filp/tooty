import RoutingResult from "./routing_result";

export default class Router {
  constructor(routes, options = {}) {
    this.routes = routes;
    this.options = options;
  }

  dispatch(route, data) {
    var match = this.routes[route];

    return new RoutingResult(
      { path: route, data: data },
      match
    );
  }
}
