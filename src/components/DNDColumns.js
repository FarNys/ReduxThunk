import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import "../styles/DragNDrop.scss";
const DNDColumns = () => {
  const [list, setlist] = useState([
    { name: "ITEM ONE", id: "101" },
    { name: "ITEM TWO", id: "102" },
    { name: "ITEM THREE", id: "103" },
  ]);
  const [columnOne, setcolumnOne] = useState([]);
  const [columnTwo, setcolumnTwo] = useState([]);

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
    //CHECK TO PREVENT SWAP BETWEEN 2 COLUMNS!
    if (
      e.destination.droppableId === "firstColumn" &&
      e.source.droppableId === "secondColumn"
    ) {
      return;
    }
    if (
      e.destination.droppableId === "secondColumn" &&
      e.source.droppableId === "firstColumn"
    ) {
      return;
    }
    //SWAP FROM RESERVE TO FIRST COLUMN
    if (e.destination.droppableId === "firstColumn") {
      const indexItem = e.source.index;
      const item = list[indexItem];
      list.splice(indexItem, 1);
      columnOne.push(item);
    }
    //SWAP FROM RESERVE TO SECOND COLUMN
    if (e.destination.droppableId === "secondColumn") {
      const indexItem = e.source.index;
      const item = list[indexItem];
      list.splice(indexItem, 1);
      columnTwo.push(item);
    }
  };
  return (
    <div>
      <DragDropContext onDragEnd={dragEnd}>
        <div className="dragNdrop_container">
          <h3>DND TWO COLUMNS</h3>
          <Droppable droppableId="firstColumn">
            {(provided) => (
              <div
                className="first_list"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {columnOne.length > 0 &&
                  columnOne.map((el, id) => (
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
          <Droppable droppableId="secondColumn">
            {(provided) => (
              <div
                className="first_list"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {columnTwo.length > 0 &&
                  columnTwo.map((el, id) => (
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
        <Droppable droppableId="column">
          {(provided) => (
            <div
              className="dragNdrop_container"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <div className="first_list two_columns">
                {list.map((el, id) => (
                  <Draggable draggableId={el.id} index={id} key={el.id}>
                    {(provided) => (
                      <li
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        key={id}
                      >
                        {el.name}
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default DNDColumns;
