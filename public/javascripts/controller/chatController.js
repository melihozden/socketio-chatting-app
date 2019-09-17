app.controller('chatController',['$scope',($scope)=>{
    const socket = io.connect("http://localhost:3000");
    console.log('Chat Hi');

    socket.on('hello',() =>{
        console.log("Hello")
    })
}])