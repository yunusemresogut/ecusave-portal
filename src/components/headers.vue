<template>
  <div>
    <div id="kt_header" style="" class="header align-items-stretch">
      <div
        class="container-fluid d-flex align-items-stretch justify-content-between"
      >
        <div
          class="d-flex align-items-center d-lg-none ms-n1 me-2"
          title="Show aside menu"
        >
          <div
            class="btn btn-icon btn-active-color-primary w-30px h-30px w-md-40px h-md-40px"
            id="kt_aside_mobile_toggle"
          >
            <span class="svg-icon svg-icon-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z"
                  fill="currentColor"
                />
                <path
                  opacity="0.3"
                  d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </div>
        </div>

        <div class="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
          <router-link to="/" class="d-lg-none">
            <img
              alt="Logo"
              src="../assets/media/icons/Logo-orjinal.png"
              class="h-30px"
            />
          </router-link>
        </div>

        <div
          class="d-flex align-items-stretch justify-content-between flex-lg-grow-1"
        >
          <div class="d-flex align-items-stretch" id="kt_header_nav">
            <div
              class="header-menu align-items-stretch"
              data-kt-drawer="true"
              data-kt-drawer-name="header-menu"
              data-kt-drawer-activate="{default: true, lg: false}"
              data-kt-drawer-overlay="true"
              data-kt-drawer-width="{default:'200px', '300px': '250px'}"
              data-kt-drawer-direction="end"
              data-kt-drawer-toggle="#kt_header_menu_mobile_toggle"
              data-kt-swapper="true"
              data-kt-swapper-mode="prepend"
              data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav'}"
            >
              <div
                class="menu menu-lg-rounded menu-column menu-lg-row menu-state-bg menu-title-gray-700 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-400 fw-bold my-5 my-lg-0 align-items-stretch"
                id="#kt_header_menu"
                data-kt-menu="true"
              >
                <Toolbars />
              </div>
            </div>
          </div>

          <div class="d-flex align-items-stretch flex-shrink-0">
            <!-- Tema Toggle Button -->
            <div
              class="d-flex align-items-center ms-1 ms-lg-3 position-relative"
              data-bs-toggle="tooltip"
              :title="theme === 'dark' ? 'Açık Tema' : 'Koyu Tema'"
            >
              <button
                @click="darkLight"
                class="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px"
              >
                <i v-if="theme === 'dark'" class="bi bi-sun fs-2"></i>
                <i v-else class="bi bi-moon fs-2"></i>
              </button>
            </div>

            <!-- Bildirim Butonu -->
            <div
              v-if="false"
              class="d-flex align-items-center ms-1 ms-lg-3 position-relative"
              data-bs-toggle="tooltip"
              title="Tamamlanan Kayıtlar"
            >
              <div
                class="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px"
                id="kt_activities_toggle"
              >
                <i class="bi bi-bell fs-2"></i>
              </div>
              <div>
                <span
                  class="position-absolute top-25 start-100 translate-middle badge badge-circle badge-primary"
                >
                  {{ this.dataCount }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      id="kt_activities"
      class="bg-body"
      data-kt-drawer="true"
      data-kt-drawer-name="activities"
      data-kt-drawer-activate="true"
      data-kt-drawer-overlay="true"
      data-kt-drawer-width="{default:'300px', 'lg': '900px'}"
      data-kt-drawer-direction="end"
      data-kt-drawer-toggle="#kt_activities_toggle"
      data-kt-drawer-close="#kt_activities_close"
    >
      <div class="card shadow-none rounded-0">
        <div class="card-header" id="kt_activities_header">
          <h3 class="card-title fw-bolder text-dark">Tamamlanan Kayıtlar</h3>

          <div class="card-toolbar">
            <button
              v-if="this.dataCount > 0"
              class="btn btn-outline-danger"
              @click="changeState"
            >
              Bildirimleri Sil
            </button>
            <button
              type="button"
              class="btn btn-sm btn-icon btn-active-light-primary me-n5"
              id="kt_activities_close"
            >
              <span class="svg-icon svg-icon-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    opacity="0.5"
                    x="6"
                    y="17.3137"
                    width="16"
                    height="2"
                    rx="1"
                    transform="rotate(-45 6 17.3137)"
                    fill="currentColor"
                  />
                  <rect
                    x="7.41422"
                    y="6"
                    width="16"
                    height="2"
                    rx="1"
                    transform="rotate(45 7.41422 6)"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>

        <div class="card-body position-relative" id="kt_activities_body">
          <div
            id="kt_activities_scroll"
            class="position-relative scroll-y me-n5 pe-5"
            data-kt-scroll="true"
            data-kt-scroll-height="auto"
            data-kt-scroll-wrappers="#kt_activities_body"
            data-kt-scroll-dependencies="#kt_activities_header, #kt_activities_footer"
            data-kt-scroll-offset="5px"
          >
            <div v-if="this.dataCount > 0" class="timeline">
              <div
                v-for="datas in tableData"
                :key="datas.id"
                class="timeline-item"
              >
                <div class="timeline-line w-40px"></div>

                <div
                  class="timeline-icon symbol symbol-circle symbol-40px me-4"
                >
                  <div class="symbol-label bg-light">
                    <span class="svg-icon svg-icon-success svg-icon-2hx">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          opacity="0.5"
                          d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z"
                          fill="currentColor"
                        />
                        <path
                          d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <div class="timeline-content mb-10 mt-n1">
                  <div class="pe-3 mb-5">
                    <div class="fs-5 fw-bold mb-2"></div>

                    <div class="d-flex align-items-center mt-1 fs-6">
                      <div class="text-muted me-2 fs-7" title="Kayıt Zamanı">
                        {{ datas.kayit_zaman }}
                      </div>
                    </div>
                  </div>

                  <div class="overflow-auto pb-5">
                    <div
                      class="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5"
                    >
                      <a
                        class="fs-5 text-dark text-hover-primary fw-bold w-150px min-w-100px"
                      >
                        {{ datas.arac_marka_modeli_id }}
                      </a>

                      <div class="min-w-100px pe-2">
                        <span
                          class="badge badge-light text-primary"
                          title="İşlem Fiyatı"
                        >
                          {{ this.formatter.format(datas?.islem_fiyat) }}₺
                          {{ datas?.odeme_yontemi_id }}
                        </span>
                      </div>

                      <div
                        class="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px pe-2"
                        data-bs-toggle="tooltip"
                        title="Araba / Motor Özellikleri"
                        data-bs-original-title="Araba / Motor Özellikleri"
                      >
                        <div class="symbol symbol-25px">
                          <div v-for="i in 20" :key="i">
                            {{
                              JSON.parse(datas["ozellikler_ids"])?.[i]?.display
                            }}
                          </div>
                        </div>
                      </div>

                      <div
                        class="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px pe-2"
                        data-bs-toggle="tooltip"
                        title="Traktör / Tır Özellikleri"
                        data-bs-original-title="Traktör / Tır Özellikleri"
                      ></div>

                      <a
                        class="text-dark fw-bolder text-hover-primary mb-1 fs-6 min-w-100px pe-2"
                        data-bs-toggle="tooltip"
                        title="Araç Dosyası"
                        data-bs-original-title="Araç Dosyası"
                      >
                        <div
                          v-for="ad in JSON.parse(datas['arac_dosyalar'])"
                          :key="ad"
                        >
                          <a
                            :href="
                              this.baseUrl +
                              ad['destination_path'] +
                              ad['file_name']
                            "
                            download
                          >
                            İndir
                            <i class="las la-download fs-2x"></i>
                          </a>
                        </div>
                      </a>
                      <a
                        class="text-dark fw-bolder text-hover-primary mb-1 fs-6 min-w-100px pe-2"
                        data-bs-toggle="tooltip"
                        title="Dönüştürülmüş Dosya"
                        data-bs-original-title="Dönüştürülmüş Dosya"
                      >
                        <div
                          v-for="ad in JSON.parse(
                            datas['donusturulmus_dosyalar']
                          )"
                          :key="ad"
                        >
                          <a
                            :href="
                              this.baseUrl +
                              ad['destination_path'] +
                              ad['file_name']
                            "
                            download
                          >
                            İndir
                            <i class="las la-download fs-2x"></i>
                          </a>
                        </div>
                      </a>

                      <div class="min-w-100px pe-2">
                        <span
                          v-if="datas.kayit_durum_id == 'Onay Bekliyor'"
                          class="badge badge-light-primary"
                        >
                          {{ datas.kayit_durum_id }}
                        </span>
                        <span
                          v-else-if="datas.kayit_durum_id == 'Reddedildi'"
                          class="badge badge-light-danger"
                        >
                          {{ datas.kayit_durum_id }}
                        </span>
                        <span
                          v-else-if="datas.kayit_durum_id == 'işlemde'"
                          class="badge badge-light-warning"
                        >
                          İşlemde
                        </span>
                        <span
                          v-else-if="datas.kayit_durum_id == 'Tamamlandı'"
                          class="badge badge-light-success"
                        >
                          {{ datas.kayit_durum_id }}
                        </span>
                        <span v-else class="badge badge-light-secondary">
                          Tanımsız
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="timeline">Bildirim bulunmamaktadır.</div>
          </div>
        </div>

        <div style="bottom: 0; position: sticky">
          <div class="separator border-primary my-10"></div>
          <div class="d-flex flex-row justify-content-around">
            <ul class="pagination">
              <li
                class="page-item previous"
                @click="prev"
                :class="page - 1 < 1 ? 'd-none' : ''"
                title="Önceki Sayfa"
              >
                <a class="page-link">
                  <i class="previous"></i>
                  &nbsp;Önceki
                </a>
              </li>
              <li
                class="page-item next"
                @click="next"
                :class="page + 1 > pageData?.pages ? 'd-none' : ''"
                title="Sonraki Sayfa"
              >
                <a class="page-link">
                  Sonraki&nbsp;
                  <i class="next"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Toolbars from "@/components/toolbars.vue";
export default {
  components: { Toolbars },
  data() {
    return {
      loading: false,
      dataCount: "",
      tableData: [],
      params: [],
      page: 1,
      pageData: [],
      limit: 10,
      valueId: [],
      bayi_id: this.$store.getters.getUserData.user.id,
      states: [],
      baseUrl: process.env.VUE_APP_BASE_UPLOADS,
      formatter: new Intl.NumberFormat("tr-TR", {
        //style: 'currency',
        currency: "TRY",
        minimumFractionDigits: 2,
      }),
      theme: localStorage.getItem("theme") || "light",
    };
  },
  methods: {
    prev() {
      this.page--;
      this.getTableData();
    }, //Bir önceki sayfaya gönder
    next() {
      this.page++;
      this.getTableData();
    }, //Bir sonraki sayfaya gönder
    getTableData() {
      return;
      this.loading = true;
      this.params = {
        page: this.page,
        limit: this.limit,
        column_array_id:
          this.$store.getters.getUserData.auths.tables["bildirim"]?.lists[0],
        column_array_id_query:
          this.$store.getters.getUserData.auths.tables["bildirim"]?.queries[0],
        sorts: {},
        filters: {},
        editMode: false,
        liveDataMode: true,
        columnNames: [],
        filterColumnNames: [],
      };
      axios
        .post(this.$store.getters.getToken + "/tables/bildirim", {
          params: JSON.stringify(this.params),
        })
        .then((res) => {
          if (res.data.code == 200) {
            this.dataCount = res.data.data.all_records_count;
            this.tableData = res.data.data.records;
            this.pageData = res.data.data;
            for (const [key, val] of Object.entries(res.data.data.records)) {
              this.valueId = val.id;
              this.states = val.state;
            }
          }
          this.stateEditData();
        })
        .catch((err) => {
          console.log(err.response?.data.data.message);
          if (err.response?.data.data.message == "fail.token") {
            this.$store.dispatch("logout");
          }
        })
        .finally(() => {
          this.loading = false;
        });
    },
    changeState() {
      let paramet = new FormData();
      paramet.append("bayi_id", this.bayi_id);
      paramet.append(
        "column_set_id",
        this.$store.getters.getUserData.auths.tables["istek"]?.creates[0]
      );
      axios
        .post(this.$store.getters.getToken + "/tables/istek/store", paramet)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    logout() {
      this.$store.dispatch("logout");
    },
    darkLight() {
    this.theme = this.theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", this.theme);

    const lightLink = document.getElementById("theme-light");
    const darkLink = document.getElementById("theme-dark");

    if (this.theme === "light") {
      lightLink.disabled = false;
      darkLink.disabled = true;
    } else {
      lightLink.disabled = true;
      darkLink.disabled = false;
    }
  }
  },
  mounted() {
    this.getTableData();

    this.theme = localStorage.getItem("theme") || "light";

  // link elementlerini index.html'de id ile işaretle
  const lightLink = document.getElementById("theme-light");
  const darkLink = document.getElementById("theme-dark");

  if (!lightLink || !darkLink) return;

  if (this.theme === "light") {
    lightLink.disabled = false;
    darkLink.disabled = true;
  } else {
    lightLink.disabled = true;
    darkLink.disabled = false;
  }
  },
};
</script>

<style>
.bgimage {
  background-image: url("../assets/media/misc/pattern-1.jpg");
}

.bgimg {
  background-image: url("../assets/media/misc/pattern-1.jpg");
}

[data-letters]:before {
  content: attr(data-letters);
  display: inline-block;
  font-size: 1em;
  width: 2.5em;
  height: 2.5em;
  line-height: 2.5em;
  text-align: center;
  border-radius: 50%;
  background: var(--theme-color-1);
  vertical-align: middle;
  margin-right: 1em;
  color: white;
}
</style>
