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

The following examples are available on the Svelte REPL - feel free to play with them!

* Draggable
  * [Draggable with Event Log](https://svelte.dev/repl/cc36f2c307d54b0081fd6a16c18d1b5f)
  * [Draggable with Crosshairs](https://svelte.dev/repl/ff3b37f973964240b16b35af04b5e551)
* Droppable
  * [Droppable with Event Log](https://svelte.dev/repl/7c06b8b5b7594cb6b0593da8c8a38438)
* Sortable
  * [Sortable with Event Log](https://svelte.dev/repl/91db405809614aa6943ce7fbac10664f)

### Background Information ###

`svelte-agnostic-draggable` is a thin wrapper around [agnostic-draggable](https://github.com/marcospont/agnostic-draggable) which makes jQuery UI-like interactions `draggable`, `droppable` and `sortable` available to web applications without any dependency for jQuery and jQuery UI.

With this wrapper, these interactions may now be used as "[actions](https://svelte.dev/tutorial/actions)" in Svelte components. For the available options and their format, please, consider the [documentation](https://github.com/marcospont/agnostic-draggable/blob/main/README.md) of the underlying library.

The wrapper itself is almost trivial, all the "heavy lifting" is done by `agnostic-draggable` - thus, credits primarily go to [Marcos Pont](https://github.com/marcospont).
