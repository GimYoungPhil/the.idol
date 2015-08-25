<h2>Show Idol</h2>

<div class="row">
  <div class="col-xs-12 col-md-6">
    <form>
      <div class="form-group">
        <label for="name">이름</label>
        <h3 class="form-control-static"><%- name %></h3>
      </div>
      <div class="form-group">
        <label for="group">소속그룹</label>
        <h3 class="form-control-static"><%- group %></h3>
      </div>
      <div class="form-group">
        <label for="group">신장</label>
        <h3 class="form-control-static"><%- height %> cm</h3>
      </div>
      <div class="form-group">
        <label for="group">몸무게</label>
        <h3 class="form-control-static"><%- weight %> kg</h3>
      </div>
      <button type="button" class="btn btn-danger js-deleteIdol">삭제하자</button>
      <button type="button" class="btn btn-warning js-editIdol">수정하자</button>
      <button type="button" class="btn btn-success js-listIdol">목록으로</button>
    </form>
  </div>

  <div class="col-xs-12 col-md-6">
    <h6>Image 미리보기</h6>
    <img src="<%- imageLink %>" alt="" class="img-responsive" />
  </div>
</div>
