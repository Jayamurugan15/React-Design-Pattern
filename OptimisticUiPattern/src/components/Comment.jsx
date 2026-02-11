import { useOptimistic, useState } from "react"


const initialData = [
        {
            id: 1,
            comment:"Congratulation"
        },
        {
            id:2,
            comment:"Good Work"
        }
    ]

    async function sendcomment(text) {
        await new Promise((c)=> setTimeout(c,1000))

        if(Math.random() < 0.2) throw new Error("Network failed");
        console.log('comment sended')
        return {success:true}
    }


const Comment = () => {
    const [comment,setComment] = useState(initialData);
    const [text,setText]= useState("")

    const [optimisticcomment,addOptimisticComment] = useOptimistic(comment,(currentComment,newComment)=> {
      return [...comment,newComment]
    })

    const addComment = async () => {
        if(!text) return;

        const tempComment = {
            id:Date.now(),
            comment:text,
            pending:true
        }

        addOptimisticComment(tempComment);

        try {
            await sendcomment(text)
            setComment((prev)=> [
                ...prev,
                {
                    id:tempComment?.id,
                    comment:text
                }
            ])
        } catch (error) {
            console.log("error ")
        }

        setText("")

    }

    return (
        <div>
            {
                optimisticcomment.map((cmt)=> {
                    <p className="text-black" key={cmt?.id}>{cmt?.comment}</p>
                })
            }
            <input
             type="text" 
             value={text} 
             onChange={(e)=>setText(e.target.value)} 
             className="border border-gray-300 p-4"/>
            <button onClick={addComment}
            
            className="bg-blue-400 text-white p-3 rounded-lg">Add Comment</button>
        </div>
    )
}

export default Comment;