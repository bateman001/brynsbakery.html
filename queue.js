
// ORDER QUEUE
function Queue(){ this.data=[];}

var account= { email, password, firstname, lastname, order },
	email= null,
	password= null,
	firstname= null,
	lastname= null,
	order= null;


	

//Insert 
Queue.prototype.add = function(record){
  this.data.unshift(record);
}

//Delete
Queue.prototype.remove = function(){
  this.data.pop();
}


Queue.prototype.first = function(){
	  return this.data[0];
}

Queue.prototype.last = function(){
	  return this.data[this.data.length - 1];
}

Queue.prototype.size = function(){
	  return this.data.length;
}

//UPDATE ALGORITHM
Queue.prototype.update = fucntion(){
	return.this.data.remove();
	return.this.data.unshift(record):
}


}
	


