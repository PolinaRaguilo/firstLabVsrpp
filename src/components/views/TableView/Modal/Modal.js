import React from "react";
import { connect } from "react-redux";
import { editPersonFalse } from "../../../../redux/actions";

class ModalWindow extends React.Component {

  
  render() {
    const {editing} = this.props.data;
    const {onModalClose} = this.props;

    if(editing === false){
      return null;
    }
    return (
      <div className="modal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={() => onModalClose()}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    data: state.modalReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onModalClose: () => dispatch(editPersonFalse())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ModalWindow);