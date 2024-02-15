import React from 'react';

const Login = () => {
  return (
    <section className="login" >
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-md-8">
            <div className="card border-0 rounded-3">
              <div className="row g-0">
                <div className="col-md-6">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp" alt="login form" className="img-fluid rounded-start" />
                </div>
                <div className="col-md-6 d-flex align-items-center">
                  <div className="card-body p-md-5">
                    <form>
                      <div className="text-center mb-4">
                        <i className="fas fa-cubes fa-3x text-danger mb-3"></i>
                        <h1 className="h2 mb-3">Logo</h1>
                        <h5 className="fw-normal mb-4">Sign into your account</h5>
                      </div>
                      <div className="mb-4">
                        <label htmlFor="form2Example17" className="form-label">Email address</label>
                        <input type="email" id="form2Example17" className="form-control form-control-lg" />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="form2Example27" className="form-label">Password</label>
                        <input type="password" id="form2Example27" className="form-control form-control-lg" />
                      </div>
                      <div className="d-grid">
                        <button className="btn btn-dark btn-lg" type="button">Login</button>
                      </div>
                      <div className="text-center mt-3">
                        <a href="#!" className="small text-muted">Forgot password?</a>
                      </div>
                      <hr className="my-4" />
                      <div className="text-center">
                        <p className="mb-1">Don't have an account?</p>
                        <a href="#!" className="small text-muted">Register here</a>
                      </div>
                      <hr className="my-4" />
                      <div className="text-center">
                        <a href="#!" className="small text-muted">Terms of use.</a>
                        <a href="#!" className="small text-muted ms-3">Privacy policy</a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
