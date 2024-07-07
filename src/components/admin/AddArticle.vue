<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h1 class="text-center">Yeni Yazı Ekle</h1>
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label class="form-label">Başlık</label>
          <input type="text" class="form-control" v-model="formData.title" />
        </div>
        <div class="mb-3">
          <label class="form-label">Yazı</label>
          <textarea
            type="text"
            class="form-control"
            rows="3"
            v-model="formData.desc"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Ekle</button>
      </form>
    </div>
  </div>
</template>
<script setup>
import { DB } from "@/firebase/configs.js";
import { collection, addDoc } from "firebase/firestore";
import { reactive } from "vue";

const formData = reactive({
  title: "",
  desc: "",
});

const submitForm = async () => {
  //   const notesCollection = collection(DB, "notes");
  //   await addDoc(notesCollection, {
  //     ...formData,
  //   });
  const notesCollection = await addDoc(collection(DB, "notes"), {
    ...formData,
  });

  formData.title = "";
  formData.desc = "";
};
</script>
