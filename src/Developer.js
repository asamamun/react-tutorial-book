  //class developer
  //ccc, cc
  class Developer {
    constructor (f,l){
      this.fname = f;
      this.lname = l;
    }
    getName() {
      return this.fname + ' ' + this.lname;
      }
    state = {  } 
    render() { 
      return (
  <div>Hello</div>
      );
    }
  } 
  export default Developer;