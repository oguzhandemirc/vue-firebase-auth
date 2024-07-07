<template>
  <div class="container">
    <header class="d-flex py-3 border-bottom mb-5">
      <router-link to="/" class="me-auto text-decoration-none text-dark">
        <span class="fs-3">Oğuzhan Demirci</span>
      </router-link>
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Yazılarım</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/register" class="nav-link"
            >Kaydol</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/addarticle" class="nav-link">
            Yazı Ekle</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="#" class="nav-link">Çıkış Yap</router-link>
        </li>
      </ul>
    </header>
  </div>
</template>
<script setup></script>
