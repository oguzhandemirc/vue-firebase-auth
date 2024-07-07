<template>
  <div class="row g-4">
    <div class="col-md-6" v-for="note in notes" :key="note.id">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{ note.title }}</h5>
          <p class="card-text">
            {{ note.desc }}
          </p>
        </div>
        <div class="card-footer">
          <router-link :to="`/UpdateArticle/${note.id}`">yazıyı güncelle</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { DB } from "@/firebase/configs.js";
import { collection, getDocs } from "firebase/firestore";
import { ref } from "vue";

const notes = ref([]);

const notesCollection = collection(DB, "notes");
getDocs(notesCollection).then((e) => {
  // console.log(e);
  let documents = [];
  e.docs.forEach((doc) => {
    documents.push({ ...doc.data(), id: doc.id });
    // documents.push(doc.data(),doc.id);
    // console.log(doc);
  });
  notes.value = documents;
});
</script>
