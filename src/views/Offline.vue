<template>
  <div id="kt_content_container" class="container-xxl">
    <!--begin::Card-->
    <div class="card">
      <!--begin::Card body-->
      <div class="card-body">
        <!--begin::Heading-->
        <div class="card-px text-center pt-15 pb-15">
          <!--begin::Title-->
          <h2 class="fs-2x fw-bolder mb-0">İnternete Bağlanın</h2>
          <!--end::Title-->
          <!--begin::Description-->
          <p class="text-gray-400 fs-4 fw-bold py-7">
            İnternete bağlı değilsiniz bağlantınızı kontrol edin.
          </p>
          <!--end::Description-->
          <!--begin::Action-->
          <button
            @click="refreshPage()"
            class="btn btn-primary er fs-6 px-8 py-4"
            data-bs-toggle="modal"
            data-bs-target="#kt_modal_two_factor_authentication"
          >
            Tekrar Deneyin
          </button>
          <!--end::Action-->
        </div>
        <!--end::Heading-->
        <!--begin::Illustration-->
        <div class="text-center pb-15 px-5">
          <img
            src="../assets/media/illustrations/sketchy-1/17.png"
            alt=""
            class="mw-100 h-200px h-sm-325px"
          />
        </div>
        <!--end::Illustration-->
      </div>
      <!--end::Card body-->
    </div>
    <!--end::Card-->
  </div>
</template>

<script>
export default {
  methods: {
    refreshPage() {
      this.$router.go(0);
    },
  },
};
</script>