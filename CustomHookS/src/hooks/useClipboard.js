import { useState } from "react"

function useClipboard(value) {

    const [copied,setCopied] = useState(false);
    const [error, setError] = useState("");

    const copyToClipboard =  async (text)=> {
        try {
            if(!text || text.trim() === ""){
                setError("Nothing To copy");
                setCopied(false);
                return
            }
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setError("");

            setTimeout(() => {
                setCopied(false)
            }, 2000);
        } catch (error) {
            console.log("Can't copy text");
            setError(error)
        }
    }

    return {copied,copyToClipboard,error,setError}

}

export default useClipboard