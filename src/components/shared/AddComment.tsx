import { useState, useEffect } from 'react';

interface Comment {
  id: number;
  name: string;
  text: string;
}

const AddComment: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  const handleAddComment = () => {
    if (name && text.length >= 8) {
      const newComment: Comment = {
        id: comments.length + 1,
        name,
        text,
      };

      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      localStorage.setItem('comments', JSON.stringify(updatedComments));

      setName('');
      setText('');
    }
  };

  return (
    <div id="reviews" className="p-4 w-full mx-auto mb-20">
      <h2 className="text-lg font-bold mb-4">Add a comment</h2>
      <input
        type="text"
        placeholder="Author name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      />
      <textarea
        placeholder="Comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      />
      <button
        onClick={handleAddComment}
        className="w-full bg-black text-white p-2 rounded-full hover:bg-gray-900 disabled:bg-gray-300"
        disabled={text.length < 1}
      >
        Comment on the product
      </button>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">Reviews:</h3>
        {comments.map((comment) => (
          <div key={comment.id} className="mt-2 p-2 border rounded">
            <p className="font-bold">{comment.name}</p>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddComment;
