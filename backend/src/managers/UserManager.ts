import { Socket } from "socket.io";
import { isConstructorDeclaration } from "typescript";
interface User{
    socket:Socket;
    name:string;
}

export class UserManager(){
    private: users:User []
    private queue:string []   
    public:
    constructor() {
        this.users = [];
        this.queue = [];
        
    }
    addUser(username:String,socket:Socket){
        this.users.push({
            username, socket
        })
        this.queue.push(socket.id);
        //need to have a function that keeps on matching users 
        this.clearQueue();

    }
    removeUser(socketId){
        const user = this.users.find(x => x.socket.id === socketId);
        this.users = this.users.filter(x => x.socket.id !== socketId);
        this.queue = this.queue.filter(x=>x === socketId);
    }
    clearQueue(){
        if(this.queue.length<2){
            return;
        }
        const id1 = this.queue.pop();
        const id2 = this.queue.pop();
        const user1 = this.users.find(x => x.socket.id === id1);
        const user2 = this.users.find(x => x.socket.id === id2);
        if (!user1 || !user2) {
            return;
        }
    }

}
