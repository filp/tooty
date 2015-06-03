import assert from "assert";
import tooty from "../../lib/tooty";

describe("tooty", () => {
  describe("#build", () => {

    var router = tooty.build(() => {});

    it("returns a router", () => {
      assert(router instanceof tooty.Router);
    });
  });
});
