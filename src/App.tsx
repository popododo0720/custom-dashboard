import { Responsive, WidthProvider, Layouts } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import Linechart from './Linechart';
import Barchart from './Barchart';
import Treemapex from './Treemap';
import Piechartex from './Piechart';

const ResponsiveGridLayout = WidthProvider(Responsive);

function App() {
  const layouts: Layouts = {
    lg: [ // 1200px 이상
      { i: 'a', x: 0, y: 0, w: 3, h: 2 },
      { i: 'b', x: 3, y: 0, w: 3, h: 2 },
      { i: 'c', x: 0, y: 2, w: 3, h: 2 },
      { i: 'd', x: 3, y: 2, w: 3, h: 2 },
    ],
  };

  // 각 breakpoint 별 컬럼 수 
  const cols = { lg: 12 };

  // 기본 breakpoint 
  const breakpoints = { lg: 1200, md: 996 };

  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layouts} 
      breakpoints={breakpoints} 
      cols={cols} 
      margin={[10, 10]} 
    >
      <div key="a" style={{ border: '1px solid #ccc', backgroundColor: '#f0f0f0', width: '100%', height: '100%', overflow: 'hidden' }}>
        <Linechart />
      </div>
      <div key="b" style={{ border: '1px solid #ccc', backgroundColor: '#f0f0f0', width: '100%', height: '100%', overflow: 'hidden' }}>
        <Barchart />
      </div>
      <div key="c" style={{ border: '1px solid #ccc', backgroundColor: '#f0f0f0', width: '100%', height: '100%', overflow: 'hidden' }}>
        <Treemapex />
      </div>
      <div key="d" style={{ border: '1px solid #ccc', backgroundColor: '#f0f0f0', width: '100%', height: '100%', overflow: 'hidden' }}>
        <Piechartex />
      </div>
    </ResponsiveGridLayout>
    
  );
}

export default App;
