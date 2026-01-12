<template>
  <div>
    <div v-if="this.iframe == false">
      <section v-if="loading" class="w-100">
        <span class="loader-19"></span>
      </section>
      <div v-else class="card m-5">
        <div class="card-header border-0 pt-5">
          <h3 class="card-title align-items-start flex-column">
            <span class="card-label fw-bolder fs-3 mb-1">
              {{ data?.table_info?.display_name }}
            </span>
            <span class="text-muted mt-1 fw-bold fs-7">
              Toplam {{ dataCount }} adet kayıt bulunmaktadır
            </span>
          </h3>
          <div>
            <form
              data-kt-search-element="form"
              class="d-none d-lg-block w-100 mb-5 mb-lg-0 position-relative"
              autocomplete="off"
            >
              <input type="hidden" />
              <span
                class="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5"
                data-kt-search-element="spinner"
              >
                <span
                  class="spinner-border h-15px w-15px align-middle text-gray-400"
                ></span>
              </span>
              <span
                class="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-4"
                data-kt-search-element="clear"
              >
                <span class="svg-icon svg-icon-2 me-0">
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
                    ></rect>
                    <rect
                      x="7.41422"
                      y="6"
                      width="16"
                      height="2"
                      rx="1"
                      transform="rotate(45 7.41422 6)"
                      fill="currentColor"
                    ></rect>
                  </svg>
                </span>
              </span>
            </form>
          </div>
          <div class="card-toolbar">
            <router-link
              to="/kayit-olustur"
              class="btn btn-sm btn-light-primary"
            >
              <span class="svg-icon svg-icon-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    opacity="0.5"
                    x="11.364"
                    y="20.364"
                    width="16"
                    height="2"
                    rx="1"
                    transform="rotate(-90 11.364 20.364)"
                    fill="currentColor"
                  ></rect>
                  <rect
                    x="4.36396"
                    y="11.364"
                    width="16"
                    height="2"
                    rx="1"
                    fill="currentColor"
                  ></rect>
                </svg>
              </span>
              Yeni Oluştur
            </router-link>
          </div>
        </div>
        <div v-if="this.dataCount < 1" class="card-body py-3">
          <div class="d-flex justify-content-center py-10">
            Hiç veri kaydınız bulunmamaktadır.
          </div>
        </div>
        <div v-else class="card-body py-3">
          <div class="row g-4 mb-4">
            <div v-for="tr in data?.records" :key="tr.id" class="col-12">
              <div
                class="card h-100 shadow-sm"
              >
                <div
                  class="card-body d-flex flex-column justify-content-between"
                >
                  <div class="d-flex justify-content-between align-items-start">
                    <div>
                      <h5 class="card-title mb-0 text-primary">
                        <span class="text-muted">{{ tr.id }} - </span>{{ tr.arac_marka_modeli_id || "Başlık Yok" }}
                      </h5>
                      <small class="text-muted">
                        {{ tr.plaka || "Plaka Yok" }}
                      </small>
                    </div>
                    <div
                      class="d-flex align-items-center justify-content-center gap-4"
                    >
                      <a
                        v-if="tr.odeme_durumu"
                        @click="docDownload(tr)"
                        class="cursor-pointer link-primary"
                      >
                        <i class="bi bi-download me-1 text-primary"></i>
                        Dönüştürülmüş Dosya
                      </a>
                      <div class="dropdown">
                        <button
                          class="btn btn-sm btn-light"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i class="bi bi-three-dots-vertical"></i>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                          <li
                            v-if="tr.kayit_durum_id != 'Tamamlandı'"
                            class="cursor-pointer"
                          >
                            <router-link
                              :to="`/${this.tableName}/duzenle/${tr.id}`"
                              class="dropdown-item"
                            >
                              Düzenle
                            </router-link>
                          </li>
                          <li
                            v-for="ad in JSON.parse(tr.arac_dosyalar)"
                            :key="ad"
                            class="cursor-pointer"
                          >
                            <a
                              :href="
                                this.baseUrl +
                                ad['destination_path'] +
                                ad['file_name']
                              "
                              download
                              class="dropdown-item"
                            >
                              Araç Dosyası
                            </a>
                          </li>
                          <li v-if="!tr.odeme_durumu" class="cursor-pointer">
                            <a class="dropdown-item" @click="odemeCheck(tr)">
                              Öde
                            </a>
                          </li>
                          <li v-if="false" class="cursor-pointer">
                            <a class="dropdown-item" @click="garantiBelge(tr)">
                              Garanti Belgesi
                            </a>
                          </li>
                          <li
                            v-if="tr.kayit_durum_id != 'Tamamlandı'"
                            class="cursor-pointer"
                          >
                            <a
                              class="dropdown-item text-danger"
                              @click="deleting(tr)"
                            >
                              Sil
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="mt-3">
                    <div
                      v-for="(ozellik, i) in parseOzellikler(
                        tr['ozellikler_ids']
                      )"
                      :key="i"
                      class="badge bg-light text-dark border border-secondary me-2 mb-2 p-4 text-start w-full"
                    >
                      <!-- Özellik adı -->
                      <div class="d-flex flex-column gap-2">
                        <div
                          class="d-flex align-items-center justify-content-between"
                        >
                          <div>{{ ozellik.display }}</div>

                          <button
                            v-if="
                              tr.ozellikler_json &&
                              JSON.parse(tr?.ozellikler_json)?.[ozellik?.source]
                            "
                            @click="toggleDescription(i)"
                            class="btn btn-sm btn-light"
                            data-bs-toggle="tooltip"
                            title="Açıklama"
                          >
                            <i
                              v-if="openedDescriptions[i]"
                              class="bi bi-eye"
                            ></i>
                            <i v-else class="bi bi-eye-slash"></i>
                          </button>
                        </div>

                        <transition name="fade">
                          <div
                            v-if="openedDescriptions[i]"
                            class="text-sm text-muted mt-2 border-t pt-2"
                          >
                            {{ JSON.parse(tr?.ozellikler_json)?.[ozellik?.source] }}
                          </div>
                        </transition>
                        <!-- Eğer açıklama varsa -->
                      </div>
                    </div>
                  </div>

                  <div
                    class="mt-3 d-flex justify-content-between align-items-end"
                  >
                    <div class="text-muted small">
                      <div>
                        <i class="bi bi-calendar me-1"></i>
                        Model Yılı: {{ tr.model_yili || "-" }}
                      </div>
                      <div>
                        <i class="bi bi-funnel me-1"></i>
                        Yakıt Türü: {{ tr.yakıt_türü_id || "-" }}
                      </div>
                      <div>
                        <i class="bi bi-gear me-1"></i>
                        Cihaz Türü: {{ tr.cihaz_türü_id || "-" }}
                      </div>
                      <div>
                        <i class="bi bi-slash-circle me-1"></i>
                        Silindir Hacmi: {{ tr.silindir_hacmi || "-" }}
                      </div>
                    </div>
                    <div class="text-end">
                      <div class="fw-bold text-dark mb-2 fs-3">
                        {{ formatter.format(tr.islem_fiyat) }}₺
                      </div>
                      <div class="mb-2">
                        <span
                          :class="getDurumClass(tr.kayit_durum_id)"
                          class="badge me-1"
                        >
                          {{ tr.kayit_durum_id }}
                        </span>
                        <span
                          class="badge"
                          :class="tr.odeme_durumu ? 'bg-success' : 'bg-danger'"
                        >
                          {{ tr.odeme_durumu ? "Ödendi" : "Ödenmedi" }}
                        </span>
                      </div>
                      <div class="text-muted">
                        {{ tr.kayit_zaman }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
            @click="show = !show"
            :class="this.show ? 'show menu-dropdown' : ''"
            data-kt-menu-trigger="click"
            data-kt-menu-attach="parent"
            data-kt-menu-placement="bottom-end"
          >
            {{ limit }}
            <span v-if="show" class="svg-icon svg-icon-muted">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12.5657 11.3657L16.75 15.55C17.1642 15.9643 17.8358 15.9643 18.25 15.55C18.6642 15.1358 18.6642 14.4643 18.25 14.05L12.7071 8.50716C12.3166 8.11663 11.6834 8.11663 11.2929 8.50715L5.75 14.05C5.33579 14.4643 5.33579 15.1358 5.75 15.55C6.16421 15.9643 6.83579 15.9643 7.25 15.55L11.4343 11.3657C11.7467 11.0533 12.2533 11.0533 12.5657 11.3657Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span v-else class="svg-icon svg-icon-muted">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </button>
          <div
            class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-100px py-3"
            :class="this.show ? 'show' : ''"
            data-kt-menu="true"
            style="z-index: 105; position: absolute"
          >
            <div class="menu-item px-3">
              <div
                class="menu-content text-muted pb-2 px-3 fs-7 text-uppercase"
              >
                Limit
              </div>
            </div>
            <div class="menu-item px-3">
              <a
                href="javascript:void(0)"
                class="menu-link px-3"
                :class="limit == 5 ? 'active' : ''"
                @click="changeLimit(5)"
              >
                5
              </a>
            </div>
            <div class="menu-item px-3">
              <a
                href="javascript:void(0)"
                class="menu-link px-3"
                :class="limit == 10 ? 'active' : ''"
                @click="changeLimit(10)"
              >
                10
              </a>
            </div>
            <div class="menu-item px-3">
              <a
                href="javascript:void(0)"
                class="menu-link px-3"
                :class="limit == 25 ? 'active' : ''"
                @click="changeLimit(25)"
              >
                25
              </a>
            </div>
            <div class="menu-item px-3">
              <a
                href="javascript:void(0)"
                class="menu-link px-3"
                :class="limit == 50 ? 'active' : ''"
                @click="changeLimit(50)"
              >
                50
              </a>
            </div>
            <div class="menu-item px-3">
              <a
                href="javascript:void(0)"
                class="menu-link px-3"
                :class="limit == 100 ? 'active' : ''"
                @click="changeLimit(100)"
              >
                100
              </a>
            </div>
            <div class="menu-item px-3">
              <a
                href="javascript:void(0)"
                class="menu-link px-3"
                :class="limit == 200 ? 'active' : ''"
                @click="changeLimit(200)"
              >
                200
              </a>
            </div>
          </div>
          <ul class="pagination">
            <li
              class="page-item previous"
              @click="first"
              :class="page == 1 ? 'd-none' : ''"
            >
              <a class="page-link">
                <i class="las la-angle-double-left fs-4"></i>
              </a>
            </li>
            <li
              class="page-item previous"
              @click="prev"
              :class="page - 1 < 1 ? 'd-none' : ''"
            >
              <a class="page-link"><i class="previous"></i></a>
            </li>
            <li
              class="page-item"
              v-for="pg in data?.pages"
              :key="pg"
              @click="pagess(pg)"
              :class="
                pg == page
                  ? 'active'
                  : '' || pg < page - 3
                  ? 'd-none'
                  : '' || pg > page + 3
                  ? 'd-none'
                  : ''
              "
            >
              <a class="page-link" v-if="pg == page - 3">...</a>
              <a
                class="page-link"
                :class="
                  pg == page - 3
                    ? 'd-none'
                    : '' || pg == page + 3
                    ? 'd-none'
                    : ''
                "
              >
                {{ pg }}
              </a>
              <a class="page-link" v-if="pg == page + 3">...</a>
            </li>
            <li
              class="page-item next"
              @click="next"
              :class="page + 1 > data?.pages ? 'd-none' : ''"
            >
              <a class="page-link"><i class="next"></i></a>
            </li>
            <li
              class="page-item next"
              @click="last"
              :class="data?.pages == page ? 'd-none' : ''"
            >
              <a class="page-link">
                <i class="las la-angle-double-right fs-4"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <section v-if="loading && this.iframe" class="w-100">
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
  props: {
    tableName: String,
    record: {
      type: Object,
      default: function () {
        return {};
      },
    },
    filters: {
      type: Object,
      default: function () {
        return {};
      },
    }, //Filtreleme (Carinin alt sayfasındaki adresler gibi)
    visible: {
      type: Object,
      default: function () {
        return {
          created_at: false,
          updated_at: false,
          own_id: false,
          user_id: false,
          department_id: false,
          donusturulme_zaman: false,
          master_description: false,
          odeme_yontemi_id: false,
          musteri_fiyati: false,
          bayi_id: false,
          state: false,
          id: false,
          plaka: false,
          silindir_hacmi: false,
          yakıt_türü_id: false,
          hp: false,
          model_yili: false,
          cihaz_türü_id: false,
        };
      },
    }, //Gizlenecek kolonlar
    input_visible: {
      type: Object,
      default: function () {
        return {};
      },
    }, //Gizlenecek inputlar(ekleme sayfasında state butonu gibi,isim inputu gibi)
    sort: {
      type: Object,
      default: function () {
        return {};
      },
    }, //Sıralama
  },
  data() {
    return {
      params: {},
      page: 1, //Sayfa numarası
      limit: 10, //Sayfada gösterilen kayıt sayısı
      sort: {}, //Sıralama
      sorts: this.sort, //Sıralama
      filter: {}, //Filtreleme
      data: [], //Veriler
      dataCount: 0,
      loading: true,
      show: false,
      baseUrl: process.env.VUE_APP_BASE_UPLOADS,
      theme: localStorage.getItem("theme") || "light",
      openedDescriptions: {},

      toplamlar: 0,
      payId: 0,
      iframe: false,
      token: "",

      formatter: new Intl.NumberFormat("tr-TR", {
        //style: 'currency',
        currency: "TRY",
        minimumFractionDigits: 2,
      }),
    };
  },
  methods: {
    first() {
      this.page = 1;
      this.getTable();
    }, //İlk sayfaya gönder
    prev() {
      this.page--;
      this.getTable();
    }, //Bir önceki sayfaya gönder
    next() {
      this.page++;
      this.getTable();
    }, //Bir sonraki sayfaya gönder
    last() {
      console.log(this.data.pages);
      this.page = this.data.pages;
      this.getTable();
    }, //Son sayfaya gönder
    pagess(pg) {
      this.page = pg;
      this.getTable();
    }, //Belirli sayfaya gönder
    changeLimit(limit) {
      this.limit = limit;
      this.page = 1;
      this.getTable();
      this.show = false;
    }, //Limit değiştir
    sortBy(td) {
      if (this.sorts[td.name] == true) {
        let value2 = JSON.parse('{"' + td.name + '":false}');
        this.sorts = value2;
      } else if (this.sorts[td.name] == false) {
        delete this.sorts[td.name];
      } else {
        let value3 = JSON.parse('{"' + td.name + '":true}');
        this.sorts = value3;
      }
      this.getTable();
    }, //Sıralama işlemi
    getTable() {
      this.loading = true;
      this.params = {
        page: this.page,
        limit: this.limit,
        column_array_id:
          this.$store.getters.getUserData.auths.tables["kayitlar"]?.lists[0],
        column_array_id_query:
          this.$store.getters.getUserData.auths.tables["kayitlar"]?.queries[0],
        sorts: this.sorts,
        filters: this.filters,
        editMode: false,
        liveDataMode: false,
        columnNames: [],
        filterColumnNames: [],
      };
      axios
        .post(this.$store.getters.getToken + "/tables/" + this.tableName, {
          params: JSON.stringify(this.params),
        })
        .then((res) => {
          if (res.data.code == 200) {
            this.dataCount = res.data.data.all_records_count;
            this.data = res.data.data;
            localStorage.setItem(this.tableName, JSON.stringify(this.data));
          }
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
    dropdownShow() {
      this.show = true;
    },
    toggleDescription(i) {
      this.openedDescriptions[i] = !this.openedDescriptions[i];
    },
    setData(record) {
      console.log(record);
      axios
        .post(
          this.$store.getters.getToken +
            "/tables/" +
            this.tableName +
            "/" +
            record +
            "/update",
          {
            column_set_id:
              this.$store.getters.getUserData.auths.tables["kayitlar"]
                ?.edits[0],
            //id: record,
            in_form_column_name: "kayit_durum_id",
            kayit_durum_id: 2,
            single_column: "kayit_durum_id",
          }
        )
        .then((response) => {
          if (response.data.code == 200) {
            this.getTable();
            toastr.success(
              "Onay işlemi başarılı bir şekilde gerçekleşti.",
              "Başarılı!"
            );
          }
        })
        .catch((error) => {
          console.log(error);
          toastr.error("Hatalı işlem.", "Hata!");
        })
        .finally(() => {
          //this.getTable();
          this.loading = false;
        });
    },
    payment(e) {
      this.payId = 9;
      this.toplamlar = e.islem_fiyat;
      console.log(this.toplamlar);
      if (this.toplamlar == 350) this.payId = 9;
      else if (this.toplamlar == 300) this.payId = 12;
      else if (this.toplamlar == 275) this.payId = 8;
      else if (this.toplamlar == 200) this.payId = 11;
      else if (this.toplamlar == 175) this.payId = 7;
      else this.payId = 9;
      this.loading = true;
      this.iframe = true;
      axios
        .post(this.$store.getters.getToken + "/payment/create", {
          paymentId: this.payId,
        })
        .then((res) => {
          if (res.data.status == "success") {
            //window.location.href="https://www.paytr.com/odeme/guvenli/"+res.data.token;
            this.token = res.data.token;
            // this.merchant_oid=res.data.merchant_oid
            // this.$store.commit("setMerchantData", this.merchant_oid)
            // console.log("Ecu merc",this.merchant_oid)
            this.updatePrice(e);
            this.iframe = false;
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    updatePrice(e) {
      console.log("update çalıştı");
      let parame = {
        arac_dosyalar_old: e?.arac_dosyalar,
        arac_marka_modeli_id: e?.arac_marka_modeli_id[0]?.source,
        bayi_id: e?.bayi_id[0]?.source,
        beyin_marka_id: e?.beyin_marka_id[0]?.source,
        beyin_modeli_text: e?.beyin_modeli_text,
        cihaz_türü_id: e?.cihaz_türü_id[0]?.source,
        description: e?.description,
        hp: e?.hp,
        iade_kaydi_id: e?.iade_kaydi_id,
        id: e?.id,
        islem_fiyat: e?.islem_fiyat,
        km: e?.km,
        kullanici_mail: e?.kullanici_mail,
        master: e?.master,
        model_yili: e?.model_yili,
        musteri_fiyati: e?.musteri_fiyati,
        name_basic: e?.name_basic,
        odeme_durumu_id: 2,
        odeme_plani_id: e?.odeme_plani_id[0]?.source,
        odeme_yontemi_id: e?.odeme_yontemi_id[0]?.source,
        ozel_yazilim: e?.ozel_yazilim,
        // çalışmazsa ozel yazılımsa true değilse false yap
        phone: e?.phone,
        plaka: e?.plaka,
        silindir_hacmi: e?.silindir_hacmi,
        surname: e?.surname,
        uygulama_sekli_id: e?.uygulama_sekli_id[0]?.source,
        vites_tip_id: e?.vites_tip_id[0]?.source,
        yakıt_türü_id: e?.yakıt_türü_id[0]?.source,
        column_set_id:
          this.$store.getters.getUserData.auths.tables["kayitlar"]?.edits[0],
      };
      // console.log(localStorage.getItem('kayitlar'))
      // let odemeId = JSON.parse(localStorage.getItem('kayitlar'))?.records[0];
      axios
        .post(
          this.$store.getters.getToken + "/tables/kayitlar/" + e.id + "/update",
          parame
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {});
    },
    deleting(e) {
      axios
        .post(
          this.$store.getters.getToken + "/tables/kayitlar/" + e.id + "/delete",
          {
            column_set_id:
              this.$store.getters.getUserData.auths.tables["kayitlar"]
                .delete[0],
          }
        )
        .then((res) => {
          if (res.data.data.message == "success") {
            toastr.success("Seçili işlem silindi.", "Başarılı!");
          } else if (res.data.data.message == "error") {
            toastr.error("Seçili işlem silinirken bir hata oluştu.", "Hata!");
          }
          this.getTable();
        })
        .catch((err) => {
          if (err.response.data.data.message == "no.auth")
            toastr.error("Tamamlanmış kayıtları silemezsiniz.", "Hata!");
          else toastr.error(err.response.data.data.message, "Hata!");
        });
    },
    garantiBelge(val) {
      const recordId = val.id;
      const url = `${process.env.VUE_APP_BASE_URL}${
        this.$store.getters.getToken
      }/tables/kayitlar/report?params=${encodeURIComponent(
        JSON.stringify({
          page: 1,
          limit: 10,
          column_array_id:
            this.$store.getters.getUserData.auths.tables["kayitlar"]?.lists[0],
          column_array_id_query:
            this.$store.getters.getUserData.auths.tables["kayitlar"]
              ?.queries[0],
          sorts: {},
          filters: {},
          editMode: false,
          liveDataMode: false,
          columnNames: [],
          report_format: "pdf",
          record_id: recordId,
          report_id: 1,
        })
      )}`;

      window.open(url, "_blank");
    },
    docDownload(val) {
      axios
        .post(
          this.$store.getters.getToken + "/downloadByRecords",
          { id: val.id },
          { responseType: "blob" }
        )
        .then((res) => {
          console.log(res);
          // Content-Disposition'dan filename çıkar
          const contentDisposition = res.headers["content-disposition"];
          let fileName = "dosya.dat"; // varsayılan

          const match = contentDisposition?.match(/filename="?([^"]+)"?/);
          if (match && match[1]) {
            fileName = match[1];
          }

          // Dosya indirme işlemi
          const blob = new Blob([res.data]);
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement("a");

          link.href = url;
          link.setAttribute("download", fileName);
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url); // Temizlik
        })
        .catch((err) => {
          const message =
            err?.response?.data?.data?.message || "Dosya indirilemedi.";
          toastr.error(message, "Hata!");
        });
    },
    odemeCheck(val) {
      axios
        .post(this.$store.getters.getToken + "/bakiyeOde", {
          id: val.id,
        })
        .then((res) => {
          if (res.data.status == "success") {
            toastr.success(err.response.data.message, "Başarılı");
            this.getTable();
          } else {
            toastr.error("Bir hata oluştu.", "Hata!");
          }
        })
        .catch((err) => {
          if (err.response.data.code == 400)
            toastr.error(err.response.data.data.message, "Hata!");
          else toastr.error(err.response.data.data.message, "Hata!");
        });
    },
    parseOzellikler(val) {
      try {
        return JSON.parse(val || "[]");
      } catch {
        return [];
      }
    },
    getDurumClass(durum) {
      switch (durum) {
        case "Onay Bekliyor":
          return "bg-primary text-white";
        case "Reddedildi":
          return "bg-danger text-white";
        case "Tamamlandı":
          return "bg-success text-white";
        case "işlemde":
          return "bg-warning text-dark";
        default:
          return "bg-secondary text-white";
      }
    },
  },
  mounted() {
    this.getTable();
  },
  watch: {
    tableName() {
      this.filter = {};
      this.getTable();
    },
  },
};
</script>

<style>
.page-item {
  cursor: pointer;
}

.ozelClass {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Scrollbar Styling */
#table::-webkit-scrollbar {
  width: 10px !important;
}

#table::-webkit-scrollbar-thumb {
  background-color: #ebebeb !important;
  -webkit-border-radius: 10px !important;
  border-radius: 10px !important;
}

#table::-webkit-scrollbar-thumb:window-inactive {
  -webkit-border-radius: 10px !important;
  border-radius: 10px !important;
  background: #6d6d6d !important;
}
</style>
