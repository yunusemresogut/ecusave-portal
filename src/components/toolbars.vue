<template>
  <div class="d-flex">
    <div
      id="kt_toolbar_container"
      class="container-fluid d-flex align-items-center"
    >
      <div class="flex-grow-1 flex-shrink-0 me-5">
        <div
          data-kt-swapper="true"
          data-kt-swapper-mode="prepend"
          data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}"
          class="page-title d-flex align-items-center flex-wrap me-3 mb-5 mb-lg-0"
        >
          <h1 class="d-flex align-items-center text-dark fw-bolder my-1 fs-3">
            {{ this.$route.name }}
            <span class="h-20px border-gray-200 border-start ms-3 mx-2"></span>
            <ul
              v-if="this.$route.path == '/'"
              class="breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1"
            >
              <li class="breadcrumb-item text-muted">
                <router-link
                  :to="this.$route.path"
                  class="text-muted text-hover-primary"
                >
                  {{ this.$route.name }}
                </router-link>
              </li>
            </ul>
            <ul
              v-else-if="
                this.$route.path == '/kayitlar' ||
                this.$route.path == '/profile' ||
                this.$route.path == '/pricing'
              "
              class="breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1"
            >
              <li class="breadcrumb-item text-muted">
                <router-link to="/" class="text-muted text-hover-primary">
                  Ana Sayfa
                </router-link>
              </li>
              <li class="breadcrumb-item">
                <span class="bullet bg-gray-200 w-5px h-2px"></span>
              </li>
              <li class="breadcrumb-item text-dark">{{ this.$route.name }}</li>
            </ul>
            <ul
              v-else-if="this.$route.path == '/kayitlar'"
              class="breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1"
            >
              <li class="breadcrumb-item text-muted">
                <router-link to="/" class="text-muted text-hover-primary">
                  Ana Sayfa
                </router-link>
              </li>
              <li class="breadcrumb-item">
                <span class="bullet bg-gray-200 w-5px h-2px"></span>
              </li>
              <li class="breadcrumb-item text-muted">
                <router-link to="/kayitlar" class="text-muted text-hover-primary">
                  Kayıtlar
                </router-link>
              </li>
              <li class="breadcrumb-item">
                <span class="bullet bg-gray-200 w-5px h-2px"></span>
              </li>
              <li class="breadcrumb-item text-dark">{{ this.$route.name }}</li>
            </ul>
          </h1>
        </div>
      </div>
      {{ getFormattedDate() }}
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getFormattedDate() {
      const date = new Date();

      return new Intl.DateTimeFormat("tr-TR", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(date);
    },
  },
};
</script>
