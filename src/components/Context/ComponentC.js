import { useContext } from "react"
import { UserContext, ChannelContext } from "./ComponentA"

export default function ComponentC() {
    let user = useContext(UserContext)
    let channel = useContext(ChannelContext)

    return (
        <div>{user} Wara {channel}</div>
    )
}