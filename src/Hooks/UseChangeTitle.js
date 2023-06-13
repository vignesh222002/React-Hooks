const { useEffect } = require("react");

export default function UseChangeTitle(count) {
    useEffect( () => {
        document.title = "Count - " + count
    },[count])
}