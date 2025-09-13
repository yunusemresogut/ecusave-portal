<template>
  <div id="kt_content_container" class="container-fluid">
    <div v-if="odemeKontrol == true" class="card">
      <div
        class="card-body d-flex flex-column align-items-center justify-content-center"
        style="height: 80vh"
      >
        <span class="svg-icon svg-icon-success svg-icon-5x my-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              opacity="0.3"
              d="M10.3 14.3L11 13.6L7.70002 10.3C7.30002 9.9 6.7 9.9 6.3 10.3C5.9 10.7 5.9 11.3 6.3 11.7L10.3 15.7C9.9 15.3 9.9 14.7 10.3 14.3Z"
              fill="currentColor"
            />
            <path
              d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM11.7 15.7L17.7 9.70001C18.1 9.30001 18.1 8.69999 17.7 8.29999C17.3 7.89999 16.7 7.89999 16.3 8.29999L11 13.6L7.70001 10.3C7.30001 9.89999 6.69999 9.89999 6.29999 10.3C5.89999 10.7 5.89999 11.3 6.29999 11.7L10.3 15.7C10.5 15.9 10.8 16 11 16C11.2 16 11.5 15.9 11.7 15.7Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <h1>Ödeme Başarılı</h1>
      </div>
    </div>
    <div v-if="odemeKontrol == false" class="card">
      <div
        class="card-body d-flex flex-column align-items-center justify-content-center"
        style="height: 80vh"
      >
        <span class="svg-icon svg-icon-primary svg-icon-5x my-4 iconSuc">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="21"
            viewBox="0 0 14 21"
            fill="none"
          >
            <path
              opacity="0.3"
              d="M12 6.20001V1.20001H2V6.20001C2 6.50001 2.1 6.70001 2.3 6.90001L5.6 10.2L2.3 13.5C2.1 13.7 2 13.9 2 14.2V19.2H12V14.2C12 13.9 11.9 13.7 11.7 13.5L8.4 10.2L11.7 6.90001C11.9 6.70001 12 6.50001 12 6.20001Z"
              fill="currentColor"
            />
            <path
              d="M13 2.20001H1C0.4 2.20001 0 1.80001 0 1.20001C0 0.600012 0.4 0.200012 1 0.200012H13C13.6 0.200012 14 0.600012 14 1.20001C14 1.80001 13.6 2.20001 13 2.20001ZM13 18.2H10V16.2L7.7 13.9C7.3 13.5 6.7 13.5 6.3 13.9L4 16.2V18.2H1C0.4 18.2 0 18.6 0 19.2C0 19.8 0.4 20.2 1 20.2H13C13.6 20.2 14 19.8 14 19.2C14 18.6 13.6 18.2 13 18.2ZM4.4 6.20001L6.3 8.10001C6.7 8.50001 7.3 8.50001 7.7 8.10001L9.6 6.20001H4.4Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <h1>Kontrol Ediliyor...</h1>
        <h1>Lütfen Bekleyiniz...</h1>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PriceError",
  data() {
    return {
      bayi_id: "",
      odemeId: "",
      editData: [],
      siparis_no: "",
      ozel_yazilim: "",
      master: "",
      loading: false,
      odemeKontrol: false,
    };
  },
  methods: {
    getPrice() {
      this.loading = true;
      let parameters = {
        page: 1,
        limit: 100,
        column_array_id:
          this.$store.getters.getUserData.auths.tables["abonelik_satis"]
            ?.lists[0],
        column_array_id_query:
          this.$store.getters.getUserData.auths.tables["abonelik_satis"]
            ?.queries[0],
        sorts: {},
        filters: {
          bayi_id: {
            type: 1,
            guiType: "multiselect",
            filter: [this.bayi_id],
            description: "",
            columnName: "bayi_id",
            filterColumnNames: ["bayi_id"],
          },
        },
        editMode: false,
        liveDataMode: false,
      };
      axios
        .post(this.$store.getters.getToken + "/tables/abonelik_satis", {
          params: JSON.stringify(parameters),
        })
        .then((res) => {
          this.siparis_no = res.data.data.records[0].siparis_numarasi;
          console.log("Price sip", this.siparis_no);
          console.log("Price merc", this.$store.getters.getMerchantData);
          if (this.siparis_no == this.$store.getters.getMerchantData) {
            this.odemeKontrol = true;
            this.setOdeme();
            // setInterval(()=>{
            //     toastr.warning('10 saniye içinde yönlendirileceksiniz...', 'Başarılı')
            //     this.$router.push('/portal/')
            // }, 10000);
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    getTable() {
      this.loading = true;
      let parameter = {
        page: 1,
        limit: 10,
        column_array_id:
          this.$store.getters.getUserData.auths.tables["kayitlar"]?.lists[0],
        column_array_id_query:
          this.$store.getters.getUserData.auths.tables["kayitlar"]?.queries[0],
        sorts: {},
        filters: {},
        editMode: false,
        liveDataMode: false,
      };
      axios
        .post(this.$store.getters.getToken + "/tables/kayitlar", {
          params: JSON.stringify(parameter),
        })
        .then((res) => {
          this.odemeId = res.data.data.records[0].id;
          this.editOdeme();
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {});
    },
    editOdeme() {
      let parames = {
        column_set_id:
          this.$store.getters.getUserData.auths.tables["kayitlar"]?.edits[0],
      };
      axios
        .post(
          this.$store.getters.getToken +
            "/tables/kayitlar/" +
            this.odemeId +
            "/edit",
          {
            params: JSON.stringify(parames),
          }
        )
        .then((res) => {
          console.log(res);
          this.editData = res.data.data.record;
          if (res.data.data.record.ozel_yazilim == true)
            this.ozel_yazilim = "1";
          else if (res.data.data.record.ozel_yazilim == false)
            this.ozel_yazilim = "0";
          else this.ozel_yazilim = "";
          if (res.data.data.record.master == true) this.master = "1";
          else if (res.data.data.record.master == false) this.master = "0";
          else this.master = "";
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {});
    },
    setOdeme() {
      let parame = {
        arac_dosyalar_old: this.editData?.arac_dosyalar,
        arac_marka_modeli_id: this.editData?.arac_marka_modeli_id[0]?.source,
        bayi_id: this.editData?.bayi_id[0]?.source,
        beyin_marka_id: this.editData?.beyin_marka_id[0]?.source,
        beyin_modeli_text: this.editData?.beyin_modeli_text,
        cihaz_türü_id: this.editData?.cihaz_türü_id[0]?.source,
        description: this.editData?.description,
        hp: this.editData?.hp,
        iade_kaydi_id: this.editData?.iade_kaydi_id,
        id: this.odemeId,
        islem_fiyat: this.editData?.islem_fiyat,
        km: this.editData?.km,
        kullanici_mail: this.editData?.kullanici_mail,
        master: this.master,
        model_yili: this.editData?.model_yili,
        musteri_fiyati: this.editData?.musteri_fiyati,
        name_basic: this.editData?.name_basic,
        odeme_durumu_id: 2,
        odeme_plani_id: this.editData?.odeme_plani_id[0]?.source,
        odeme_yontemi_id: this.editData?.odeme_yontemi_id[0]?.source,
        ozel_yazilim: this.ozel_yazilim,
        // çalışmazsa ozel yazılımsa true değilse false yap
        phone: this.editData?.phone,
        plaka: this.editData?.plaka,
        silindir_hacmi: this.editData?.silindir_hacmi,
        surname: this.editData?.surname,
        uygulama_sekli_id: this.editData?.uygulama_sekli_id[0]?.source,
        vites_tip_id: this.editData?.vites_tip_id[0]?.source,
        yakıt_türü_id: this.editData?.yakıt_türü_id[0]?.source,
        column_set_id:
          this.$store.getters.getUserData.auths.tables["kayitlar"]?.edits[0],
      };
      axios
        .post(
          this.$store.getters.getToken +
            "/tables/kayitlar/" +
            this.odemeId +
            "/update",
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
  },
  mounted() {
    this.getTable();
    this.getPrice();
  },
};
</script>

<style>
.iconSuc {
  animation: rotation 1.4s infinite;
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
