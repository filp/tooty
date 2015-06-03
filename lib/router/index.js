import RoutingResult from "./routing_result";

export default class Router {
  constructor(routes, options = {}) {
    this.routes = routes;
    this.options = options;
  }

  dispatch(route, data) {
    return new RoutingResult(
      { route: route, data: data },
      null
    );
  }
}
