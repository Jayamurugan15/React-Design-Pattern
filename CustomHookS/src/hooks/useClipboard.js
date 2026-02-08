import { useState } from "react"

function useClipboard(value) {

    const [clipboard,setClipboard] = useState(false);

    const copyToClipboard =  async (text)=> {
        try {
            await navigator.clipboard.writeText(text);
            setClipboard(true);

            setTimeout(() => {
                setClipboard(false)
            }, 2000);
        } catch (error) {
            console.log("Can't copy text")
        }
    }

    return {clipboard,copyToClipboard}

}

export default useClipboard