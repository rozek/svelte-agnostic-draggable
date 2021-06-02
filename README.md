# svelte-agnostic-draggable #

 jQuery UI interactions draggable/droppable/sortable for Svelte

**Important Notice: because of not yet merged (but important) bug fixes in the original [agnostic-draggable](https://github.com/marcospont/agnostic-draggable), this package currently uses a newer copy, namely [agnostic-draggable-bug-fixed](https://github.com/rozek/agnostic-draggable). Apart from these bug fixes, however, the original description still applies.**

**NPM users**: please consider the [Github README](https://github.com/rozek/svelte-agnostic-draggable/blob/main/README.md) for the latest description of this package (as updating the docs would otherwise always require a new NPM package version)

### Installation ###

```
npm install svelte-agnostic-draggable
```

### Usage ###

```
<script>
  import { draggable, droppable, sortable } from 'svelte-agnostic-draggable'
  
  function EventHandler (Event) { ... } // just as an example
</script>

<div use:draggable={{ options }}
  on:draggable:init={EventHandler} on:draggable:destroy={EventHandler}
  on:drag:start={EventHandler} on:drag:move={EventHandler} on:drag:stop={EventHandler}
>...</div>

<div use:droppable={{ options }}
  on:droppable:init={EventHandler} on:droppable:destroy={EventHandler}
  on:droppable:activate={EventHandler} on:droppable:deactivate={EventHandler}
  on:droppable:over={EventHandler} on:droppable:out={EventHandler}
  on:droppable:drop={EventHandler}
>...</div>

<div use:sortable={{ options }}
  on:sortable:init={EventHandler} on:sortable:destroy={EventHandler}
  on:sortable:activate={EventHandler} on:sortable:deactivate={EventHandler}
  on:sort:start={EventHandler} on:sort:move={EventHandler} on:sort:stop={EventHandler}
  on:sortable:over={EventHandler} on:sortable:out={EventHandler}
  on:sortable:change={EventHandler} on:sortable:update={EventHandler}
  on:sortable:remove={EventHandler} on:sortable:receive={EventHandler}
>...</div>
```

**Important Note for mobile Users**

Since `agnostic-draggable` itself handles `MouseEvent`s only, you will presumably also need a module such as [svelte-touch-to-mouse](https://github.com/rozek/svelte-touch-to-mouse) which maps `TouchEvent`s to `MouseEvent`s. All examples for `svelte-agnostic-draggable` already use that module and may therefore also be used on smartphones and tablets.

### Examples ###

All examples are available on the Svelte REPL - feel free to play with them!

Here are some basic ones:

* [Draggable](https://svelte.dev/repl/cc36f2c307d54b0081fd6a16c18d1b5f) (with Event Log - open the REPL console)
* [Droppable](https://svelte.dev/repl/7c06b8b5b7594cb6b0593da8c8a38438) (with Event Log - open the REPL console)
* [Sortable](https://svelte.dev/repl/91db405809614aa6943ce7fbac10664f) (with Event Log - open the REPL console)

For more detailled examples, see below.

### Background Information ###

`svelte-agnostic-draggable` is a thin wrapper around [agnostic-draggable](https://github.com/marcospont/agnostic-draggable) which makes jQuery UI-like interactions `draggable`, `droppable` and `sortable` available to web applications without any dependency for jQuery and jQuery UI.

With this wrapper, these interactions may now be used as "[actions](https://svelte.dev/tutorial/actions)" in Svelte components. For the available options and their format, please, consider the [documentation](https://github.com/marcospont/agnostic-draggable/blob/main/README.md) of the underlying library.

The wrapper itself is almost trivial, all the "heavy lifting" is done by `agnostic-draggable` - thus, credits primarily go to [Marcos Pont](https://github.com/marcospont).

### More detailled Examples ###

All examples are available on the Svelte REPL.

* **Draggable**
  * [Draggable with Crosshairs](https://svelte.dev/repl/ff3b37f973964240b16b35af04b5e551) (uses coordinates from drag events)<br>&nbsp;
  * [Line Node dragging](https://svelte.dev/repl/c7712ceeba1a4262a321c5ccfa9ee11b) (reposition the ends of a straight line)
  * [Polygon Node dragging](https://svelte.dev/repl/61807a11b0a34688859c21b1e74a2edc) (reposition the nodes of a polygon)
  * [quadratic Bezier Curve Node dragging](https://svelte.dev/repl/330f88cd9f1e4652bc30bacba8b7b0f6) (reposition the nodes of a quadratic bezier curve)
  * [cubic Bezier Curve Node dragging](https://svelte.dev/repl/d6f8385e473b45078696e18883024513) (reposition the nodes of a cubic bezier curve)<br>&nbsp;
  * [draggable Note](https://svelte.dev/repl/f60141d0fd714f7eac2888c6e5a4bfd4) (uses a drag handle)
  * [draggable resizable Note](https://svelte.dev/repl/cfd1b8c9faf94ad5b7ca035a21f4dbd1) (with an invisible "helper")<br>Warning: right now, "draggable" does not seem to expect a draggable object to change its size after initial setup - this causes "containment" not to behave as desired. As a workaround, you may simply control positioning of resizable draggables in the same way as this example controls the draggable's size.<br>&nbsp;
  * [draggable Button](https://svelte.dev/repl/4b21916c71de442ab326e22b37d8d6a4) (combines clicking and dragging)<br>&nbsp;
  * [ResizeHandles](https://svelte.dev/repl/eff4aa19f1c2484a917e34d98a4a3870) (implements a typical resize frame with handles)<br>&nbsp;
  * [Slider](https://svelte.dev/repl/f9e65134155045d49ca1813beadd3d8c) (a simple linear slider)
  * [Dial](https://svelte.dev/repl/60f9cd8be0bc4fb488626f08c8600d70) (a simple dial to visually choose an angle)
* **Droppable**
  * [Circle, Triangle, Star](https://svelte.dev/repl/c6659a04c47e47bfbdfec1f10c0fc9f7) (drag shapes to where they belong)
* **Sortable**
  * basic [Sortable](https://svelte.dev/repl/91db405809614aa6943ce7fbac10664f) example<br>this example also uses the [body-scroll-lock](https://github.com/willmcpo/body-scroll-lock) package from [Will](https://github.com/willmcpo) in order to avoid the annoying body scrolling effect when trying to rearrange list items.
  * [Sortable with Handles](https://svelte.dev/repl/827260baeeea47dc8911c2b25a4c6ce9) (as preferred on mobile platforms)
  * [List sort with feedback](https://svelte.dev/repl/24da936731744dfdbe6f11db266bcd68) (updates Svelte's list model after sorting)<br>Warning: "sortable"s do not properly handle "revert" right now...

