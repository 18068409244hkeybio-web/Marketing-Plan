import React, { useState, useEffect } from 'react';
import { MatrixState, QuadrantId, AppData } from './types';
import { createInitialMatrix } from './constants';
import QuadrantList from './components/QuadrantList';
import { VerticalAxis, HorizontalAxis } from './components/AxisArrows';

const STORAGE_KEY = 'eisenhower-matrix-multi-v1';
const TAB_ONLINE = 'online';
const TAB_OFFLINE = 'offline';

type TabType = typeof TAB_ONLINE | typeof TAB_OFFLINE;

const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<TabType>(TAB_ONLINE);
  
  const [appData, setAppData] = useState<AppData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error("Failed to load state", e);
    }
    // Default initial state
    return {
      online: createInitialMatrix(),
      offline: createInitialMatrix(),
    };
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
  }, [appData]);

  const handleUpdateTask = (quadrantId: string, taskId: string, newText: string) => {
    setAppData((prev) => {
      const currentMatrix = prev[currentTab];
      const quadrant = currentMatrix[quadrantId as QuadrantId];
      const newTasks = quadrant.tasks.map((t) => 
        t.id === taskId ? { ...t, text: newText } : t
      );
      
      return {
        ...prev,
        [currentTab]: {
          ...currentMatrix,
          [quadrantId]: {
            ...quadrant,
            tasks: newTasks,
          },
        }
      };
    });
  };

  const handleClear = () => {
    const tabName = currentTab === TAB_ONLINE ? '线上活动' : '线下活动';
    if(window.confirm(`确定要清空“${tabName}”的所有任务吗？`)) {
        setAppData(prev => ({
            ...prev,
            [currentTab]: createInitialMatrix()
        }));
    }
  };

  const currentMatrix = appData[currentTab];

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      {/* Header & Tabs */}
      <div className="bg-white border-b border-gray-200 shadow-sm z-20 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800 flex items-center gap-2">
              <span className="w-8 h-8 bg-red-600 rounded text-white flex items-center justify-center text-lg shadow-sm">4</span>
              <span>四象限法则</span>
            </h1>
            <button 
                onClick={handleClear}
                className="text-sm text-gray-500 hover:text-red-600 transition-colors font-medium px-3 py-1 rounded hover:bg-red-50"
            >
                清空当前页
            </button>
          </div>
          
          {/* Tab Navigation */}
          <div className="flex space-x-8 -mb-px overflow-x-auto">
            <button
              onClick={() => setCurrentTab(TAB_ONLINE)}
              className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                currentTab === TAB_ONLINE
                  ? 'border-red-500 text-red-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              线上活动 (Online Events)
            </button>
            <button
              onClick={() => setCurrentTab(TAB_OFFLINE)}
              className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                currentTab === TAB_OFFLINE
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              线下活动 (Offline Events)
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid Container */}
      <div className="flex-1 p-2 md:p-8 flex justify-center overflow-auto">
        <div className="relative w-full max-w-7xl aspect-[1/2] md:aspect-[16/10] bg-white md:bg-transparent transition-all duration-300">
          
          {/* Axis Visuals (Desktop Only Overlay) */}
          <VerticalAxis />
          <HorizontalAxis />

          {/* The Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 w-full h-full gap-4 md:gap-12">
            
            {/* Top Left: Urgent & Not Important (Image Position) */}
            <div className="h-full min-h-[300px] shadow-sm rounded-lg overflow-hidden">
              <QuadrantList 
                data={currentMatrix[QuadrantId.Q2]} 
                onUpdateTask={handleUpdateTask} 
              />
            </div>

            {/* Top Right: Urgent & Important */}
            <div className="h-full min-h-[300px] shadow-sm rounded-lg overflow-hidden">
              <QuadrantList 
                data={currentMatrix[QuadrantId.Q1]} 
                onUpdateTask={handleUpdateTask} 
              />
            </div>

            {/* Bottom Left: Not Urgent & Not Important */}
            <div className="h-full min-h-[300px] shadow-sm rounded-lg overflow-hidden">
              <QuadrantList 
                data={currentMatrix[QuadrantId.Q4]} 
                onUpdateTask={handleUpdateTask} 
              />
            </div>

             {/* Bottom Right: Important & Not Urgent */}
             <div className="h-full min-h-[300px] shadow-sm rounded-lg overflow-hidden">
              <QuadrantList 
                data={currentMatrix[QuadrantId.Q3]} 
                onUpdateTask={handleUpdateTask} 
              />
            </div>

          </div>
          
          {/* Mobile Hint */}
          <div className="md:hidden mt-8 pb-8 text-center text-gray-400 text-sm">
            <p>请使用电脑浏览以查看象限坐标轴</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default App;
