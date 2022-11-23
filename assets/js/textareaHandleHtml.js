const textareaHandleHtml = `<div class="container">
<div class="row">
  <h1 class="my-3">Type your text</h1>
  <div class="col-md-12">
    <textarea
      name="editor"
      id="editor"
      rows="8"
      class="shadow-sm form-control mb-3"
    ></textarea>
  </div>
</div>
</div>
<div class="container mb-3">
<div class="row">
  <div class="d-flex justify-content-between">
    <div>
      <button class="btn btn-danger" id="delete_account">Delete Account</button>
      <button class="btn btn-secondary" id="clear_task">
        Clear Task
      </button>
    </div>
    <button class="btn btn-primary" id="print">Print</button>
  </div>
</div>
</div>`;
export default textareaHandleHtml;
