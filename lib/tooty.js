import Builder from "./builder";
import Router from "./router";

var tooty = {
  build(definition, routerOptions = {}) {
    var routes = Builder.build(definition);

    return new Router(routes, routerOptions);
  },

  Router: Router,
  Builder: Builder
};

export default tooty;
