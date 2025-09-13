<template>
  <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
    <div
      v-if="this.iframe == false"
      id="kt_content_container"
      class="container-xxl"
    >
      <div class="card" id="kt_pricing">
        <div class="card-body p-lg-17">
          <div class="d-flex flex-column">
            <div class="mb-13 text-center">
              <h1 class="fs-2hx fw-bolder mb-5">Paket Seçiniz</h1>
            </div>
            <div class="row g-10">
              <div
                v-for="d in data"
                :key="d"
                :class="
                  d.id == 1 ||
                  d.id == 2 ||
                  d.id == 3 ||
                  d.id == 4 ||
                  d.id == 5 ||
                  d.id == 6
                    ? 'col-xl-4'
                    : 'm-0'
                "
              >
                <div
                  v-if="
                    d.id == 1 ||
                    d.id == 2 ||
                    d.id == 3 ||
                    d.id == 4 ||
                    d.id == 5 ||
                    d.id == 6
                  "
                  class="d-flex h-100 align-items-center"
                >
                  <div class="card card-bordered priceCard">
                    <div
                      class="card-header justify-content-end ribbon ribbon-start"
                    >
                      <div class="card-title">{{ d.name_basic }}</div>
                      <div class="ribbon-label bg-primary fw-bolder">%</div>
                    </div>
                    <div class="card-body">
                      <div class="mb-7 text-center">
                        <div class="text-gray-400 fw-bold mb-5">
                          {{ d.description }}
                        </div>
                        <div class="text-center mb-4">
                          <span class="mb-2 text-primary">₺</span>
                          <span
                            class="fs-3x fw-bolder text-primary"
                            data-kt-plan-price-month="999"
                            data-kt-plan-price-annual="9999"
                          >
                            {{ d.toplam_tutar }}
                          </span>
                          <span class="fs-7 fw-bold opacity-50">
                            /
                            <span data-kt-element="period"></span>
                            bakiye
                          </span>
                        </div>
                        <div class="text-muted">
                          Bu paketi satın alarak {{ d.fiyat - d.toplam_tutar }}₺
                          kazanç sağlayın.
                        </div>
                        <div class="text-muted">
                          *Hesabınıza
                          <span class="text-primary fw-bolder fs-5">
                            {{ d.fiyat }}₺
                          </span>
                          bakiye eklenir.
                        </div>
                        <button
                          @click="payment(d.id)"
                          class="btn btn-sm btn-primary mt-10"
                        >
                          Satın Al
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section v-if="loading" class="w-100">
      <span class="loader-19"></span>
    </section>
    <div v-else>
      <div v-if="this.iframe == true">
        <iframe
          :src="'https://www.paytr.com/odeme/guvenli/' + token"
          id="paytriframe"
          frameborder="0"
          style="width: 100%; height: 100vh"
        ></iframe>
        <div class="d-flex justify-content-around mt-4">
          <router-link to="/" class="btn btn-primary">
            Ana Sayfaya Dön
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: {},
      token: "",
      iframe: false,
      loading: false,
    };
  },
  methods: {
    getAbonelik() {
      this.loading = true;
      axios
        .post(this.$store.getters.getToken + "/tables/abonelik", {
          params: JSON.stringify({
            page: 1,
            limit: "100",
            column_array_id:
              this.$store.getters.getUserData.auths.tables["abonelik"]
                ?.lists[0],
            column_array_id_query:
              this.$store.getters.getUserData.auths.tables["abonelik"]
                ?.queries[0],
            sorts: {},
            filters: {},
          }),
        })
        .then((res) => {
          this.data = res.data.data.records;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    payment(id) {
      this.loading = true;
      this.iframe = true;
      axios
        .post(this.$store.getters.getToken + "/payment/create", {
          paymentId: id,
        })
        .then((res) => {
          if (res.data.status == "success") {
            //window.location.href="https://www.paytr.com/odeme/guvenli/"+res.data.token;
            this.token = res.data.token;
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  created() {
    this.getAbonelik();
  },
};
</script>

<style>
.priceCard:hover {
  transition: all 0.3s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>
