import { useOptimistic, useState, startTransition } from "react";

const initialData = [
  {
    id: 1,
    comment: "Congratulation",
  },
  {
    id: 2,
    comment: "Good Work",
  },
];

async function sendComment(text) {
  await new Promise((c) => setTimeout(c, 2500));

  if (Math.random() < 0.2) {
    throw new Error("Network failed");
  }
  console.log("comment sended");
  return { success: true };
}

const Comment = () => {
  const [comment, setComment] = useState(initialData);
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const [optimisticcomment, addOptimisticComment] = useOptimistic(
    comment,
    (currentComment, newComment) => {
      return [...currentComment, newComment];
    },
  );

  const addComment = async () => {
    if (!text) return;

    const tempComment = {
      id: Date.now(),
      comment: text,
      pending: true,
    };

    const currentText = text;
    setText("");
    setError("");

    startTransition(async () => {
      addOptimisticComment(tempComment);

      try {
        await sendComment(currentText);
        setComment((prev) => [
          ...prev,
          {
            id: tempComment.id,
            comment: currentText,
          },
        ]);
      } catch (error) {
        console.error("Failed to send comment:", error);
        setError("Failed to Send Comment");
      }
    });
  };

  return (
    <div className=" ">
      <h3 className="text-xl font-bold mb-4">Comments (Optimistic Demo)</h3>

      <div className="space-y-3 mb-4">
        {optimisticcomment.map((cmt) => (
          <div
            key={cmt.id}
            className={`p-3 rounded-lg shadow-sm border 
        ${cmt.pending ? "bg-yellow-50 border-yellow-300" : "bg-white border-gray-200"}`}
          >
            <p className="text-black">{cmt.comment}</p>

            {cmt.pending && (
              <div className="flex items-center gap-2 mt-1 text-sm text-yellow-600">
                {/* Loader */}
                {/* <div className="w-3 h-3 border-2 border-yellow-500 border-t-transparent rounded-full animate-spin"></div> */}
                Sending...
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input Section */}
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              setError("");
            }}
            placeholder="Write a comment..."
            className="flex-1 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            onClick={addComment}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-md transition"
          >
            Add
          </button>
        </div>
        <p className="text-red-400">{error}</p>
      </div>
    </div>
  );
};

export default Comment;
