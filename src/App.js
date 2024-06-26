// import './App.css';
import React, { useState } from 'react';
import initialData from './initial-data';
import Column from './column';
import '@atlaskit/css-reset';
import { DragDropContext } from 'react-beautiful-dnd';


function App() {
  const [state, setState] = useState(initialData);
  
  const onDragEnd = result => {
    // TODO: reorder our column
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {state.columnOrder.map(columnId => {
        const column = state.columns[columnId];
        const tasks = column.taskIds.map(taskId => state.tasks[taskId]);

        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </DragDropContext>
  )
}

export default App;
