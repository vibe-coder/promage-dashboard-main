import React from 'react'
import "./SCSS/Task.scss"
import arrowRight from "../Images/arrow-right-left.gif"
import arrowDown from "../Images/arrow-down.svg"

function Task() {
  return (
    <div className='task-container'>


      <div className="daily-task">
        <div className='caution-wrapper'>
          <img src={arrowRight} alt='caution' />
          <p>Scroll right for more info</p>
        </div>

        <h3>Today task</h3>

        {/* Task List */}

        <div className="task-wrapper">
          
          <div className='task-list'>
            <div className="task-switch-wrapper">
              <button><p>All</p><div className='task-count'><p>10</p></div></button>
              <button><p>Important</p><div className='task-count'><p>0</p></div></button>
              <button><p>Notes</p><div className='task-count'><p>05</p></div></button>
              <button><p>Links</p><div className='task-count'><p>10</p></div></button>
            </div>
      
            <div className="task-items-wrapper">
              
              <div className="task">
                <input className='task-checkbox' type='checkbox' />
                <p className='task-name'>Create a user flow of social application design</p>
                <div className='task-status'>Approved</div>
              </div>

              <div className="task">
                <input className='task-checkbox' type='checkbox' />
                <p className='task-name'>Create a user flow of social application design</p>
                <div className='task-status'>In review</div>
              </div>

              <div className="task">
                <input className='task-checkbox' type='checkbox' />
                <p className='task-name'>Landing page design for Fintech project of Singapore</p>
                <div className='task-status'>In review</div>
              </div>

              <div className="task">
                <input className='task-checkbox' type='checkbox' />
                <p className='task-name'>Interactive prototype fro app screens of deltamine project</p>
                <div className='task-status'>On going</div>
              </div>

              <div className="task">
                <input className='task-checkbox' type='checkbox' />
                <p className='task-name'>Interactive prototype fro app screens of deltamine project</p>
                <div className='task-status'>Approved</div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Projects Workload */}

      <div className="project-workload-wrapper">

        {/* Projects Workload Header */}

        <div className="project-workload-header">
          <h3>Projects Workload</h3>
          <div>
            <p>Last 3 Months</p>
            <img src={arrowDown} alt="Arrow Down Icon"/>
          </div>
        </div>

        {/* Projects Worload Body */}

        <div className='project-workload-body'>

          <div className='user'>
            <div className='figure'>1</div>
            <div className='figure'>2</div>
            <div className='figure'>3</div>
            <h4>Sam</h4>
          </div>

          <div className='user'>
            <div className='figure'>1</div>
            <div className='figure'>2</div>
            <div className='figure'>3</div>
            <div className='figure'>4</div>
            <h4>Meldy</h4>
          </div>

          <div className='user'>
            <div className='figure'>1</div>
            <h4>Ken</h4>
          </div>

          <div className='user'>
            <div className='figure'>1</div>
            <div className='figure'>2</div>
            <div className='figure'>3</div>
            <div className='figure'>4</div>
            <div className='figure'>5</div>
            <div className='figure'>6</div>
            <h4>Dmitry</h4>
          </div>

          <div className='user'>
            <div className='figure'>1</div>
            <div className='figure'>2</div>
            <div className='figure'>3</div>
            <div className='figure'>4</div>
            <h4>Vego</h4>
          </div>

          <div className='user'>
            <div className='figure'>1</div>
            <h4>Kadin</h4>
          </div>

          <div className='user'>
            <div className='figure'>1</div>
            <div className='figure'>2</div>
            <h4>Melm</h4>
          </div>

        </div>
      </div>


    </div>
  )
}

export default Task