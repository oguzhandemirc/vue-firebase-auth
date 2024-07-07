<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h1 class="text-center">Yazıyı Güncelle</h1>
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
        <button type="submit" class="btn btn-primary ">Güncelle</button>
        <button @click="deleteNote" type="submit" class="btn btn-danger ms-2">
          Sil
        </button>
      </form>
    </div>
  </div>
</template>
<script setup>
import { DB } from "@/firebase/configs.js";
import { doc, getDoc, updateDoc,deleteDoc } from "firebase/firestore";
import { reactive } from "vue";
import { useRouter, useRoute } from "vue-router"; // router'a yönlendirme yapmak için useRouter. Route parametrelerini almak için useRoute

const router = useRouter();
const route = useRoute();

const formData = reactive({
  title: "",
  desc: "",
});

const docRef = doc(DB, "notes", route.params.id); // route.params.id ile parametreleri alıyoruz

getDoc(docRef)
  .then((e) => {
    formData.title = e.data().title;
    formData.desc = e.data().desc;
  })
  .catch((error) => {
    console.error(error);
  });

const submitForm = async () => {
  try {
    const updateDocument = doc(DB, "notes", route.params.id);

    await updateDoc(updateDocument, {
      ...formData,
    });
    router.push("/");
  } catch (error) {
    console.error(error);
  }
};

const deleteNote = async () => {
  try {
    const docRef = (doc(DB, "notes", route.params.id));
    await deleteDoc(docRef);
    router.push("/");

} catch (error) {
    console.log(error);
}
};
</script>
