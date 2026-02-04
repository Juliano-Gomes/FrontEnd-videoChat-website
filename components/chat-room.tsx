"use client"

import { SubRooms } from "@/types/fetch.api"
import { ArrowLeft, Send } from "lucide-react"
import { useState } from "react"

export const MessageRoom=({chat,exit}:{chat:SubRooms[],exit:()=>void})=>{
    const [message,setMessage] = useState("")
    //const me = "tyh56y"
    return(
        <section className="h-full w-full flex flex-col gap-3">
            <section className="flex items-center gap-2 justify-between p-2 h-[40px] w-full">
                <span onClick={()=>exit()} className="cursor-pointer">
                    <ArrowLeft />
                </span>
                <h1 className="grow">
                    {chat[0].subRoomName}
                </h1>
            </section>
            <section className="grow flex flex-col gap-2 p-2">
                <div className="grow border">
                    {}
                </div>
                <div className="w-full items-center justify-center p-2">
                    <div className="flex gap-2 h-[45px] w-[400px] items-center rounded border-gray-300 p-2 border">
                        <input type="text" placeholder="type your message..." className="grow outline-none border-none" onChange={(e)=>setMessage(e.target.value)} value={message}/>
                        <Send className="w-[20px]"/>
                    </div>
                </div>
            </section>
        </section>
    )
}