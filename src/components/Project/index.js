import React from 'react';

function Project() {

    return (
        <>
            <h2 className="justify-content-center text-center" id="projects">Projects</h2>
            <section class="col-12">
                <a href="https://salty-thicket-97397.herokuapp.com/">
                    <img src="./assets/img/brewmaps.png" class="img-fluid rounded" alt="brewmaps"></img>
                </a>
            </section>
            <br />
            <section class="columns">
                <div class="row justify-content-center">
                    <div class="column col-6">
                        <a href="https://github.com/rbsantos-code/Note-Taker.git">
                            <img src="./assets/img/notetaker.png" class="img-fluid rounded" alt="noteTaker"></img>
                        </a>
                    </div>
                    <div class="column col-6">
                        <a href="https://github.com/rbsantos-code/team-profile-gen.git">
                            <img src="./assets/img/teamgenerator.png" class="img-fluid rounded" alt="teamProfile"></img>
                        </a>
                    </div>
                </div>
            </section>
            <br />
            <section class="columns">
                <div class="row justify-content-center">
                    <div class="column col-6">
                        <a href="https://github.com/rbsantos-code/weather-dash.git">
                            <img src="./assets/img/weatherAPI.png" class="img-fluid rounded" alt="weatherApi"></img>
                        </a>
                    </div>
                    <div class="column col-6">
                        <a href="https://github.com/rbsantos-code/work-day-planner.git">
                            <img src="./assets/img/workday.png" class="img-fluid rounded" alt="workDay"></img>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Project;