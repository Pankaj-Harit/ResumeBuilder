import valerie from './images/Valerie.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className="Head">
          <div className="Home">Home</div>
          <div className="About">
          <p>About</p>
          <p>______</p>
          </div>
          <div className="Resume">Resume</div>
          <div className="Contact">Contact</div>
        </div>
      </header>
      <main className="content">
        <div className="image">
          <img src={valerie} alt="" />
        </div>

        <div className="info">
          <header >  
            <p> More About Myself</p>
            <p>___________________</p>
          </header>

         <div className="description">
          <p> I'm <span>Samantha Williams</span>, a UI/UX Designer/Develper. </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Placeat odio corporis, accusamus, recusandae aperiam labore omnis 
            perspiciatis suscipit ea veniam hic enim incidunt dolores quis explicabo
            quas velit soluta sed!</p>
         </div>

          <div className="form">
            <h1>Skills -</h1>
              <div >
                <div>
                  <p>Web Design -</p>
                  <p>Intermediate</p>
                  <p>______________________</p>
                  <p>Angular -</p>
                  <p>Beginner</p>
                  <p>______________________</p>
                  <p>Bootstrap -</p>
                  <p>Intermediate</p>
                  <p>______________________</p>
                </div>
                <div>
                  <p>React js -</p>
                  <p>Expert</p>
                  <p>______________________</p>
                  <p>HTMl/CSS -</p>
                  <p>Expert</p>
                  <p>______________________</p>
                  <p>Vue -</p>
                  <p>Beginner</p>
                  <p>______________________</p>
                </div>
              
              </div>
            
          </div>

          <div className="footer">
            <div>
              <p>5</p>
              <p>year of Experience</p>
            </div>
            <div>
              <p>35</p>
              <p>Project Done</p>
            </div>
            <div>
              <p>40</p>
              <p>Clients</p>
            </div>
          </div>

       </div> 
      </main>
    </div>
  );
}

export default App;
