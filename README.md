# svelte-agnostic-draggable #

 jQuery UI interactions draggable/droppable/sortable for Svelte

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

* Draggable
  * [Draggable with Crosshairs](https://svelte.dev/repl/ff3b37f973964240b16b35af04b5e551) (uses coordinates from drag events)
  * [draggable Note](https://svelte.dev/repl/f60141d0fd714f7eac2888c6e5a4bfd4) (uses a drag handle)
  * [draggable resizable Note](https://svelte.dev/repl/cfd1b8c9faf94ad5b7ca035a21f4dbd1)<br>uses an invisible "helper" in order to decouple the actually dragged element from the original resize handle. As a consequence, the element to be resized can control its size itself (as in this example).<br><br>Warning: right now, "draggable" does not seem to expect a draggable object to change its size after initial setup - this causes "containment" not to behave as desired. As a workaround, you may simply control positioning of resizable draggables in the same way as this example controls the draggable's size
* Droppable
* Sortable

