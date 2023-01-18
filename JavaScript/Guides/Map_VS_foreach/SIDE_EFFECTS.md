# Side Effects

When considering weather to write functions with or without side effects, you should bare in mind the specific use case and the desired outcome. In general, it's considered a best practice to minimize side effects and maximize the use of pure functions. Pure functions are functions that:
  * Only depend on their inputs.
  * Do not have any observable[^1] side effects (i.e., no changes to the state of the program or the outside world).
  * Return the same output for the same input.

These characteristics make pure functions predictable, easy to test, and easy to understand. They also make them suitable for functional programming and make it easy to reason about the code and avoid bugs.

On the other hand, functions with side effects are more difficult to test and reason about. Functions with side effects are functions that:
  * Depend on state outside of their scope.
  * Modify state outside of their scope.
  * Have observable[^1] interactions with the outside world such as I/O.  

Functions with side effects are necessary in certain cases, such as when you need to interact with the outside world, like making a network request, saving data to a database, or displaying something on the screen. However, it's important to keep the number of side effects to a minimum and to isolate them to a few specific parts of the codebase.

In general, it's recommended to write functions that are as pure as possible, and to limit the use of functions with side effects to the minimum necessary.

[^1]: When we say "observable" in the context of side effects, we mean that the effect can be observed or detected by the code outside of the function or statement that caused the effect.