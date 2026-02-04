import { RetrieveInfo } from "@/app/server/retriveInfo"
import { RoomEntry } from "@/components/room-entry"
import { redirect } from "next/navigation"
import { Suspense } from "react"

export default async function RoomInfo ({params}:{params:Promise<{roomId:string}>}) {
    const {roomId} = await params

    if(!roomId){
        redirect("/")
    }
    // make api call to retrieve room Info
    const {RoomInfo} = await RetrieveInfo({roomId})

    return(
        <section>
            <Suspense fallback={<>Loading...</>}>
                <RoomEntry room={RoomInfo}/>
            </Suspense>
        </section>
    )
}