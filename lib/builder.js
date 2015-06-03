import util from "./util";

export default class Builder {
  constructor(options = {}) {
    this.options = util.options(
      { prefix: null, separator: ":" }, options
    );

    this.routes = {};
  }

  namespace(ns, definition) {
    var nsPath = this.buildPathWithPrefix(ns);

    var nsBuilder = new Builder(
      // The nested builder inherits the options for this builder, and
      // includes the full prefix (including the prefix segments added
      // by all upper builders).
      util.merge(this.options, { prefix: nsPath })
    );

    // Builds and resolves the set of namespaced routes:
    var nsRoutes = nsBuilder.buildWithDefinition(definition).resolve();

    // resolve() returns a set of properly namespaces routes that
    // can be safely merged with the set present in this builder.
    this.routes = util.merge(this.routes, nsRoutes);
  }

  // Defines a single route
  //
  // builder.route("my:route", Handler.method);
  //
  route(path, handler, options = {}) {
    var prefixedPath = this.buildPathWithPrefix(path);

    this.routes[prefixedPath] = {
      route: prefixedPath,
      handler: handler,
      options: options
    };
  }

  // Returns the list of routes for this builder.
  resolve() {
    return this.routes;
  }

  // If one is defined, prepends a prefix to the route path and
  // returns it
  buildPathWithPrefix(path) {
    var prefix = this.options.prefix;

    return prefix && [prefix, path].join(this.options.separator) || path;
  }

  buildWithDefinition(definition) {
    definition.call(undefined, this);
    return this;
  }

  static build(definition, options = {}) {
    var builder = new Builder(options);

    return builder.buildWithDefinition(definition);
  }
}
