import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'; 
import './LandingPage.css'
function LandingPage() {
  return (
    <div className="container mt-5">
      <header className="text-center">
        <h1>Taha Khan</h1>
        <p className="lead">Web Developer<br/>React JS Developer<br/></p>
      </header>
      <section className="mt-4">
        <div className="row">
          <div className="col-md-6">
            <h2>About Me</h2>
            <p>
            I am a student of Bachelors at Federal Urdu University currently Enrolled in 7th smester in the Department of Computer Sciences. I am very passionate about my work.
            </p>
            <h2>Skills</h2>
            <p>HTML
            <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar bg-danger" style={{ width: '100%' }}></div>
  
</div>
            </p>
            <p>CSS
            <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar bg-danger" style={{ width: '100%' }}></div>
  
</div>
            </p>
            <p>JavaScript
            <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar bg-danger" style={{ width: '80%' }}></div>
  
</div>
            </p>

            <p>Bootstrap
            <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar bg-danger" style={{ width: '80%' }}></div>
  
</div>
            </p>
            <p>React JS
            <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar bg-danger" style={{ width: '50%' }}></div>
  
</div>
            </p>
            <p>SQL Queries
            <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar bg-danger" style={{ width: '80%' }}></div>
  
</div>
            </p>
            <p>WinForm C#
            <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar bg-danger" style={{ width: '100%' }}></div>
  
</div>
            </p>


          </div>
          <div className="col-md-6">
            <h2>Contact Information</h2>
            <pre>Email:   <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">Taha Khan</a></pre>
            <pre>LinkedIn:  <a href="https://www.linkedin.com/in/taha-khan-aa4a7828b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Taha Khan</a></pre>
            <pre>GitHub:  <a href="https://github.com/tahaKhan2003">tahaKhan2003</a></pre>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
