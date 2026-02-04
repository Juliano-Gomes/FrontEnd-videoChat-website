'use server'

import { roomInfoType } from "@/types/fetch.api"

 
export const RetrieveInfo = async (props:{roomId:string}):Promise<{RoomInfo:roomInfoType}>=>{
    const RoomInfo = await fetch(`http://localhost:5000/Room/info/${props.roomId}`,{method:"GET"})
    const Response:{roomInfo:roomInfoType} = await RoomInfo.json()
    return{
        RoomInfo:Response.roomInfo
    }
}