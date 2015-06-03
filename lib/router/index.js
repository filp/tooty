import RoutingResult from "./routing_result";

export default class Router {
  constructor(routes, options = {}) {
    this.routes = routes;
    this.options = options;
  }

  dispatch(route, data, cb) {
    var match = this.routes[route];
    var result = new RoutingResult(
      { path: route, data: data },
      match
    );

    return result;
  }
}
