import Builder from "./builder";
import Router from "./router";

var tooty = {
  build(definition, routerOptions = {}) {
    var builder = Builder.build(definition);

    return new Router(builder.resolve(), routerOptions);
  },

  Router: Router,
  Builder: Builder
};

export default tooty;
