<template>
  <div
    v-if="loading"
    class="d-flex justify-content-center align-items-center min-vh-100"
  >
    <div>Yükleniyor...</div>
  </div>

  <div v-else class="d-flex flex-column min-vh-100 text-body">
    <!-- Sayfa içeriği -->
    <div class="d-flex flex-grow-1 m-2 shadow-sm" style="min-height: 400px">
      <!-- SOL TARAF -->
      <div
        class="w-33 p-3 border-end border-white overflow-auto bg-secondary"
        style="max-height: calc(100vh - 4rem)"
      >
        <!-- Başlık ve liste -->
        <h2 class="h5">Destek Talepleri</h2>
        <hr class="border-white opacity-50" />

        <div class="d-flex flex-column">
          <button
            v-for="ticket in tickets"
            :key="ticket.id"
            @click="selected = ticket"
            :class="[
              'p-3 rounded shadow-sm cursor-pointer mb-2 btn btn-light-info text-start',
              selected?.id === ticket.id ? 'bg-secondary' : '',
            ]"
          >
            <p class="fw-bold mb-1">{{ ticket.baslik }}</p>
            <p class="small text-muted">{{ ticket.created_at }}</p>
          </button>
        </div>

        <!-- Yeni talep -->
        <button
          @click="selected = 'new'"
          class="p-3 mt-4 rounded shadow-sm cursor-pointer mb-2 btn btn-primary w-100"
        >
          <p class="fw-bold mb-1">+ Yeni Destek Talebi Oluştur</p>
        </button>
      </div>

      <!-- SAĞ TARAF -->
      <div
        class="w-67 p-3 d-flex flex-column overflow-auto"
        style="max-height: calc(100vh - 4rem)"
      >
        <div
          v-if="loading2"
          class="flex-grow-1 d-flex justify-content-center align-items-center"
        >
          <div>Yükleniyor...</div>
        </div>

        <!-- Yeni Talep -->
        <template v-else-if="selected === 'new'">
          <div class="flex-1 d-flex flex-column justify-content-center">
            <form @submit.prevent="createNewTicket" class="mb-4">
              <div class="mb-3">
                <label class="form-label">Konu Başlığı</label>
                <input
                  v-model="newTicket.baslik"
                  type="text"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-3">
                <v-select
                  v-model="destek_durumu"
                  :options="destekdurumlar"
                  label="text"
                  :reduce="(bm) => bm.id"
                  placeholder="Destek Durumu Seçiniz"
                />
              </div>
              <div class="mb-3">
                <div class="col-xl-6 w-50">
                  <label class="form-label">Dosya</label>
                  <input
                    type="file"
                    id="filexx"
                    accept=".png, .jpg, .jpeg, .gif, .mp3, .mp4, .doc, .docx, .csv, .xlsx, .xsl, .pdf, .slx, .rar, .zip, .txt, .umd"
                    class="form-control"
                    @change="fileProps()"
                  />
                  <span class="text-muted">
                    *
                    <strong>Dosya tipleri:</strong>
                    .png, .jpg, .jpeg, .gif, .mp3, .mp4, .doc, .docx, .csv,
                    .xslx, .xsl, .pdf, .slx, .rar, .zip, .txt, .umd.
                  </span>
                  <br />
                  <span v-if="fileProp[0]?.size" class="text-right text-muted">
                    <strong>Dosya boyutu:</strong>
                    {{ fileProp[0]?.size }} Byte
                  </span>
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label">İlk Mesaj</label>
                <textarea
                  v-model="newTicket.mesaj"
                  class="form-control"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit" class="btn btn-success">
                Destek Talebi Oluştur
              </button>
              <button
                type="button"
                class="btn btn-secondary ms-2"
                @click="selected = null"
              >
                Vazgeç
              </button>
            </form>
          </div>
        </template>

        <!-- Mesajlar -->
        <template v-else-if="selected">
          <div class="flex-grow-1 d-flex flex-column gap-3 overflow-hidden">
            <!-- İlk mesaj -->
            <div class="overflow-auto pe-2">
              <div class="p-3 rounded border bg-secondary ms-auto">
                <p class="mb-1">{{ selected.mesaj }}</p>
                <div class="d-flex justify-content-between mt-2 small">
                  <span>{{ selected.created_at }}</span>
                  <span>{{ selected.bayi_id }}</span>
                </div>
                <hr />
                <span v-if="JSON.parse(selected?.report_file).length > 0">
                  Dosya:
                  <a
                    :href="
                      baseUrl +
                      JSON.parse(selected?.report_file)?.[0]?.[
                        'destination_path'
                      ] +
                      JSON.parse(selected?.report_file)?.[0]?.['file_name']
                    "
                    download
                    target="_blank"
                    class="link-danger"
                  >
                    {{ JSON.parse(selected?.report_file)?.[0]?.["file_name"] }}
                  </a>
                </span>
              </div>
            </div>

            <!-- Sonraki mesajlar -->
            <div class="overflow-auto pe-2">
              <div
                v-for="msg in messages"
                :key="msg.id"
                class="p-3 rounded border mb-2"
                :class="
                  Number(msg.gonderen_id) === store.getters.getUserData.user.id
                    ? 'bg-primary bg-opacity-10 ms-auto'
                    : 'bg-light border-secondary me-auto'
                "
                style="max-width: 80%"
              >
                <p class="mb-1">{{ msg.mesaj }}</p>
                <p class="small text-muted mb-0">{{ msg.created_at }}</p>
                <span v-if="JSON.parse(msg?.report_file).length > 0">
                  Dosya:
                  <a
                    :href="
                      baseUrl +
                      JSON.parse(msg?.report_file)?.[0]?.[
                        'destination_path'
                      ] +
                      JSON.parse(msg?.report_file)?.[0]?.['file_name']
                    "
                    download
                    target="_blank"
                    class="link-danger"
                  >
                    {{ JSON.parse(msg?.report_file)?.[0]?.["file_name"] }}
                  </a>
                </span>
              </div>
            </div>
          </div>

          <!-- Mesaj yazma alanı -->
          <form
            @submit.prevent="sendMessage"
            class="mt-3 d-flex gap-2 align-items-center"
          >
            <input
              v-model="messageText"
              type="text"
              placeholder="Mesajınızı yazın..."
              class="form-control"
              required
            />
            <input
              type="file"
              ref="fileInput"
              class="d-none"
              @change="handleFile"
            />
            <button
              type="button"
              @click="triggerFileInput"
              class="btn btn-light"
            >
              📎
            </button>
            <button type="submit" class="btn btn-primary">Gönder</button>
          </form>
        </template>

        <!-- Hiçbir şey seçili değilse -->
        <div
          v-else
          class="flex-grow-1 d-flex justify-content-center align-items-center text-muted"
        >
          Bir destek talebi seçin.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch, onMounted } from "vue";
import axios from "axios";
import { useStore } from "vuex";
import vSelect from "vue3-select";
import "vue3-select/dist/vue3-select.css";

export default {
  components: { vSelect },
  setup() {
    const store = useStore();

    const tickets = ref([]);
    const selected = ref(null);
    const messages = ref([]);
    const messageText = ref("");
    const file = ref(null);
    const fileInput = ref(null);
    const destek_durumu = ref(null);
    const destekDurumlar = ref([]);
    const fileProp = ref("");
    const baseUrl = process.env.VUE_APP_BASE_UPLOADS;

    const loading = ref(false);
    const loading2 = ref(false);

    const newTicket = ref({
      baslik: "",
      mesaj: "",
    });

    const params = ref({
      page: 1,
      limit: 1000,
      sorts: {},
      filters: {},
      column_array_id:
        store.getters.getUserData.auths.tables["destek"]?.lists[0],
      column_array_id_query:
        store.getters.getUserData.auths.tables["destek"]?.queries[0],
    });

    const params2 = ref({
      page: 1,
      limit: 100,
      sorts: { id: true },
      filters: {},
      column_array_id:
        store.getters.getUserData.auths.tables["destek_mesaj"]?.lists[0],
      column_array_id_query:
        store.getters.getUserData.auths.tables["destek_mesaj"]?.queries[0],
    });

    const fetchTickets = async () => {
      try {
        loading.value = true;
        const response = await axios.post(
          `${store.getters.getToken}/tables/destek`,
          {
            params: JSON.stringify(params.value),
          }
        );
        tickets.value = response.data.data.records;
      } catch (err) {
        console.error(err);
      } finally {
        loading.value = false;
      }
    };

    const fetchMessages = async () => {
      if (!selected.value) return;

      params2.value.filters.destek_id = {
        type: 1,
        guiType: "select",
        filter: [selected.value.id],
      };

      try {
        loading2.value = true;
        const response = await axios.post(
          `${store.getters.getToken}/tables/destek_mesaj`,
          {
            params: JSON.stringify(params2.value),
          }
        );
        messages.value = response.data.data.records;
      } catch (err) {
        console.error(err);
      } finally {
        loading2.value = false;
      }
    };

    const fileProps = () => {
      fileProp.value = $("#filexx")[0].files;
    };

    const fetchDestekDurum = async () => {
      const res = await axios.post(
        store.getters.getToken +
          "/tables/destek/getSelectColumnData/destek_durumu_id?search=***&page=1&limit=1500"
      );
      destekDurumlar.value = res.data.results;
      console.log(destekDurumlar.value);
    };

    const sendMessage = async () => {
      const formData = new FormData();
      formData.append("destek_id", selected.value.id);
      formData.append("mesaj", messageText.value);
      formData.append(
        "column_set_id",
        store.getters.getUserData.auths.tables["destek_mesaj"]?.creates[0]
      );
      if (file.value) formData.append("report_file[]", file.value);

      try {
        await axios.post(
          `${store.getters.getToken}/tables/destek_mesaj/store`,
          formData
        );
        messageText.value = "";
        file.value = null;
        fetchMessages();
      } catch (err) {
        if (err.response.data.code === 400) {
          toastr.error(err.response.data.data.message, "Hata!");
        }
        console.log(err.response);
      }
    };

    const createNewTicket = async () => {
      try {
        const formData = new FormData();
        formData.append("baslik", newTicket.value.baslik);
        formData.append("mesaj", newTicket.value.mesaj);
        formData.append("destek_durumu_id", destek_durumu.value);

        let files = $("#filexx")[0].files;
        for (let i = 0; i < files.length; i++) {
          formData.append("report_file[]", files[i]);
        }

        formData.append(
          "column_set_id",
          store.getters.getUserData.auths.tables["destek"]?.creates[0]
        );

        const response = await axios.post(
          `${store.getters.getToken}/tables/destek/store`,
          formData
        );

        // Yeni talebi listeye ekle ve seçili yap
        await fetchTickets();
        const newId = response.data.data.id;
        const createdTicket = tickets.value.find((t) => t.id === newId);
        if (createdTicket) selected.value = createdTicket;

        // Formu sıfırla
        newTicket.value.baslik = "";
        newTicket.value.mesaj = "";
      } catch (err) {
        console.error(err);
      }
    };

    const handleFile = (e) => {
      file.value = e.target.files[0];
    };

    const triggerFileInput = () => {
      fileInput.value.click();
    };

    watch(selected, () => {
      console.log(selected.value);
      if (selected.value !== "new") fetchMessages();
    });

    onMounted(() => {
      fetchTickets();
      fetchDestekDurum();
    });

    return {
      tickets,
      selected,
      messages,
      messageText,
      fileInput,
      loading,
      loading2,
      sendMessage,
      handleFile,
      triggerFileInput,
      newTicket,
      createNewTicket,
      destek_durumu,
      destekdurumlar: destekDurumlar,
      store,
      fileProps,
      fileProp,
      baseUrl,
    };
  },
};
</script>

<style scoped>
/* Bootstrap kullanıldığı için özel stil çok gerekmez ama istenirse eklenebilir */
.w-33 {
  width: 33.3333%;
}
.w-67 {
  width: 66.6667%;
}
.hover-bg-light:hover {
  background-color: #f8f9fa;
}
.cursor-pointer {
  cursor: pointer;
}
</style>
