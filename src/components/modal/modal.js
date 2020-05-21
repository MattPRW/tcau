import React from 'react'
import '../modal/modal.css'


class Modal extends React.Component {
  constructor() {
    super()

    this.state = {
      description: {},
      data: null
    }
  }

  componentDidMount() {
    console.log(this.props.description)
  }

  render() {
    return (
      <div>
        <div className="modal-text">
          {this.props.description}
        </div>
      </div>
    )
  }

}

export default Modal

