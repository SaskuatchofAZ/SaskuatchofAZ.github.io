import React from "react";

function Contact() {
    return(
        <div className="container">
      <h2>Find me here:</h2>
      <br/>
      <div className="contactInfo">    
        <div className="row">
          <div className="col">
            <form className="contactMe" name="contact" data-netlify="true">
              <div className="form-group">
                <label for="exampleFormControlTextarea1">Name</label>
                <textarea className="form-control" name="name" id="exampleFormControlTextarea1" rows="1"></textarea>
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                <small id="emailHelp" className="form-text text-muted"></small>
              </div>
              <div className="form-group">
                <label for="exampleFormControlTextarea2">Message</label>
                <textarea className="form-control" name="message" id="exampleFormControlTextarea2" rows="4"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <br/>
      <h4>Email: asmithamongus@gmail.com</h4>
      <h4>Phone Number: 916-402-5560</h4>
      <h4>LinkedIn: <a href="https://www.linkedin.com/in/aaron-smith-405454196/"
          className="contactLink">linkedin.com/in/aaron-smith</a> </h4>
      <h4>Github: <a href="https://github.com/SaskuatchofAZ" className="contactLink">github.com/SaskuatchofAZ</a></h4>
    </div>
    )
}

export default Contact