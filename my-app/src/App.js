
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header"/>
      <h1>Complete the flowing form</h1>
      <form>
      <fieldset className="names">
      <label>
      <p>First name</p>
      <input name="First name" />
      </label>
      <label>
      <p>Name</p>
      <input name="Name" />
      </label>
      </fieldset>
      <div class="form-check"/>
      <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
      <label class="form-check-label" for="exampleRadios1"> Teacher </label>
      <div class="form-check">
      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
      <label class="form-check-label" for="exampleRadios2">Student</label>
      </div>
      <div class="form-check">
      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled/>
      <label class="form-check-label" for="exampleRadios3">Officer</label>
      </div>
      <button type="submit">Submit</button>
      </form>
      </div>
  )}

export default App;