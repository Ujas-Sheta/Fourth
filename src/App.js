import './App.css';
import Image1 from './assests/image/image-1.avif'


function App() {
  return (
    <div className='back'>
      <div className='new'>
        <div className='card'>
          <img src={Image1} className='card-img-top' alt=" " height='200px'></img>
          <div className='card-body'>
            <h5 className='card-title'>Card title</h5>
            <h6>Hello world this change only to show in git</h6>
            <h2>hello world</h2>
            <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className='btn btn-primary'>Go somewhere</a>
          </div>
        </div>

        <div className='d-flex flex-row bd-highlight mb-3'>
          <div className='bd-highlight text-white bg-danger' id='box-1'>Flex item 1</div>
          <div className='bd-highlight text-white bg-success' id='box-1'>Flex item 2</div>
          <div className='bd-highlight text-white bg-primary' id='box-1'>Flex item 3</div>
        </div>
      </div>
      <div>hhhhhh</div>
      <div>Hello world</div>
      <div className='card-image'>
        <img src={Image1} alt="Image1"></img>
        <div className='card-blur'></div>
      </div>
    </div>

  );
}

export default App;
