export default class Builder {
  constructor() {
    this.routes = {};
  }

  buildWithDefinition(definition) {
    // The builder instance is available as `this`, or alternatively
    // as the first and only argument passed to the definition function.
    //
    // (r) => {
    //   // both the same thing:
    //   this.route("foo:bar");
    //   r.route("foo:bar");
    // }
    //
    definition.call(this, this);
    return this;
  }

  // Returns the list of routes for this builder.
  resolve() {
    return this.routes;
  }

  static build(definition) {
    var builder = new Builder();
    builder.buildWithDefinition(definition).resolve();
  }
}
