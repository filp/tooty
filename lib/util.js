import deepmerge from "deepmerge";

var util = {
  merge(a, b) {
    return deepmerge(a, b || {});
  }
};

util.options = util.merge;

export default util;
