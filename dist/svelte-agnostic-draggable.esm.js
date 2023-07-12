import agnosticDraggable from 'agnostic-draggable';

/**** use:draggable/droppable/sortable={options} ****/
/**** use:draggable={options} ****/
var DraggableEventHandlers = {
    'draggable:init': InjectorForEvent('draggable:init'),
    'drag:start': InjectorForEvent('drag:start'),
    'drag:move': InjectorForEvent('drag:move'),
    'drag:stop': InjectorForEvent('drag:stop'),
    'draggable:destroy': InjectorForEvent('draggable:destroy')
};
function draggable(draggableElement, Options) {
    new agnosticDraggable.Draggable(draggableElement, Options, DraggableEventHandlers);
} // currently, there is no possibility to update "Options"
/**** use:droppable={options} ****/
var DroppableEventHandlers = {
    'droppable:init': InjectorForEvent('droppable:init'),
    'droppable:activate': InjectorForEvent('droppable:activate'),
    'droppable:over': InjectorForEvent('droppable:over'),
    'droppable:drop': InjectorForEvent('droppable:drop'),
    'droppable:out': InjectorForEvent('droppable:out'),
    'droppable:deactivate': InjectorForEvent('droppable:deactivate'),
    'droppable:destroy': InjectorForEvent('droppable:destroy')
};
function droppable(droppableElement, Options) {
    new agnosticDraggable.Droppable(droppableElement, Options, DroppableEventHandlers);
} // currently, there is no possibility to update "Options"
/**** use:sortable={options} ****/
var SortableEventHandlers = {
    'sortable:init': InjectorForEvent('sortable:init'),
    'sortable:activate': InjectorForEvent('sortable:activate'),
    'sort:start': InjectorForEvent('sort:start'),
    'sort:move': InjectorForEvent('sort:move'),
    'sort:stop': InjectorForEvent('sort:stop'),
    'sortable:over': InjectorForEvent('sortable:over'),
    'sortable:change': InjectorForEvent('sortable:change'),
    'sortable:remove': InjectorForEvent('sortable:remove'),
    'sortable:receive': InjectorForEvent('sortable:receive'),
    'sortable:update': InjectorForEvent('sortable:update'),
    'sortable:out': InjectorForEvent('sortable:out'),
    'sortable:deactivate': InjectorForEvent('sortable:deactivate'),
    'sortable:destroy': InjectorForEvent('sortable:destroy')
};
function sortable(sortableElement, Options) {
    new agnosticDraggable.Sortable(sortableElement, Options, SortableEventHandlers);
} // currently, there is no possibility to update "Options"
/**** InjectorForEvent ****/
function InjectorForEvent(Topic) {
    return function (originalEvent) {
        // @ts-ignore
        var EventData = originalEvent.data;
        [
            EventData.source,
            EventData.draggable && EventData.draggable.element,
            EventData.droppable && EventData.droppable.element,
            EventData.sortable && EventData.sortable.element
        ].forEach(function (Origin) {
            if (Origin != null) {
                Origin.dispatchEvent(new CustomEvent(Topic, { detail: EventData }));
            }
        });
    };
}

export { draggable, droppable, sortable };
//# sourceMappingURL=svelte-agnostic-draggable.esm.js.map
