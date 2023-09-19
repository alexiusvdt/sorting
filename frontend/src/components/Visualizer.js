import FlipMove from 'react-flip-move';

const bars = []

function Visualizer() { 
return (
  <div className='visualizer'>
    <p>Visualizer!</p>
  {/* const graph = ({ bars }) => (
    <FlipMove duration={750} easing="ease-out">
      {bars.map(bar => (
        <Bar key={bar.id} {...bar} />
      ))}
    </FlipMove>
  ); */}
  
  </div>
  );
}

export default Visualizer;