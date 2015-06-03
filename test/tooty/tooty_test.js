import assert from "assert";
import tooty from "../../lib/tooty";

describe("tooty", () => {
  describe("#build", () => {

    var router = tooty.build((r) => {
      r.route("foo", null);
      r.route("bar", null);

      r.namespace("foo", (foo) => {
        foo.route("boop", null);

        foo.namespace("xx", (xx) => {
          xx.route("zz", null);
        });
      });
    });

    it("returns a router", () => {
      assert(router instanceof tooty.Router);
    });
  });
});
