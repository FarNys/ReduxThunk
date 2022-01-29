import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import "../styles/DragNDrop.scss";
const DNDIndex = () => {
  const [list, setlist] = useState([
    { name: "ITEM ONE", id: "101" },
    { name: "ITEM TWO", id: "102" },
    { name: "ITEM THREE", id: "103" },
  ]);

  const dragEnd = (e) => {
    if (!e.destination) {
      return;
    }
    //CHECK FOR SAME TABLE
    if (
      e.destination.droppableId === e.source.droppableId &&
      e.destination.index === e.source.index
    ) {
      return;
    }
    //CHECK FOR SAME TABLE BUT DIFFERENT ROW
    if (
      e.destination.droppableId === e.source.droppableId &&
      e.destination.index !== e.source.index
    ) {
      const indexItem = e.source.index;
      const newIndex = e.destination.index;
      const item = list[indexItem];
      //   console.log(indexItem, newIndex, item);
      list.splice(indexItem, 1);
      list.splice(newIndex, 0, item);
    }
  };
  return (
    <div>
      <DragDropContext onDragEnd={dragEnd}>
        <div className="dragNdrop_container">
          <h3>DND SINGLE COLUMN(DND INDEX)</h3>

          <Droppable droppableId="firstList">
            {(provided) => (
              <div
                className="first_list"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {list.map((el, id) => (
                  <Draggable draggableId={el.id} index={id} key={el.id}>
                    {(provided) => (
                      <li
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        {el.name}
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  );
};

export default DNDIndex;
