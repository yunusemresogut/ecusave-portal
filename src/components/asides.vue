<template>
  <div
    id="kt_aside"
    class="aside pb-5 pt-5 pt-lg-0"
    data-kt-drawer="true"
    data-kt-drawer-name="aside"
    data-kt-drawer-activate="{default: true, lg: false}"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'80px', '300px': '100px'}"
    data-kt-drawer-direction="start"
    data-kt-drawer-toggle="#kt_aside_mobile_toggle"
  >
    <div class="aside-logo py-8" id="kt_aside_logo">
      <router-link to="/" class="d-flex align-items-center">
        <img
          alt="Logo"
          src="../assets/media/ecusavebeyaz.png"
          class="h-25px logo"
        />
      </router-link>
    </div>
    <div class="aside-menu flex-column-fluid" id="kt_aside_menu">
      <div
        class="hover-scroll-overlay-y my-2 my-lg-5 pe-lg-n1"
        id="kt_aside_menu_wrapper"
        data-kt-scroll="true"
        data-kt-scroll-height="auto"
        data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer"
        data-kt-scroll-wrappers="#kt_aside, #kt_aside_menu"
        data-kt-scroll-offset="5px"
      >
        <div
          class="
            menu
            menu-column
            menu-title-gray-700
            menu-state-title-primary
            menu-state-icon-primary
            menu-state-bullet-primary
            menu-arrow-gray-500
            fw-bold
          "
          id="#kt_aside_menu"
          data-kt-menu="true"
        >
          <router-link
            to="/"
            class="menu-item py-2"
            :class="this.$route.path.split('/')[1] == '' ? 'here' : ''"
          >
            <span
              class="menu-link menu-center"
              title="Ana Sayfa"
              data-bs-toggle="tooltip"
              data-bs-trigger="hover"
              data-bs-dismiss="click"
              data-bs-placement="right"
            >
              <span class="menu-icon me-0">
                <i class="bi bi-house fs-2"></i>
              </span>
              <span class="menu-title" style="white-space: nowrap"
                >Ana Sayfa</span
              >
            </span>
          </router-link>
          <router-link
            to="/kayitlar"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="right-start"
            class="menu-item py-3"
            :class="this.$route.path.split('/')[1] == 'kayitlar' ? 'here' : ''"
          >
            <span
              class="menu-link menu-center"
              title="Kayıtlar"
              data-bs-toggle="tooltip"
              data-bs-trigger="hover"
              data-bs-dismiss="click"
              data-bs-placement="right"
            >
              <span class="menu-icon me-0">
                <i
                  class="bi bi-gear-wide-connected fs-2x"
                  :class="
                    this.$route.path.split('/')[1] == 'kayitlar'
                      ? 'text-primary'
                      : 'text-white'
                  "
                  style="font-size: 40px !important"
                ></i>
              </span>
              <span class="menu-title">Kayıtlar</span>
            </span>
          </router-link>
          <router-link
            to="/pricing"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="right-start"
            class="menu-item py-3"
            :class="this.$route.path.split('/')[1] == 'pricing' ? 'here' : ''"
          >
            <span
              class="menu-link menu-center"
              title="Ödeme Sayfası"
              data-bs-toggle="tooltip"
              data-bs-trigger="hover"
              data-bs-dismiss="click"
              data-bs-placement="right"
            >
              <span class="menu-icon me-0">
                <i class="bi bi-credit-card fs-2"></i>
              </span>
              <span class="menu-title" style="white-space: nowrap"
                >Ödeme Sayfası</span
              >
            </span>
          </router-link>
          <router-link
            to="/profile"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="right-start"
            class="menu-item py-3"
            :class="this.$route.path.split('/')[1] == 'profile' ? 'here' : ''"
          >
            <span
              class="menu-link menu-center"
              title="Profil"
              data-bs-toggle="tooltip"
              data-bs-trigger="hover"
              data-bs-dismiss="click"
              data-bs-placement="right"
            >
              <span class="menu-icon me-0">
                <i class="bi bi-file-person fs-2"></i>
              </span>
              <span class="menu-title">Profil</span>
            </span>
          </router-link>
          <router-link
            to="/destek"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="right-start"
            class="menu-item py-3"
            :class="this.$route.path.split('/')[1] == 'destek' ? 'here' : ''"
          >
            <span
              class="menu-link menu-center"
              title="Destek"
              data-bs-toggle="tooltip"
              data-bs-trigger="hover"
              data-bs-dismiss="click"
              data-bs-placement="right"
            >
              <span class="menu-icon me-0">
                <i class="bi bi-code-slash fs-2"></i>
              </span>
              <span class="menu-title" style="white-space: nowrap"
                >Destek</span
              >
            </span>
          </router-link>
        </div>
      </div>
    </div>
    <div class="aside-footer flex-column-auto" id="kt_aside_footer">
      <div class="d-flex justify-content-center">
        <div
          class="d-flex align-items-center ms-1 ms-lg-3"
          id="kt_header_user_menu_toggle"
        >
          <div
            class="cursor-pointer symbol symbol-30px symbol-md-40px"
            data-kt-menu-trigger="click"
            data-kt-menu-attach="parent"
            data-kt-menu-placement="bottom-end"
          >
            <div class="symbol symbol-35px">
              <span
                class="symbol-label bg-primary text-inverse-primary fw-bolder"
                >{{ this.userData?.user?.name_basic.charAt(0) }}
                {{ this.userData?.user?.surname.charAt(0) }}</span
              >
            </div>
          </div>
          <div
            class="
              menu
              menu-sub
              menu-sub-dropdown
              menu-column
              menu-rounded
              menu-gray-800
              menu-state-bg
              menu-state-primary
              fw-bold
              py-4
              fs-6
              w-325px
            "
            data-kt-menu="true"
          >
            <div class="menu-item px-3">
              <div class="menu-content d-flex align-items-center px-3">
                <div class="symbol symbol-35px symbol-circle">
                  <span
                    class="
                      symbol-label
                      bg-primary
                      text-inverse-primary
                      fw-bolder
                    "
                    >{{ this.userData?.user?.name_basic.charAt(0) }}
                    {{ this.userData?.user?.surname.charAt(0) }}</span
                  >
                </div>
                <div class="d-flex flex-column">
                  <div class="fw-bolder d-flex align-items-center fs-5">
                    {{ this.userData?.user?.name_basic }}
                    {{ this.userData?.user?.surname }}
                  </div>
                  <a
                    :href="'mailto:' + this.userData.user?.email"
                    class="fw-bold text-muted text-hover-primary fs-7"
                    >{{ this.userData.user?.email }}</a
                  >
                </div>
              </div>
            </div>
            <div class="separator my-2"></div>
            <div class="menu-item px-5">
              <router-link to="/profile" class="menu-link px-5"
                >Profil</router-link
              >
            </div>
            <div class="menu-item px-5">
              <a @click="logout()" class="menu-link px-5">Çıkış</a>
            </div>
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
      userData: this.$store.getters.getUserData,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
  mounted() {
    console.log(this.$store.getters.getUserData)
  }
};
</script>

<style>
.bi-gear-wide-connected {
  animation: rotation 4s infinite linear;
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>