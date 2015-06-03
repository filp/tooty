# tooty [![Circle CI](https://circleci.com/gh/filp/tooty.svg?style=svg)](https://circleci.com/gh/filp/tooty)

Simple agnostic message router for node.

![toot toot](http://i.imgur.com/GDymv5n.jpg)

```js
import tooty from "tooty";

router = tooty.build((r) => {
  // Define routes:
  r.route("users:fire", myUsersHandler.fire);
});

// You get your handler back, and can do whatever you wish
// with it from here on:
var handler = router.dispatch("users:fire", additionalData);
```

### You can use it for:

- Routing socket.io events to handlers
- Routing chat bot actions to action handlers
- Dispatching messages in a worker queue to the workers
- Etc etc etc, you get the idea, right?

### Features

- Simple, reliable router system that takes a path/action and returns a handler
- Fancy (and very readable) route builder inspired by Rails' `Rails.application.routes#draw` (optional)
- Abstract enough that it can fit all your routing needs with a small amount of fidgeting

### Installation

```shell
$ npm install --save tooty
```

#### ES6

Tooty is written using ES6 features. In development, it uses the [Babel](https://github.com/babel/babel) library.
Before being published to npm, the library is compiled automatically to ES5 (through the `prepublish` command defined in
the `package.json` file)

### Authors

`tooty` was developed by [Filipe Dobreira](https://github.com/filp). Contributions to the code are very welcome!

### License

`tooty` is distributed under the MIT license. See `LICENSE`.
