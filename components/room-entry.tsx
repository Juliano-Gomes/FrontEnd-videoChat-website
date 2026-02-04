"use client"
import { roomInfoType, SubRooms as subRooms } from "@/types/fetch.api"
import { SubRooms } from "./sub-room-list"
import { UserRoomList } from "./room-user-list"
import { useState } from "react"
import { MessageRoom } from "./chat-room"
import { ChooseRoom } from "./choose-room"

export const RoomEntry = ({room}:{room:roomInfoType})=>{
    const [CurrentChatRoom,setCurrentChat] = useState<subRooms[] | []>([])
    const [collapse,setCollapse] =useState({
        first:true,
        second:true
    }) 
    const SelectChat = (id:string)=>{
        const chat = room.SubRooms.filter((sub)=>{
            return sub.subRoomId === id
        })
        setCurrentChat(chat!)
    }
    return(
        <section className="flex gap-3 p-2 w-screen h-screen">
            <section className="min-w-[300px]">
                <h1>{room.RoomTitle}</h1>
                <SubRooms selectedId={(e)=>SelectChat(e)} subRooms={room.SubRooms} open={collapse.first} click={()=>{}}/>
                <UserRoomList Users={room.members} open={collapse.second} click={()=>{}} number={room.members.length}/>
            </section>
            <section className="hidden sm:flex grow border">
                { CurrentChatRoom.length > 0 ? <MessageRoom chat={CurrentChatRoom} exit={()=>setCurrentChat([])}/> : <ChooseRoom/>}
            </section>
            <section className="hidden sm:flex min-w-[300px] border">
                {room.description}
                {}
            </section>
        </section>
    )
}