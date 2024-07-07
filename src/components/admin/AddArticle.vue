<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h1 class="text-center">Yeni Yazı Ekle</h1>
      <form>
        <div class="mb-3">
          <label class="form-label">Başlık</label>
          <input type="text" class="form-control" />
        </div>
        <div class="mb-3">
          <label class="form-label">Yazı</label>
          <textarea type="text" class="form-control" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Ekle</button>
      </form>
    </div>
  </div>
</template>
<script setup></script>
