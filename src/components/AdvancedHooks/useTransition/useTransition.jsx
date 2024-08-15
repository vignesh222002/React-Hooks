import { useState, useTransition } from "react";


export default function UseTransitionHook() {
    const [input, setInput] = useState('')
    const [list, SetList] = useState([])

    const [isPending, startTransition] = useTransition()

    function handler(value) {
        setInput(value)

        // These are low priority tasks, which are running in the backend
        startTransition(() => {
            // Time Taken Low Priority tasks
            let l = []
            for (let i = 0; i < 20000; i++) {
                l.push(value)
            }
            SetList(l)
        })
    }

    return (
        <div>
            <input type="text" value={input} onChange={(e) => handler(e.target.value)} />
            <br />
            {isPending ? (
                <>Loading...</>
                ) : (
                    list?.length ? (
                        list?.map((item, index) => (
                            <h5 key={index}>{item}</h5>
                        ))
                    ) : (
                            <></>
                        )
                )
            }
        </div>
    )
}