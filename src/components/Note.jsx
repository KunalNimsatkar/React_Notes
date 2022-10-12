import { MdDeleteForever } from "react-icons/md";

const Note = ({ id, text, date , handleDelete}) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note_footer">
        <small>{date}</small>
        <MdDeleteForever className="delete_icon" size="1.3em" onClick={() => handleDelete(id)}/>
      </div>
    </div>
  );
};

export default Note;
