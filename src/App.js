import './App.css';

function App() {
  return (
    <div class="d-flex h-100 text-center text-white bg-dark">
      <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header class="mb-auto">
            <div>
                <h3 class="float-md-start mb-0" id="full-name">Richard Brian Santos</h3>
                <nav class="nav nav-masthead justify-content-center float-md-end">
                    <a class="nav-link active" aria-current="page" href="#bio">About Me</a>
                    <a class="nav-link" href="#projects">Projects</a>
                    <a class="nav-link" href="https://github.com/rbsantos-code">GitHub</a>
                    <a class="nav-link" href="#contact">Contact</a>
                </nav>
            </div>
        </header>
      </div>
    </div>
  );
}

export default App;
