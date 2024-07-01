import { useSelector, useDispatch } from "react-redux";
import { addVotes } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes);

  const filterText = useSelector((state) => state.filter);
  const filteredAnecdotes = anecdotes.filter(
    (e) => e.content.toLowerCase().indexOf(filterText.toLowerCase()) !== -1
  );

  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch(addVotes(id));
    dispatch(
      setNotification(
        `You vote :" ${anecdotes.find((n) => n.id === id).content} "`
      )
    );
  };
  return (
    <>
      {filteredAnecdotes
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        ))}
    </>
  );
};

export default AnecdoteList;
