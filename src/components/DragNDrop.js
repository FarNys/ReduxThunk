import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "../styles/DragNDrop.scss";
const DragNDrop = () => {
  const [list, setlist] = useState([
    { name: "hary", id: "10" },
    { name: "jack", id: "11" },
    { name: "david", id: "12" },
  ]);
  const [secList, setsecList] = useState([
    { name: "ALI", id: "21" },
    { name: "HASAN", id: "22" },
    { name: "MEHDI", id: "23" },
  ]);
  const dragEnd = (e) => {
    console.log(e);

    if (!e.destination) {
      return;
    }

    if (e.destination.droppableId === e.source.droppableId) {
      return;
    }

    if (
      e.source.droppableId === "firstList" &&
      e.destination.droppableId === "secondList"
    ) {
      const dragOut = e.draggableId;
      const dragElement = list.filter((el) => el.id === dragOut);
      setlist([...list.filter((el) => el.id !== dragOut)]);
      setsecList([...secList, { name: dragElement[0].name, id: dragOut }]);
      // setsecList([
      //   ...secList.splice(e.destination.index, 0, {
      //     name: dragElement[0].name,
      //     id: dragOut,
      //   }),
      // ]);
    }
    if (
      e.source.droppableId === "secondList" &&
      e.destination.droppableId === "firstList"
    ) {
      const dragOut = e.draggableId;
      const dragElement = secList.filter((el) => el.id === dragOut);
      setsecList([...secList.filter((el) => el.id !== dragOut)]);
      setlist([...list, { name: dragElement[0].name, id: dragOut }]);
    }
  };
  return (
    <div>
      <DragDropContext onDragEnd={dragEnd}>
        <div className="dragNdrop_container">
          <h3>Drag N Drop Swap Items</h3>

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
          <Droppable droppableId="secondList">
            {(provided) => (
              <div
                className="second_list"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {secList.map((el, id) => (
                  <Draggable key={el.id} draggableId={el.id} index={id}>
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

export default DragNDrop;
