import React from 'react';
import { QuadrantData, Task } from '../types';

interface QuadrantListProps {
  data: QuadrantData;
  onUpdateTask: (quadrantId: string, taskId: string, newText: string) => void;
}

const QuadrantList: React.FC<QuadrantListProps> = ({ data, onUpdateTask }) => {
  return (
    <div className={`flex flex-col h-full border-2 ${data.colorBorder} bg-white shadow-sm overflow-hidden`}>
      {/* Header */}
      <div className={`${data.colorHeader} text-white p-2 flex justify-center items-center relative h-12`}>
        <span className="font-bold text-lg tracking-wide uppercase flex items-center gap-2">
          {data.title}
          {data.subtitle && <span className="opacity-90 font-normal">{data.subtitle}</span>}
        </span>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto custom-scrollbar bg-white">
        {data.tasks.map((task, index) => (
          <div 
            key={task.id} 
            className="flex items-center border-b border-gray-200 last:border-b-0 h-10 hover:bg-gray-50 transition-colors"
          >
            {/* Number Column */}
            <div className="w-10 flex-shrink-0 flex justify-center items-center border-r border-gray-200 text-gray-500 font-medium h-full select-none bg-gray-50/50">
              {index + 1}
            </div>
            
            {/* Input Field */}
            <input
              type="text"
              value={task.text}
              onChange={(e) => onUpdateTask(data.id, task.id, e.target.value)}
              className="flex-1 h-full px-3 outline-none bg-transparent text-gray-700 placeholder-gray-300 focus:bg-blue-50/30 transition-colors"
              placeholder="Add task..."
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuadrantList;