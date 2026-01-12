<template>
  <div class="footer py-4 d-flex flex-lg-column" id="kt_footer">
    <div
      class="
        container-fluid
        d-flex
        flex-column flex-md-row
        align-items-center
        justify-content-between
      "
    >
      <div class="text-dark order-2 order-md-1">
        <span class="text-muted fw-bold me-1"
          >{{ new Date().getFullYear() }}©</span
        >
        <router-link
          to="/"
          target="_blank"
          class="text-gray-800 text-hover-primary"
          >Ecusave</router-link
        >
      </div>
      <!-- <ul class="menu menu-gray-600 menu-hover-primary fw-bold order-1">
        <li class="menu-item">
          <a
            href="https://ecusave.com/hakkimizda.html"
            target="_blank"
            class="menu-link px-2"
            >Hakkımızda</a
          >
        </li>
        <li class="menu-item">
          <a
            href="https://ecusave.com/yardim.html"
            target="_blank"
            class="menu-link px-2"
            >Yardım</a
          >
        </li>
        <li class="menu-item">
          <a
            href="https://ecusave.com/iletisim.html"
            target="_blank"
            class="menu-link px-2"
            >Destek</a
          >
        </li>
      </ul> -->
    </div>
  </div>
</template>