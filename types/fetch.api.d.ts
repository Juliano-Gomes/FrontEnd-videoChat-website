export type roomInfoType = {
    RoomId:string,
    RoomTitle:string,
    owners:{
        id:string,
        name:string,
        roomId:string,
        userId:string
    }[],
    description:string,
    members:Users[],
    SubRooms:SubRooms[],
    room_link:string,
    createdAt:Date,
}

export type SubRooms ={subRoomId:string,subRoomName:string,subRoomType:string,RoomId:string,MessageContainer:message[]}
export type Users = {id:string,username:string,roomId:string,userId:string,addedAt:Date,privilege:string}

export type message={
    message:true,
    username:true,
    userId:true,
}