"use client"

import {type  SubRooms as subRooms} from "@/types/fetch.api"

export const SubRooms = ({subRooms,open,click,selectedId}:{click:()=>void;open:boolean,subRooms:subRooms[],selectedId:(id:string)=>void})=>{
    return(
        <details open={open} onClick={click} className="cursor-pointer">
            <summary>
                SubRoom List {subRooms.length}
            </summary>
            <div>
                {subRooms.map((room)=>(
                    <div key={room.subRoomId} className="flex items-center gap-2" onClick={()=>{
                        if(room.subRoomType.trim().toLowerCase() === "message") selectedId(room.subRoomId)
                    }}>
                        <span>{room.subRoomName}</span>
                        <span>{room.subRoomType === "message" ? "chat" : "call" }</span>
                    </div>
                ))}
            </div>
        </details>
    )
}