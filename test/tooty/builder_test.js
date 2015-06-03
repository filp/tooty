import assert from "assert";
import tooty from "../../lib/tooty";

describe("tooty.Builder", () => {
  describe(".build", () => {

    // Note: this test uses simple values in place of handlers
    //       to simplify the comparisons (we're checking solely)
    //       for route definitions).
    var builder = tooty.Builder.build((r) => {
      r.route("route1", 1);
      r.route("route2", 2);
      r.route("ns:route3", 3);

      r.namespace("ns", (ns) => {
        ns.route("route4", 4);
      });

      r.route(["ns", "route5"], 5);

      // Duplicate of the second route:
      r.route("route2", 20);
    });

    var routes = builder.resolve();

    it("supports top-level routes", () => {
      assert.equal(routes.route1.handler, 1);
    });

    it("supports top-level routes including a namespace", () => {
      assert.equal(routes["ns:route3"].handler, 3);
    });

    it("supports namespaced routes", () => {
      assert.equal(routes["ns:route4"].handler, 4);
    });

    it("supports defining namespaced routes with an array", () => {
      assert.equal(routes["ns:route5"].handler, 5);
    });

    it("accepts duplicate routes and uses the most recent one", () => {
      assert.equal(routes.route2.handler, 20);
    });
  });

  describe(".build with custom separator", () => {

    var builder = tooty.Builder.build((r) => {
      r.namespace("ns", (ns) => {
        ns.route("route1", 1);
      });
    }, { separator: "/" });

    var routes = builder.resolve();

    it("uses the custom separator when building namespaced routes", () => {
      assert.equal(routes["ns/route1"].handler, 1);
    });
  });
});
