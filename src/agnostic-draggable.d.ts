declare module 'agnostic-draggable' {
  type EventHandlers = { [Name:string]:Function }

  declare const ConstructorSet:{
    Draggable: new (draggableElement:Element, Options:any, Handlers:EventHandlers) => any
    Droppable: new (droppableElement:Element, Options:any, Handlers:EventHandlers) => any
    Sortable:  new (sortableElement:Element,  Options:any, Handlers:EventHandlers) => any
  }
  export default ConstructorSet
}