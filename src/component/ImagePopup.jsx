import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/js/src/modal'

function ImagePopup({image}) {
  return (
    <div>
        <div className='modal fade' id='imageExample' tabIndex='-1' aria-hidden="true">
            <div className="modal-dialog" >
                <div className='modal-content'>
                    <div className='modal-body'>
                        <button type="button" className='btn-close' data-bs-dismiss="modal" aria-label='Close'>
                            <img src={image}></img>
                        </button>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default ImagePopup