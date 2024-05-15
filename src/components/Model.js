export default function Model(probs) {
    const styles={
        width : '100%'
    }
    return (
      <div>
      
<button type="button" className="btn btn-primary my-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Summery
</button>


<div className="modal fade" style={ styles}  id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Summery</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <h4>Text :</h4>
       {probs.text}
       <h4>Length :</h4>
       {probs.text.length}
       <h4>Words :</h4>
       {probs.text.split(' ').length}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
      </div>
    );
  }