import React from 'react'

const formSubmit = props => {
    return(
        <div className="formSubmit">
             {props.notes.map(form => {
        return (
          <div className="form" key={form.id}>
            <h2>{form.name}</h2>
            <p>{form.email}</p>
            <p>{form.role}</p>
          </div>
        );
      })}
        </div>
    )
}

export default formSubmit


// console.log(props);
// return (
//   <div className="note-list">
//     {props.notesList.map(note => {
//       return (
//         <div className="note" key={note.id}>
//           <h2>{note.title}</h2>
//           <p>{note.body}</p>
//         </div>
//       );
//     })}
//   </div>
// );
// };
// export default Notes;
