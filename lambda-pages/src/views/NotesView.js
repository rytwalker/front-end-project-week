import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllNotes } from '../actions';
import { DragDropContext } from 'react-beautiful-dnd';
import Notes from '../components/Notes';
import styled from 'styled-components';

// dummy data
// import notesData from '../notes';

class NotesView extends Component {
  state = {
    notes: []
  };
  componentDidMount() {
    this.setState({ notes: this.props.notes });
    return !this.props.notes.length ? this.props.getAllNotes() : null;
  }

  handleRedirectToNoteView = id => {
    this.props.history.push(`/note/${id}`);
  };

  onDragEnd = result => {
    // const { destination, source, draggableId } = result;
    // if (!destination) {
    //   return;
    // }
    // if (
    //   destination.droppableId === source.droppableId &&
    //   destination.index === source.index
    // ) {
    //   return;
    // }
    // const notes = this.state.notes;
    // const newNoteIds = notes.map(note => note._id);
    // newNoteIds.splice(source.index, 1);
    // newNoteIds.splice(destination.index, 0, draggableId);
    // const newNotes = notes.map((note, index) => {
    //   return {
    //     ...note,
    //     _id: newNoteIds[index]
    //   };
    // });
    // this.setState({ notes: newNotes });
  };

  render() {
    const { notes, isFetching } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="View NoteView">
          <h2>Your Notes:</h2>
          {isFetching ? (
            <div>Loading Your Notes...</div>
          ) : (
            <Notes
              id="1"
              notes={notes.filter((note, index) => index % 3 === 0)}
              handleRedirectToNoteView={this.handleRedirectToNoteView}
            />
          )}
        </div>
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes.notes,
    isFetching: state.notes.isFetching
  };
};

export default connect(
  mapStateToProps,
  { getAllNotes }
)(NotesView);
