var LinkedList = LinkedList || {};

function LinkedList(){
	this.head = null,
	this.last = null,
	this.current = null,
	this.length = 0,
	this.moves = 0
}

LinkedList.prototype.add = function( front, back, left, right, exit, data){
	var Node = {
		id: this.length,
		front: front,
		back: back,
		left: left,
		right: right,
		exit: exit,
		data: data
	}
	
	if( this.head === null){
		this.head = Node;
		this.last = this.head;
		this.current = this.head;
	}
	else{
		if( this.last.exit == "front"){
			this.last.front = Node;
			this.last = this.last.front;
		}
		else if( this.last.exit == "back"){
			this.last.back = Node;
			this.last = this.last.back;
		}
		else if( this.last.exit == "left"){
			this.last.left = Node;
			this.last = this.last.left;
		}
		else if( this.last.exit == "right"){
			this.last.right = Node;
			this.last = this.last.right;
		}
	}
	this.length++;
};
	
LinkedList.prototype.move = function( next){
	this.moves++;	
	if( this.current.exit == next){
		if( next == "front"){
			this.current = this.current.front;
		}
		else if( next == "back"){
			this.current = this.current.back;
		}
		else if( next == "left"){
			this.current = this.current.left;
		}
		else if( next == "right"){
			this.current = this.current.right;
		}
	}
	else{
		var temp = this.head;
		if(next == "front"){
			for(var i = 0; i < this.front; i++){
				if(temp.exit == "front"){
					temp = temp.front;
				}
				else if(temp.exit == "back"){
					temp = temp.back;
				}
				else if(temp.exit == "left"){
					temp = temp.left;
				}
				else if(temp.exit == "right"){
					temp = temp.right;
				}
			}
			this.current = temp;
		}
		else if(next == "back"){
			for(var i = 0; i < this.back; i++){
				if(temp.exit == "front"){
					temp = temp.front;
				}
				else if(temp.exit == "back"){
					temp = temp.back;
				}
				else if(temp.exit == "left"){
					temp = temp.left;
				}
				else if(temp.exit == "right"){
					temp = temp.right;
				}
			}
			this.current = temp;
		}
		else if(next == "right"){
			for(var i = 0; i < this.left; i++){
				if(temp.exit == "front"){
					temp = temp.front;
				}
				else if(temp.exit == "back"){
					temp = temp.back;
				}
				else if(temp.exit == "left"){
					temp = temp.left;
				}
				else if(temp.exit == "right"){
					temp = temp.right;
				}
			}
			this.current = temp;
		}
		else if(next == "left"){
			for(var i = 0; i < this.front; i++){
				if(temp.exit == "front"){
					temp = temp.front;
				}
				else if(temp.exit == "back"){
					temp = temp.back;
				}
				else if(temp.exit == "left"){
					temp = temp.left;
				}
				else if(temp.exit == "right"){
					temp = temp.right;
				}
			}
			this.current = temp;
		}
	}
	return this.current;
};