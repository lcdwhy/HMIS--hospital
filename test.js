// function Node(data, leftSon, rightSon) {
//     this.data = data;
//     this.leftSon = leftSon;
//     this.rightSon = rightSon;
// }

// var s1 = new Node(7)
// var s2 = new Node(6)
// var s3 = new Node(5)
// var s4 = new Node(4)

// var Son1 = new Node(3, s2, s1)
// var Son2 = new Node(2, s4, s3)
// var parent = new Node(1, Son1, Son2)



// function Queue(element){
// 	//存放数据
// 	this.items = []
	
// 	//元素添加进队列
// 	Queue.prototype.enqueue = function(element){
// 		this.items.push(element)
// 	}
// 	//从队列中删除元素
// 	Queue.prototype.dequeue = function(){
// 		return this.items.shift()
// 	}
// 	//查看队列中的第一个元素
// 	Queue.prototype.front = function(){
// 		return this.items[0]
// 	}
// 	//查看队列中是否为空
// 	Queue.prototype.isEmpty = function(){
// 		return this.items.length == 0
// 	}
// 	//查看队列中元素的个数
// 	Queue.prototype.size = function(){
// 		return this.items.length
// 	}
// 	//toString
// 	Queue.prototype.toString = function(){
// 		return this.items.reduce( (total, currentValue) => {
// 			return total + (currentValue + '')
// 		} )
// 	}
// }
// var queue = new Queue()





// var totalarr = []
// var index =0
// function treeout(node, index){
//     if( totalarr[index] instanceof Array){
//         totalarr[index].push(node.data)
//     }else{
//         totalarr[index] = []
//         totalarr[index].push(node.data)
//     }
    
    
//     if(node.leftSon !== undefined){
//         treeout(node.leftSon, index+1)
//     }
//     if(node.rightSon !== undefined){
//         treeout(node.rightSon, index+1)
//     }
// }


// treeout(parent, index)
// console.log(totalarr)
// for(let i of totalarr){
//     console.log(i.toString())
// }


// // var totalarr = []
// // var arr = [1]
// // var index = 0
// // totalarr[index] = arr
// // console.log(totalarr)
// let arr = [1,2,3,[4,5,[6,7]]]

// while (arr.some( item => Array.isArray(item))) {
// 	arr = [].concat(...arr)
// }


(function d(n){
    console.log(n);
    var n = 200;
})(100)

(function de(n){
    console.log(n);
    var n = 200;
})(100)
