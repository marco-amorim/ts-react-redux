import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from './actions';
import { NewNote } from './NewNote';
import { NotesState } from './notesReducer';

function App() {
	const notes = useSelector<NotesState, NotesState['notes']>(
		(state) => state.notes
	);
	const dispatch = useDispatch();

	const onAddNote = (note: string) => {
		dispatch(addNote(note));
	};

	return (
		<React.Fragment>
			<NewNote addNote={onAddNote} />
			<hr />
			<ul>
				{notes.map((note) => {
					return <li key={note}>{note}</li>;
				})}
			</ul>
		</React.Fragment>
	);
}

export default App;
