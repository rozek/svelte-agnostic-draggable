/**** use:draggable/droppable/sortable={options} ****/

  import agnosticDraggable from 'agnostic-draggable'

/**** use:draggable={options} ****/

  const DraggableEventHandlers = {
    'draggable:init':    InjectorForEvent('draggable:init'),
    'drag:start':        InjectorForEvent('drag:start'),
    'drag:move':         InjectorForEvent('drag:move'),
    'drag:stop':         InjectorForEvent('drag:stop'),
    'draggable:destroy': InjectorForEvent('draggable:destroy')
  }

  export function draggable (draggableElement:Element, Options?:any):void {
    new agnosticDraggable.Draggable(draggableElement,Options,DraggableEventHandlers)
  }                    // currently, there is no possibility to update "Options"

/**** use:droppable={options} ****/

  const DroppableEventHandlers = {
    'droppable:init':       InjectorForEvent('droppable:init'),
    'droppable:activate':   InjectorForEvent('droppable:activate'),
    'droppable:over':       InjectorForEvent('droppable:over'),
    'droppable:drop':       InjectorForEvent('droppable:drop'),
    'droppable:out':        InjectorForEvent('droppable:out'),
    'droppable:deactivate': InjectorForEvent('droppable:deactivate'),
    'droppable:destroy':    InjectorForEvent('droppable:destroy')
  }

  export function droppable (droppableElement:Element, Options?:any):void {
    new agnosticDraggable.Droppable(droppableElement,Options,DroppableEventHandlers)
  }                    // currently, there is no possibility to update "Options"

/**** use:sortable={options} ****/

  const SortableEventHandlers = {
    'sortable:init':       InjectorForEvent('sortable:init'),
    'sortable:activate':   InjectorForEvent('sortable:activate'),
    'sort:start':          InjectorForEvent('sort:start'),
    'sort:move':           InjectorForEvent('sort:move'),
    'sort:stop':           InjectorForEvent('sort:stop'),
    'sortable:over':       InjectorForEvent('sortable:over'),
    'sortable:change':     InjectorForEvent('sortable:change'),
    'sortable:remove':     InjectorForEvent('sortable:remove'),
    'sortable:receive':    InjectorForEvent('sortable:receive'),
    'sortable:update':     InjectorForEvent('sortable:update'),
    'sortable:out':        InjectorForEvent('sortable:out'),
    'sortable:deactivate': InjectorForEvent('sortable:deactivate'),
    'sortable:destroy':    InjectorForEvent('sortable:destroy')
  }

  export function sortable (sortableElement:Element, Options?:any):void {
    new agnosticDraggable.Sortable(sortableElement,Options,SortableEventHandlers)
  }                    // currently, there is no possibility to update "Options"

/**** InjectorForEvent ****/

  function InjectorForEvent (Topic:string):Function {
    return (originalEvent:Event) => {
// @ts-ignore
      let EventData = originalEvent.data

      ;[
        EventData.source,
        EventData.draggable && EventData.draggable.element,
        EventData.droppable && EventData.droppable.element,
        EventData.sortable  && EventData.sortable.element
      ].forEach((Origin) => {
        if (Origin != null) {
          Origin.dispatchEvent(new CustomEvent(Topic, { detail:EventData }))
        }
      })
    }
  }