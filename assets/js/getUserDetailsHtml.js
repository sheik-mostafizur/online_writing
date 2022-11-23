const getUserDetailsHtml = `<div id="get_user_details">
<div class="container">
  <div class="row vh-100 d-flex align-content-center">
    <div class="col-md-6 m-auto mt-5 border py-5 px-3">
      <form>
        <div>
          <label for="name" class="form-label">Enter Your Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
        </div>
        <div class="mb-3">
          <label for="day" class="form-label">Class Number/Day</label>
          <input
            type="text"
            class="form-control"
            id="day"
            name="day"
            placeholder="Day"
            required
          />
        </div>
        <div class="mb-3">
          <label for="topic" class="form-label">Task Topic</label>
          <input
            type="text"
            class="form-control"
            id="topic"
            name="topic"
            placeholder="Topic"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</div>
</div>`;
export default getUserDetailsHtml
