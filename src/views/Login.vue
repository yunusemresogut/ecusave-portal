<template>
  <div id="kt_body" class="bg-body">
    <div class="d-flex flex-column flex-root" style="height: 100vh">
      <div
        class="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-cover bgi-attachment-fixed backimage"
      >
        <div
          class="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20"
        >
          <router-link to="/login" class="mb-12">
            <img
              alt="Logo"
              style="height: 80px"
              src="../assets/media/ecusavebeyaz.png"
            />
          </router-link>
          <div
            class="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto"
          >
            <form @submit.prevent="signin" class="form w-100">
              <div class="text-center mb-10">
                <h1 class="text-dark mb-3">Giriş</h1>
                <div class="text-gray-400 fw-bold fs-4">
                  Yeni misiniz?
                  <router-link to="/register" class="link-primary fw-bolder">
                    Kayıt Ol
                  </router-link>
                </div>
              </div>
              <div class="fv-row mb-10">
                <label class="form-label fs-6 fw-bolder text-dark">Email</label>
                <input
                  class="form-control form-control-lg form-control-solid"
                  ref="email"
                  v-model="email"
                  @keypress.enter="giris($event)"
                  type="text"
                  name="email"
                  autocomplete="off"
                />
              </div>
              <div class="fv-row mb-10">
                <div class="d-flex flex-stack mb-2">
                  <label class="form-label fw-bolder text-dark fs-6 mb-0">
                    Şifre
                  </label>
                  <!--end::Label-->
                  <!--begin::Link-->
                  <!-- <a href="../../demo6/dist/authentication/layouts/basic/password-reset.html" class="link-primary fs-6 fw-bolder">Şifremi unuttum</a> -->
                  <!--end::Link-->
                </div>
                <input
                  class="form-control form-control-lg form-control-solid"
                  v-model="password"
                  @keypress.enter="giris($event)"
                  type="password"
                  name="password"
                  autocomplete="off"
                />
              </div>
              <div class="text-center">
                <button
                  type="submit"
                  :disabled="loading"
                  class="btn btn-lg btn-primary w-100 mb-5"
                >
                  <span v-if="!loading" class="indicator-label">Giriş Yap</span>
                  <span v-else class="indicator-label">
                    <div class="spinner-border" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                  </span>
                </button>
                <!--end::Submit button-->
                <!--begin::Separator-->
                <!-- <div class="text-center text-muted text-uppercase fw-bolder mb-5">ya da</div> -->
                <!--end::Separator-->
                <!--begin::Google link-->
                <!-- <a class="btn btn-flex flex-center btn-light btn-lg w-100 mb-5">
								<img alt="Logo" src="../assets/media/svg/brand-logos/google-icon.svg" class="h-20px me-3" />Google ile Giriş Yap</a> -->
                <!--end::Google link-->
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      loading: false,
    };
  },
  methods: {
    giris(e) {
      if (e.keyCode === 13) {
        this.signin();
      }
    },
    async signin() {
      if (this.email == "" || this.password == "") {
        toastr.warning(
          "Giriş yapabilmek için lütfen boş alanları doldurunuz.",
          "Uyarı!"
        );
      } else {
        this.loading = true;
        try {
          await this.$store.dispatch("login", {
            email: this.email,
            password: this.password,
          });
        } catch (error) {
          if (
            error.response.data.data.message === "mail.or.password.incorrect"
          ) {
            toastr.error(
              "E-posta veya şifre hatalı. Lütfen tekrar deneyin.",
              "Giriş Hatası"
            );
          } else {
            toastr.error("Bir hata oluştu. Daha sonra tekrar deneyin.", "Hata");
          }
        } finally {
          this.loading = false;
        }
      }
    },
  },
  mounted() {
    this.$refs.email.focus();
  },
};
</script>

<style>
.backimage {
  background-image: url(../assets/media/misc/dark-bg-ecu.jpg);
}
</style>
