<template>
  <div id="kt_content_container" class="container-xxl">
    <div class="card">
      <div class="card-body p-lg-17">
        <div class="mb-18">
          <div class="mb-10">
            <div class="text-center mb-15">
              <h3 class="fs-2hx text-dark mb-5">Gücünü Keşfet</h3>
              <div class="row mb-xl-8">
                <div class="col-xl-3">
                  <label class="form-label">Marka</label>
                  <select
                    class="form-select"
                    aria-label="Select example"
                    @change="sorguModel()"
                    v-model="markaID"
                  >
                    <option disabled value="">Marka</option>
                    <option v-for="m in marka" :key="m.id" :value="m.id">
                      {{ m.name }}
                    </option>
                  </select>
                  <div
                    class="fv-plugins-message-container invalid-feedback"
                  ></div>
                </div>
                <div class="col-xl-3">
                  <label class="form-label">Model</label>
                  <select
                    class="form-select"
                    aria-label="Select example"
                    @change="sorguYilAraliklar()"
                    v-model="modelID"
                  >
                    <option disabled value="">
                      {{ markaID == "" ? "Önce Marka Seçiniz" : "Seçiniz" }}
                    </option>
                    <option
                      v-for="(sm, key) in modelData"
                      :key="key"
                      :value="key"
                    >
                      {{ sm }}
                    </option>
                  </select>
                  <div
                    class="fv-plugins-message-container invalid-feedback"
                  ></div>
                </div>
                <div class="col-xl-3">
                  <label class="form-label">Yıl</label>
                  <select
                    class="form-select"
                    aria-label="Select example"
                    @change="sorguMotorCinsler()"
                    v-model="yilID"
                  >
                    <option disabled value="">
                      {{ modelID == "" ? "Önce Model Seçiniz" : "Seçiniz" }}
                    </option>
                    <option
                      v-for="(sya, key) in yilData"
                      :key="key"
                      :value="key"
                    >
                      {{ sya }}
                    </option>
                  </select>
                  <div
                    class="fv-plugins-message-container invalid-feedback"
                  ></div>
                </div>
                <div class="col-xl-3">
                  <label class="form-label">Cins</label>
                  <select
                    class="form-select"
                    aria-label="Select example"
                    v-model="cinsID"
                  >
                    <option disabled value="">
                      {{ yilID == "" ? "Önce Yıl Seçiniz" : "Seçiniz" }}
                    </option>
                    <option
                      v-for="(value, key) in cinsData"
                      :key="key"
                      :value="key"
                    >
                      {{ value }}
                    </option>
                  </select>
                  <div
                    class="fv-plugins-message-container invalid-feedback"
                  ></div>
                </div>
              </div>
              <div class="row mb-xl-8">
                <button class="btn btn-primary" @click="hesapla()">
                  Hesapla
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card" v-if="hesaplaKontrol == true">
      <section v-if="loading" class="w-100">
        <span class="loader-19"></span>
      </section>
      <div v-else class="card-body p-lg-17">
        <div class="mb-16">
          <div class="mb-12 row">
            <h3 class="fs-2hx text-dark mb-5">
              {{
                this.bilgiDataText["Marka"] + " " + this.bilgiDataText["Model"]
              }}
            </h3>
            <div class="col-xl-8">
              <img
                class="img-fluid"
                src="/front-car.jpg"
                alt="Ecu Araba"
                loading="lazy"
              />
            </div>
            <div class="col-lg-4">
              <div class="mb-3">
                <div
                  class="border-2 d-flex flex-column flex-xl-row p-2 br-12 align-items-center"
                >
                  <h1 class="px-1 m-0 p-0 px-1 bold display-1">
                    %{{ bilgiData.yakit_tasarrufu }}
                  </h1>
                  <label class="m-0 p-0 h2 bold">YAKIT TASARRUFU</label>
                </div>
                <div
                  class="border-2 d-flex mt-1 flex-column flex-xl-row p-2 br-12 align-items-center"
                >
                  <h1 class="px-1 m-0 p-0 px-1 bold display-1">
                    %{{
                      Number(
                        ((bilgiData?.chip_tuning_nm - bilgiData?.org_nm) /
                          bilgiData?.org_nm) *
                          100
                      ).toFixed(0)
                    }}
                  </h1>
                  <label class="m-0 p-0 h2 bold">TORK ARTIŞI</label>
                </div>
                <div class="border-2 p-3 mt-1 py-2 br-12 d-flex flex-column">
                  <div class="d-flex justify-content-between fs-4 fw-bold">
                    <label class="m-0 p-0 bold">Tork:</label>
                    <h5 class="m-0 p-0 bold">
                      +{{ bilgiData?.chip_tuning_nm - bilgiData?.org_nm }} NM
                    </h5>
                  </div>
                  <div class="progress w-100" style="height: 30px">
                    <div
                      class="progress-bar fs-4 fw-bold"
                      role="progressbar"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      :style="{ width: this.bilgiData?.org_nm / 10 + '%' }"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      :title="this.bilgiData?.org_nm / 10"
                    >
                      Önce - {{ (this.bilgiData?.org_nm / 10).toFixed(0) }}
                    </div>
                  </div>
                  <div class="progress w-100 mt-1" style="height: 30px">
                    <div
                      class="progress-bar fs-4 fw-bold"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      :style="{
                        width:
                          this.bilgiData?.org_nm / 10 +
                          ((bilgiData?.chip_tuning_nm - bilgiData?.org_nm) /
                            bilgiData?.org_nm) *
                            100 +
                          '%',
                      }"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      :title="
                        this.bilgiData?.org_nm / 10 +
                        ((bilgiData?.chip_tuning_nm - bilgiData?.org_nm) /
                          bilgiData?.org_nm) *
                          100
                      "
                    >
                      Sonra -
                      {{
                        (
                          this.bilgiData?.org_nm / 10 +
                          ((bilgiData?.chip_tuning_nm - bilgiData?.org_nm) /
                            bilgiData?.org_nm) *
                            100
                        ).toFixed(0)
                      }}
                    </div>
                  </div>
                </div>
                <div
                  class="border-2 d-flex mt-1 flex-column flex-xl-row p-2 br-12 align-items-center"
                >
                  <h1 class="px-1 m-0 p-0 px-1 bold display-1">
                    %{{
                      Number(
                        ((bilgiData?.chip_tuninghp - bilgiData?.org_hp) /
                          bilgiData?.org_hp) *
                          100
                      ).toFixed(0)
                    }}
                  </h1>
                  <label class="m-0 p-0 h2 bold">BEYGİR ARTIŞI</label>
                </div>
                <div class="border-2 p-3 mt-1 py-2 br-12 d-flex flex-column">
                  <div class="d-flex justify-content-between fs-4 fw-bold">
                    <label class="m-0 p-0 bold">Beygir Gücü:</label>
                    <h5 class="m-0 p-0 bold">
                      +{{ bilgiData?.chip_tuninghp - bilgiData?.org_hp }} HP
                    </h5>
                  </div>
                  <div class="progress w-100" style="height: 30px">
                    <div
                      class="progress-bar fs-4 fw-bold"
                      role="progressbar"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      :style="{ width: this.bilgiData?.org_hp / 10 + '%' }"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      :title="this.bilgiData?.org_hp / 10"
                    >
                      Önce - {{ (this.bilgiData?.org_hp / 10).toFixed(0) }}
                    </div>
                  </div>
                  <div class="progress w-100 mt-1" style="height: 30px">
                    <div
                      class="progress-bar fs-4 fw-bold"
                      role="progressbar"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      :style="{
                        width:
                          this.bilgiData?.org_hp / 10 +
                          ((bilgiData?.chip_tuninghp - bilgiData?.org_hp) /
                            bilgiData?.org_hp) *
                            100 +
                          '%',
                      }"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      :title="
                        this.bilgiData?.org_hp / 10 +
                        ((bilgiData?.chip_tuninghp - bilgiData?.org_hp) /
                          bilgiData?.org_hp) *
                          100
                      "
                    >
                      Sonra -
                      {{
                        (
                          this.bilgiData?.org_hp / 10 +
                          ((bilgiData?.chip_tuninghp - bilgiData?.org_hp) /
                            bilgiData?.org_hp) *
                            100
                        ).toFixed(0)
                      }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-12 row">
            <h1>Araç Detayları</h1>
            <div class="separator border-primary mt-4 mb-8"></div>
            <div class="col-xl-6 h5">
              <div class="row">
                <div class="col-xl-5 mb-2">Yıl Aralığı</div>
                <div class="col-xl-7">{{ this.bilgiDataText["Nesil"] }}</div>
                <div class="col-xl-5 mb-2">Model</div>
                <div class="col-xl-7">{{ this.bilgiDataText["Model"] }}</div>
                <div class="col-xl-5 mb-2">Beyin</div>
                <div class="col-xl-7">{{ this.bilgiData.beyinler }}</div>
                <div class="col-xl-5 mb-2">Yakıt Tasarrufu</div>
                <div class="col-xl-7 text-success">
                  %{{ bilgiData.yakit_tasarrufu }}
                </div>
              </div>
            </div>
            <div class="col-xl-6 h5">
              <div class="row">
                <div class="col-xl-5 mb-2">Beygir</div>
                <div class="col-xl-7 text-danger">
                  {{ bilgiData.org_hp }} HP
                </div>
                <div class="col-xl-5 mb-2">Modifiyeli Beygir</div>
                <div class="col-xl-7 text-success">
                  {{ bilgiData?.chip_tuninghp }} HP
                </div>
                <div class="col-xl-5 mb-2">Tork</div>
                <div class="col-xl-7 text-danger">
                  {{ bilgiData.org_nm }} NM
                </div>
                <div class="col-xl-5 mb-2">Modifiyeli Tork</div>
                <div class="col-xl-7 text-success">
                  {{ bilgiData?.chip_tuning_nm }} NM
                </div>
              </div>
            </div>
          </div>
          <div class="mb-8">
            <h3>Hakkında</h3>
            <div class="separator border-primary mt-4 mb-8"></div>

            <div class="fs-5 fw-bold">
              <p class="mb-8">
                <strong>
                  {{
                    this.bilgiDataText["Marka"] +
                    " " +
                    this.bilgiDataText["Model"]
                  }}
                </strong>
                model aracınızın standart opsiyon yazılım ile ürettiği
                <strong>
                  {{ bilgiData.org_hp }} Hp / {{ bilgiData.org_nm }} Nm tork
                </strong>
                motor gücünü, özelleştirilmiş
                <strong>
                  {{
                    this.bilgiDataText["Marka"] +
                    " " +
                    this.bilgiDataText["Model"]
                  }}
                  araç yazılımı ({{
                    this.bilgiDataText["Marka"] +
                    " " +
                    this.bilgiDataText["Model"]
                  }}
                  Chip Tuning)
                </strong>
                uygulaması sonrasında,
                <strong>
                  {{ bilgiData.chip_tuninghp }} Hp /
                  {{ bilgiData.chip_tuning_nm }} tork
                </strong>
                ’luk performansa ulaşmasını sağlamaktayız. Kazanılan
                <strong>
                  +{{ bilgiData.chip_tuninghp - bilgiData.org_hp }} Hp / +{{
                    bilgiData.chip_tuning_nm - bilgiData.org_nm
                  }}
                  Nm tork güç artışı
                </strong>
                sonrasında aracınızın egzoz emisyon değerleri kesinlikle
                değişmemekte ve duman atmamaktadır.
              </p>
              <p class="mb-8">
                Yaptığımız işlem fabrikanın vergilendirme sistemi, satış
                politikası ve yakıt kalitesi gibi parametlereden dolayı
                kısıtlamış olduğu gücü lisanslı yazılım ile ortaya çıkartarak
                güvenli bir şekilde kullanmanızı sağlıyoruz. Yapılan bu işlem
                sonucu fabrikanın belirlemiş olduğu limitler aşılmadığı için
                hiçbir zararı bulunmamaktadır.
              </p>
              <p class="mb-8">
                <strong>
                  {{
                    this.bilgiDataText["Marka"] +
                    " " +
                    this.bilgiDataText["Model"]
                  }}
                </strong>
                Aracınızın motoruna uygulanacak chip tuning yazılım işlemi
                ortalama 1-2 saat sürmektedir, daha fazla bilgi için lütfen
                bizimle iletişime geçiniz.
              </p>
            </div>
          </div>
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
      params: {},
      marka: [],
      markaID: "",
      modelData: [],
      modelID: "",
      yilData: [],
      yilID: "",
      cinsData: [],
      cinsID: "",
      bilgiData: [],
      bilgiDataText: {},
      baseUrl: process.env.VUE_APP_BASE_UPLOADS,
      hesaplaKontrol: false,
      loading: false,
      sorguDizi: [],
      sorguDataSonuc: [],
    };
  },
  methods: {
    hesapla() {
      if (
        this.markaID == "" ||
        this.modelID == "" ||
        this.yilID == "" ||
        this.cinsID == ""
      ) {
        this.hesaplaKontrol = false;
        toastr.error("Lütfen tüm alanları seçiniz.");
        return false;
      }
      if (this.loading == true) {
        toastr.info("Hesaplama yapılıyor...");
      } else {
        axios
          .post(this.$store.getters.getToken + "/sorguBilgi/" + this.cinsID)
          .then((response) => {
            this.bilgiData = response.data.data.message[0];
            this.bilgiDataText = JSON.parse(
              response.data.data.message[0].description
            );
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            this.loading = false;
            toastr.info("Hesaplama yapıldı.");
            this.hesaplaKontrol = true;
          });
      }
    },
    markalar() {
      this.loading = true;
      this.params = {
        page: 1,
        limit: 100,
        column_array_id: 79,
        column_array_id_query: 79,
        sorts: {},
        filters: {},
        editMode: false,
        liveDataMode: false,
        columnNames: [],
        filterColumnNames: [],
      };
      axios
        .post("public/tables/be_markalar", {
          params: JSON.stringify(this.params),
        })
        .then((response) => {
          this.marka = response.data.data.records.sort((a, b) =>
            a.name.localeCompare(b.name, "tr", { sensitivity: "base" })
          );
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    sorguModel() {
      this.loading = true;
      this.modelData = {};
      axios
        .post(this.$store.getters.getToken + "/sorguModel/" + this.markaID)
        .then((response) => {
          for (const [key, val] of Object.entries(response.data)) {
            this.modelData[key] = val;
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    sorguYilAraliklar() {
      this.loading = true;
      this.yilData = {};
      axios
        .post(
          this.$store.getters.getToken + "/sorguYilAraliklar/" + this.modelID
        )
        .then((response) => {
          for (const [key, val] of Object.entries(response.data)) {
            this.yilData[key] = val;
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    sorguMotorCinsler() {
      this.loading = true;
      this.cinsData = {};
      this.sorguDizi = [];
      axios
        .post(this.$store.getters.getToken + "/sorguMotorCinsler/" + this.yilID)
        .then((response) => {
          this.sorguDizi = Object.keys(response.data);
          console.log(response);
          for (const [key, val] of Object.entries(response.data)) {
            this.cinsData[key] = val;
          }
          console.log(this.cinsData);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    sorguBilgi(data) {
      this.bilgiData = data;
      this.bilgiDataText = JSON.parse(data.description);
    },
  },
  mounted() {
    this.markalar();
  },
};
</script>

<style>
.border-2 {
  border: 2px solid #22abc3;
  padding: 0.8rem !important;
}

.col-xl-5 {
  font-weight: 400;
}
</style>
