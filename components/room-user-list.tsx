"use client"
import { Users } from "@/types/fetch.api"

export const UserRoomList = ({Users,number,open,click}:{click:()=>void;open:boolean,Users:Users[],number:number})=>{
    return(
            <details open={open} onClick={click}>
                <summary className="cursor-pointer" >
                    Members {number}
                </summary>
                <div className="flex flex-col gap-4">
                    {Users.map((user)=>(
                        <div key={user.id} className="flex gap-2 items-center">
                            <div className="flex gap-2 items-center">
                                <span className="w-[28px] h-[28px] rounded-[50%] flex items-center justify-center bg-green-400">
                                    {user.username.slice(0,1)}
                                </span>
                                <span>{user.username}</span>
                            </div>
                            {user.privilege.trim().toLowerCase() !== "user" && <span>admin</span>}
                        </div>
                    ))}
                </div>
            </details>
    )
}