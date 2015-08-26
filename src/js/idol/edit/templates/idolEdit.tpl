<h2>Edit Idol</h2>

<div class="row">
  <div class="col-xs-12 col-md-6">
    <form>
      <div class="form-group">
        <label for="name">이름</label>
        <input type="text" class="form-control" id="name" name="name" placeholder="이름을 입력하세요." value="<%- name %>">
      </div>
      <div class="form-group">
        <label for="group">소속그룹</label>
        <select class="form-control" name="group">
          <% _.each(groups, function(gr) { %>
            <option value="<%- gr['_id'] %>" <%- group === gr['_id'] ? 'selected' : '' %>><%- gr['name'] %></option>
          <% }) %>
        </select>
      </div>
      <div class="form-group">
        <label for="height">신장</label>
        <input type="text" class="form-control" id="height" name="height" placeholder="신장을 입력하세요." value="<%- height %>">
      </div>
      <div class="form-group">
        <label for="weight">몸무게</label>
        <input type="text" class="form-control" id="weight" name="weight" placeholder="몸무게를 입력하세요." value="<%- weight %>">
      </div>
      <div class="form-group">
        <label for="imageLink">이미지 링크</label>
        <input type="text" class="form-control" id="imageLink" name="imageLink" placeholder="imageLink 입력하세요." value="<%- imageLink %>">
      </div>
      <a class="btn btn-danger js-listIdol">취소</a>
      <button type="button" class="btn btn-primary js-editIdol">수정</button>
    </form>
  </div>

  <div class="col-xs-12 col-md-6">
    <h6>Image 미리보기</h6>
    <img src="<%- imageLink %>" alt="" class="img-responsive" />
  </div>
</div>
