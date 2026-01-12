<template>
  <div id="kt_content_container" class="container-xxl">
    <div v-if="this.iframe == false" class="row g-5 g-xl-8">
      <div class="card mb-xl-8">
        <section v-if="loading" class="w-100">
          <span class="loader-19"></span>
        </section>
        <div v-else class="card-body">
          <div class="row mb-xl-8">
            <div class="col-xl-3">
              <label class="form-label">
                Beyin Markası
                <span class="text-danger">*</span>
              </label>
              <v-select
                v-model="beyin_marka_id"
                :options="beyinMarka"
                label="text"
                :reduce="(bm) => bm.id"
                placeholder="Beyin Markası Seçiniz"
              />
              <div class="fv-plugins-message-container invalid-feedback">
                {{ this.errorMessage["beyin_marka_id"]?.[0] }}
              </div>
            </div>
            <div class="col-xl-3">
              <label class="form-label">
                Araç Marka Modeli
                <span class="text-danger">*</span>
              </label>
              <v-select
                v-model="arac_marka_modeli_id"
                :options="aracMarka"
                label="text"
                :reduce="(bm) => bm.id"
                placeholder="Araç Marka Modeli Seçiniz"
              />
              <div class="fv-plugins-message-container invalid-feedback">
                {{ this.errorMessage["arac_marka_modeli_id"]?.[0] }}
              </div>
            </div>
            <div class="col-xl-3">
              <label class="form-label">
                Beyin Modeli
                <span class="text-danger">*</span>
              </label>
              <input
                type="text"
                v-model="beyin_modeli_text"
                @keypress="this.validation == ''"
                class="form-control"
                :class="['beyin_modeli_text', this.validation]"
                placeholder="Beyin Modeli"
              />
              <div class="fv-plugins-message-container invalid-feedback">
                {{ this.errorMessage["beyin_modeli_text"]?.[0] }}
              </div>
            </div>
            <div class="col-xl-3">
              <label class="form-label">
                Yakıt Türü
                <span class="text-danger">*</span>
              </label>
              <v-select
                v-model="yakıt_türü_id"
                :options="yakitTuru"
                label="text"
                :reduce="(bm) => bm.id"
                placeholder="Yakıt Türü Seçiniz"
              />
              <div class="fv-plugins-message-container invalid-feedback">
                {{ this.errorMessage["yakıt_türü_id"]?.[2] }}
              </div>
            </div>
          </div>
          <div class="separator border-primary my-10"></div>
          <h3 class="text-primary mb-xl-8">Müşterinin Ruhsat Bilgileri</h3>
          <div class="row mb-xl-8">
            <div class="col-xl-3">
              <label class="form-label">Ad <span class="text-danger">*</span></label>
              <input
                type="text"
                v-model="name_basic"
                class="form-control"
                :class="['name_basic', this.validation]"
                placeholder="Ad"
              />
              <div class="fv-plugins-message-container invalid-feedback">
                {{ this.errorMessage["name_basic"]?.[0] }}
              </div>
            </div>
            <div class="col-xl-3">
              <label class="form-label">Soyad <span class="text-danger">*</span></label>
              <input
                type="text"
                v-model="surname"
                class="form-control"
                :class="['surname', this.validation]"
                placeholder="Soyad"
              />
              <div class="fv-plugins-message-container invalid-feedback">
                {{ this.errorMessage["surname"]?.[0] }}
              </div>
            </div>
            <div class="col-xl-3">
              <label class="form-label">KM <span class="text-danger">*</span></label>
              <input
                v-mask="'########'"
                v-model="km"
                class="form-control"
                :class="['km', this.validation]"
                placeholder="KM"
              />
              <div class="fv-plugins-message-container invalid-feedback">
                {{ this.errorMessage["km"]?.[0] }}
              </div>
            </div>
            <div class="col-xl-3">
              <label class="form-label">
                HP
                <span class="text-danger">*</span>
              </label>
              <input
                v-mask="'########'"
                v-model="hp"
                class="form-control"
                :class="['hp', this.validation]"
                placeholder="HP"
              />
              <div class="fv-plugins-message-container invalid-feedback">
                {{ this.errorMessage["hp"]?.[0] }}
              </div>
            </div>
          </div>
          <div class="row mb-xl-8">
            <div class="col-xl-6 w-50">
              <label class="form-label">Email <span class="text-danger">*</span></label>
              <input
                type="text"
                v-model="kullanici_mail"
                class="form-control"
                :class="['kullanici_mail', this.validation]"
                @input="kullanici_mail = $event.target.value.toLowerCase()"
                placeholder="Email"
              />
              <div class="fv-plugins-message-container invalid-feedback">
                {{ this.errorMessage["kullanici_mail"]?.[0] }}
              </div>
            </div>
            <div class="col-xl-6 w-50">
              <label class="form-label">
                Silindir Hacmi
                <span class="text-danger">*</span>
              </label>
              <input
                type="text"
                v-model="silindir_hacmi"
                class="form-control"
                :class="['silindir_hacmi', this.validation]"
                placeholder="Silindir Hacmi"
              />
              <div class="fv-plugins-message-container invalid-feedback">
                {{ this.errorMessage["silindir_hacmi"]?.[0] }}
              </div>
            </div>
          </div>
          <div class="row mb-xl-8">
            <div class="col-xl-6 w-50">
              <label class="form-label">Telefon</label>
              <input
                v-mask="'+90 (###) ### ## ##'"
                v-model="phone"
                class="form-control"
                :class="['phone', this.validation]"
                placeholder="Telefon"
              />
              <div class="fv-plugins-message-container invalid-feedback">
                {{ this.errorMessage["phone"]?.[0] }}
              </div>
            </div>
            <div class="col-xl-6 w-50">
              <label class="form-label">
                Vites Tipi
                <span class="text-danger">*</span>
              </label>
              <v-select
                v-model="vites_tip_id"
                :options="vitesTipi"
                label="text"
                :reduce="(bm) => bm.id"
                placeholder="Vites Tipi Seçiniz"
              />
              <div class="fv-plugins-message-container invalid-feedback">
                {{ this.errorMessage["vites_tip_id"]?.[2] }}
              </div>
            </div>
          </div>
          <div class="row mb-xl-8">
            <div class="col-xl-6 w-50">
              <label class="form-label">
                Plaka
                <span class="text-danger">*</span>
              </label>
              <input
                v-mask="'##AXX#####'"
                v-model="plaka"
                class="form-control"
                :class="['plaka', this.validation]"
                placeholder="Plaka"
              />
              <div class="fv-plugins-message-container invalid-feedback">
                {{ this.errorMessage["plaka"]?.[0] }}
              </div>
            </div>
            <div class="col-xl-6 w-50">
              <label class="form-label">
                Model Yılı
                <span class="text-danger">*</span>
              </label>
              <input
                v-mask="'####'"
                v-model="model_yili"
                class="form-control"
                :class="['model_yili', this.validation]"
                placeholder="Model Yılı"
              />
              <div class="fv-plugins-message-container invalid-feedback">
                {{ this.errorMessage["model_yili"]?.[1] }}
              </div>
            </div>
          </div>
          <div class="separator border-primary my-10"></div>
          <div class="row mb-xl-8">
            <ul class="nav nav-tabs nav-line-tabs mb-5 fs-4">
              <li class="nav-item">
                <a
                  class="nav-link active text-primary"
                  data-bs-toggle="tab"
                  href="#kt_tab_pane_1"
                >
                  Özellikler
                </a>
              </li>
            </ul>

            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="kt_tab_pane_1"
                role="tabpanel"
              >
                <div class="row">
                  <label class="form-label">
                    Özellikler
                    <span class="text-danger">*</span>
                  </label>
                  <div v-for="feat in features" :key="feat.id" class="col-xl-4">
  <label
    class="d-flex flex-column gap-2 p-3 rounded border cursor-pointer transition form-check form-check-custom form-check-warning form-check-solid form-check-sm mb-4 w-100"
    :for="'flexRadioLg' + feat.id"
    :class="{
      'bg-light-info border-info shadow-sm': seciliOzellikler.includes(feat.id),
      'border-secondary': !seciliOzellikler.includes(feat.id),
    }"
  >
    <!-- Checkbox ve metni -->
    <div class="d-flex align-items-center gap-2 w-100">
      <input
        class="form-check-input mt-0"
        type="checkbox"
        :id="'flexRadioLg' + feat.id"
        :value="feat.id"
        v-model="seciliOzellikler"
        @change="hesapla()"
      />
      <span class="fw-semibold small text-start">
        {{ feat.ozellik }} - {{ feat.islem_fiyat }} ₺
      </span>
    </div>

    <!-- Açıklama varsa göster -->
    <div
      v-if="feat.description"
      class="d-flex gap-2 align-items-start p-2 rounded bg-light-info border border-info w-100"
    >
      <i class="bi bi-info-circle-fill text-info fs-6 mt-1"></i>
      <small class="text-muted lh-sm text-start">
        {{ feat.description }}
      </small>
    </div>
  </label>

  <!-- Sadece seçiliyse input görünsün -->
  <input
    v-if="seciliOzellikler.includes(feat.id)"
    type="text"
    v-model="ozelliklerJSON[feat.id]"
    class="form-control mb-4"
    placeholder="Açıklama"
  />
</div>


                  <span class="text-muted">
                    *Birden fazla özellik seçilebilir. En az bir özellik
                    seçilmelidir.
                  </span>
                  <div class="fv-plugins-message-container invalid-feedback">
                    {{ this.errorMessage["ozellikler"] }}
                  </div>
                </div>
                <span class="badge badge-lg badge-light-primary">
                  Toplam Tutar:&nbsp;
                  <span>
                    {{ this.formatter.format(this.hesapSonucu.total_price) }} ₺
                  </span>
                </span>
              </div>
            </div>

            <div class="separator border-primary my-10"></div>
            <div class="row mb-xl-8">
              <div class="col-xl-12 d-flex flex-column">
                <div class="col-xl-6">
                  <div class="d-flex flex-row">
                    <label class="d-flex flex-stack mb-5 cursor-pointer mx-2">
                      <span class="d-flex align-items-center me-2">
                        <span class="symbol symbol-50px me-6">
                          <span class="symbol-label bg-light-danger">
                            <span class="svg-icon svg-icon-1 svg-icon-danger">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  opacity="0.3"
                                  d="M22.1 11.5V12.6C22.1 13.2 21.7 13.6 21.2 13.7L19.9 13.9C19.7 14.7 19.4 15.5 18.9 16.2L19.7 17.2999C20 17.6999 20 18.3999 19.6 18.7999L18.8 19.6C18.4 20 17.8 20 17.3 19.7L16.2 18.9C15.5 19.3 14.7 19.7 13.9 19.9L13.7 21.2C13.6 21.7 13.1 22.1 12.6 22.1H11.5C10.9 22.1 10.5 21.7 10.4 21.2L10.2 19.9C9.4 19.7 8.6 19.4 7.9 18.9L6.8 19.7C6.4 20 5.7 20 5.3 19.6L4.5 18.7999C4.1 18.3999 4.1 17.7999 4.4 17.2999L5.2 16.2C4.8 15.5 4.4 14.7 4.2 13.9L2.9 13.7C2.4 13.6 2 13.1 2 12.6V11.5C2 10.9 2.4 10.5 2.9 10.4L4.2 10.2C4.4 9.39995 4.7 8.60002 5.2 7.90002L4.4 6.79993C4.1 6.39993 4.1 5.69993 4.5 5.29993L5.3 4.5C5.7 4.1 6.3 4.10002 6.8 4.40002L7.9 5.19995C8.6 4.79995 9.4 4.39995 10.2 4.19995L10.4 2.90002C10.5 2.40002 11 2 11.5 2H12.6C13.2 2 13.6 2.40002 13.7 2.90002L13.9 4.19995C14.7 4.39995 15.5 4.69995 16.2 5.19995L17.3 4.40002C17.7 4.10002 18.4 4.1 18.8 4.5L19.6 5.29993C20 5.69993 20 6.29993 19.7 6.79993L18.9 7.90002C19.3 8.60002 19.7 9.39995 19.9 10.2L21.2 10.4C21.7 10.5 22.1 11 22.1 11.5ZM12.1 8.59998C10.2 8.59998 8.6 10.2 8.6 12.1C8.6 14 10.2 15.6 12.1 15.6C14 15.6 15.6 14 15.6 12.1C15.6 10.2 14 8.59998 12.1 8.59998Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M17.1 12.1C17.1 14.9 14.9 17.1 12.1 17.1C9.30001 17.1 7.10001 14.9 7.10001 12.1C7.10001 9.29998 9.30001 7.09998 12.1 7.09998C14.9 7.09998 17.1 9.29998 17.1 12.1ZM12.1 10.1C11 10.1 10.1 11 10.1 12.1C10.1 13.2 11 14.1 12.1 14.1C13.2 14.1 14.1 13.2 14.1 12.1C14.1 11 13.2 10.1 12.1 10.1Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </span>
                        </span>

                        <span class="d-flex flex-column">
                          <span class="fw-bolder fs-6">Master</span>
                        </span>
                      </span>

                      <span
                        class="form-check form-check-custom form-check-solid"
                      >
                        <input
                          class="form-check-input"
                          type="radio"
                          name="category"
                          :value="1"
                          v-model="master"
                        />
                      </span>
                    </label>

                    <label class="d-flex flex-stack mb-5 cursor-pointer mx-2">
                      <span class="d-flex align-items-center me-2">
                        <span class="symbol symbol-50px me-6">
                          <span class="symbol-label bg-light-primary">
                            <span class="svg-icon svg-icon-1 svg-icon-primary">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  opacity="0.3"
                                  d="M22.0318 8.59998C22.0318 10.4 21.4318 12.2 20.0318 13.5C18.4318 15.1 16.3318 15.7 14.2318 15.4C13.3318 15.3 12.3318 15.6 11.7318 16.3L6.93177 21.1C5.73177 22.3 3.83179 22.2 2.73179 21C1.63179 19.8 1.83177 18 2.93177 16.9L7.53178 12.3C8.23178 11.6 8.53177 10.7 8.43177 9.80005C8.13177 7.80005 8.73176 5.6 10.3318 4C11.7318 2.6 13.5318 2 15.2318 2C16.1318 2 16.6318 3.20005 15.9318 3.80005L13.0318 6.70007C12.5318 7.20007 12.4318 7.9 12.7318 8.5C13.3318 9.7 14.2318 10.6001 15.4318 11.2001C16.0318 11.5001 16.7318 11.3 17.2318 10.9L20.1318 8C20.8318 7.2 22.0318 7.59998 22.0318 8.59998Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M4.23179 19.7C3.83179 19.3 3.83179 18.7 4.23179 18.3L9.73179 12.8C10.1318 12.4 10.7318 12.4 11.1318 12.8C11.5318 13.2 11.5318 13.8 11.1318 14.2L5.63179 19.7C5.23179 20.1 4.53179 20.1 4.23179 19.7Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </span>
                        </span>

                        <span class="d-flex flex-column">
                          <span class="fw-bolder fs-6">Slave</span>
                        </span>
                      </span>

                      <span
                        class="form-check form-check-custom form-check-solid"
                      >
                        <input
                          class="form-check-input"
                          type="radio"
                          name="category"
                          :value="0"
                          v-model="master"
                        />
                      </span>
                    </label>

                    <div class="fv-plugins-message-container invalid-feedback">
                      {{
                        this.errorMessage["master"] &&
                        "Master ya da Slave seçiniz."
                      }}
                    </div>
                  </div>
                </div>
                <div class="col-xl-12 d-flex flex-row">
                  <div class="col-xl-6 mx-2">
                    <label class="form-label">
                      Cihaz Türü
                      <span class="text-danger">*</span>
                    </label>
                    <v-select
                v-model="cihaz_türü_id"
                :options="cihazTuru"
                label="text"
                :reduce="(bm) => bm.id"
                placeholder="Cihaz Türü Seçiniz"
              />
                    <div class="fv-plugins-message-container invalid-feedback">
                      {{ this.errorMessage["cihaz_türü_id"]?.[2] }}
                    </div>
                  </div>

                  <div class="col-xl-6 mx-2">
                    <label class="form-label">
                      Uygulama Şekli
                      <span class="text-danger">*</span>
                    </label>
                    <v-select
                v-model="uygulama_sekli_id"
                :options="uygulamaSekli"
                label="text"
                :reduce="(bm) => bm.id"
                placeholder="Uygulama Şekli Seçiniz"
              />
                    <div class="fv-plugins-message-container invalid-feedback">
                      {{ this.errorMessage["uygulama_sekli_id"]?.[2] }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="separator border-primary my-10"></div>
            <div class="row mb-xl-8">
              <div class="col-xl-6 w-50">
                <!-- Mevcut Dosya -->
                <div v-if="dosyaGosterim" class="mb-3">
                  <label class="form-label fw-bold">Yüklü Dosya</label>
                  <div
                    class="d-flex align-items-center justify-content-between p-3 border rounded bg-light"
                  >
                    <div class="text-truncate" style="max-width: 80%">
                      <i class="bi bi-file-earmark-text me-2 text-primary"></i>
                      <a
                        :href="baseUrl + dosyaGosterim[0]"
                        download
                        class="text-decoration-none text-primary"
                      >
                        Mevcut Araç Dosyası
                      </a>
                    </div>
                    <span class="badge bg-success">İndir</span>
                  </div>
                </div>

                <!-- Yeni Dosya Yükleme -->
                <label for="file" class="form-label fw-bold">
                  Yeni Dosya Yükle
                  <span class="text-danger">*</span>
                </label>
                <input
                  type="file"
                  id="file"
                  accept=".cod,.slave,.slv,.bin,.mpc,.unq,.dec,.mmf,.erp,.zip,.rar,.slx,.txt,.g3fax"
                  class="form-control"
                  @change="fileProps"
                  :class="['arac_dosyalar[]', dosyaValidation]"
                />

                <div class="form-text mt-1">
                  <strong>Desteklenen formatlar:</strong>
                  .cod, .slave, .slv, .bin, .mpc, .unq, .dec, .mmf, .erp, .zip,
                  .rar, .slx, .txt, .g3fax
                </div>

                <div v-if="fileProp[0]?.size" class="form-text mt-1">
                  <strong>Seçilen dosya boyutu:</strong>
                  {{ fileProp[0].size }} Byte
                </div>

                <div
                  class="fv-plugins-message-container invalid-feedback d-block"
                >
                  {{ errorMessage["dosyaWarn"] }}
                </div>
              </div>

              <div class="col-xl-6 w-50">
                <label class="form-label">Açıklama</label>
                <div class="input-group">
                  <span class="input-group-text">Açıklama</span>
                  <textarea
                    v-model="description"
                    class="form-control"
                    aria-label="With textarea"
                  ></textarea>
                  <div class="fv-plugins-message-container invalid-feedback">
                    {{ this.errorMessage["description"] }}
                  </div>
                </div>
              </div>
            </div>
            <div class="separator border-primary my-10"></div>

            <div class="row mb-xl-8">
              <div class="d-flex justify-content-between align-items-center">
                <div class="text-muted">
                  Zorunlu alanlar
                  <span class="text-danger">*</span>
                  ile gösterilmiştir.
                </div>
                <div class="card">
                  <div>
                    <div class="text-muted mb-2 fs-3 text-end">
                      <div>
                        Tutar:
                        <span class="badge badge-light-primary fs-3 my-1">
                          {{
                            this.formatter.format(
                              this.hesapSonucu.original_total
                            )
                          }}₺
                        </span>
                      </div>
                      <div>
                        İndirim:
                        <span class="badge badge-light-primary fs-3 my-1">
                          {{
                            this.formatter.format(
                              this.hesapSonucu.discount_amount
                            )
                          }}₺
                        </span>
                      </div>
                      <div>
                        Ödenecek Tutar:
                        <span class="badge badge-light-primary fs-3 my-1">
                          {{
                            this.formatter.format(this.hesapSonucu.total_price)
                          }}₺
                        </span>
                      </div>
                    </div>
                  </div>
                  <button class="btn btn-primary" @click="addNew">
                    Kayıt Düzenle
                  </button>
                  <span class="text-muted text-end pt-4">
                    <strong>Mevcut Cüzdan Bakiyesi:&nbsp;&nbsp;</strong>
                    {{ this.formatter.format(this.genelBakiye) }}₺
                  </span>
                </div>
              </div>
            </div>
          </div>
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
import { mask } from "vue-the-mask";
import CurrencyInput from "@/tools/CurrencyInput";
import VueBase64FileUpload from "vue-base64-file-upload";
import Pricing from "./Pricing.vue";
import vSelect from "vue3-select";
import "vue3-select/dist/vue3-select.css";

export default {
  directives: { mask },
  components: {
    VueBase64FileUpload,
    "currency-input": CurrencyInput,
    Pricing,
    vSelect,
  },
  data() {
    return {
      token: "",

      features: [],
      beyinMarka: [],
      aracMarka: [],
      yakitTuru: [],
      vitesTipi: [],
      cihazTuru: [],
      uygulamaSekli: [],
      odemeYonetimi: [],
      loading: true,
      validation: "",
      errorMessage: {},
      params: new FormData(),
      dosyaValidation: "",

      params: {},
      genelBakiye: 0,
      payId: 0,

      beyin_modeli_text: "",
      name_basic: "",
      surname: "",
      km: "",
      hp: "",
      kullanici_mail: "",
      silindir_hacmi: "",
      phone: "",
      plaka: "",
      model_yili: "",
      description: "",
      ozellikler: [],
      files: "",
      fileProp: "",
      arac_dosyalar: null,

      baseUrl: process.env.VUE_APP_BASE_UPLOADS,
      dosyaGosterim: null,

      master: "",
      iframe: false,
      merchant_oid: "",

      beyin_marka_id: "",
      arac_marka_modeli_id: "",
      yakıt_türü_id: "",
      vites_tip_id: "",
      cihaz_türü_id: "",
      uygulama_sekli_id: "",
      odeme_yontemi_id: 2,

      hesapSonucu: {
        total_price: 0,
        original_total: 0,
        discount_amount: 0,
      },

      seciliOzellikler: [],
      ozelliklerJSON: {},

      bayi_id: this.$store.getters.getUserData.user.id,
      formatter: new Intl.NumberFormat("tr-TR", {
        //style: 'currency',
        currency: "TRY",
        minimumFractionDigits: 2,
      }),
    };
  },
  methods: {
    async getEditData() {
      this.loading = true;
      await axios
        .post(
          this.$store.getters.getToken +
            "/tables/kayitlar/" +
            this.$route.params.id +
            "/edit",
          {
            params: JSON.stringify({
              column_set_id:
                this.$store.getters.getUserData.auths.tables["kayitlar"]
                  ?.edits[0],
            }),
          }
        )
        .then((res) => {
          const data = res.data.data?.record;
          if (data) {
            this.mapEditDataToFields(data);
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    async mapEditDataToFields(data) {
      for (const key in data) {
        const value = data[key];

        if (key == "ozellikler_ids") {
          this.seciliOzellikler = value.map((v) => v.source);
        } else if (key == 'ozellikler_json') {
          try {
            this.ozelliklerJSON = JSON.parse(value);
          } catch (e) {
            console.error("Özellikler JSON parse edilemedi:", e);
            this.ozelliklerJSON = {};
          }
        } else if (key == "master") {
          if (value == false) this.master = 0;
          else if (value == true) this.master = 1;
        } else if (Array.isArray(value)) {
          this[key] = value.map((v) => v.source)[0];
        } else if (key === "arac_dosyalar" && typeof value === "string") {
          try {
            const parsed = JSON.parse(value);
            this[key] = value;
            this.dosyaGosterim = parsed.map(
              (file) => file.destination_path + file.file_name
            );
          } catch (e) {
            console.error("Dosya verisi parse edilemedi:", e);
            this[key] = [];
          }
        } else {
          this[key] = value;
        }
      }
      await this.hesapla();
    },
    getFeatures() {
      this.loading = true;
      this.params = {
        page: 1,
        limit: 1000,
        column_array_id:
          this.$store.getters.getUserData.auths.tables["ozellikler"]?.lists[0],
        column_array_id_query:
          this.$store.getters.getUserData.auths.tables["ozellikler"]
            ?.queries[0],
        sorts: {
          sira: true,
        },
        filters: {},
        editMode: false,
        liveDataMode: false,
        columnNames: [],
        filterColumnNames: [],
      };
      axios
        .post(this.$store.getters.getToken + "/tables/ozellikler", {
          params: JSON.stringify(this.params),
        })
        .then((response) => {
          this.features = response.data.data.records;
        })
        .catch((error) => {
          console.log(error);
          if (error.response.data.data.message === 'fail.token') {
            this.$store.dispatch("logout");
          }
        })
        .finally(() => {
          this.loading = false;
        });
    },
    async hesapla() {
      const ozelliklerIds = this.seciliOzellikler.map((item) => item);
      console.log(ozelliklerIds);

      try {
        const { data } = await axios.post(
          `${this.$store.getters.getToken}/calculatePrice`,
          {
            ozellikler_ids: ozelliklerIds,
          }
        );

        this.hesapSonucu = {
          total_price: data.total_price,
          original_total: data.original_total,
          discount_amount: data.discount_amount,
        };
      } catch (error) {
        console.error(error);
      }
    },
    getBeyinMarkasi() {
      axios
        .get(
          this.$store.getters.getToken +
            "/tables/kayitlar/getSelectColumnData/beyin_marka_id?search=***&page=1&limit=1500"
        )
        .then((response) => {
          this.beyinMarka = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getAracMarkasi() {
      axios
        .get(
          this.$store.getters.getToken +
            "/tables/kayitlar/getSelectColumnData/arac_marka_modeli_id?search=***&page=1&limit=1500"
        )
        .then((response) => {
          this.aracMarka = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getYakitTuru() {
      axios
        .get(
          this.$store.getters.getToken +
            "/tables/kayitlar/getSelectColumnData/yak%C4%B1t_t%C3%BCr%C3%BC_id?search=***&page=1&limit=1500"
        )
        .then((response) => {
          this.yakitTuru = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getVitesTipi() {
      axios
        .get(
          this.$store.getters.getToken +
            "/tables/kayitlar/getSelectColumnData/vites_tip_id?search=***&page=1&limit=1500"
        )
        .then((response) => {
          this.vitesTipi = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getCihazTuru() {
      axios
        .get(
          this.$store.getters.getToken +
            "/tables/kayitlar/getSelectColumnData/cihaz_t%C3%BCr%C3%BC_id?search=***&page=1&limit=1500"
        )
        .then((response) => {
          this.cihazTuru = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getUygulamaSekli() {
      axios
        .get(
          this.$store.getters.getToken +
            "/tables/kayitlar/getSelectColumnData/uygulama_sekli_id?search=***&page=1&limit=1500"
        )
        .then((response) => {
          this.uygulamaSekli = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getOdemeYontemi() {
      axios
        .get(
          this.$store.getters.getToken +
            "/tables/kayitlar/getSelectColumnData/odeme_yontemi_id?search=***&page=1&limit=1500"
        )
        .then((response) => {
          this.odemeYontemi = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    payment() {
      this.payId = 9;
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
            this.merchant_oid = res.data.merchant_oid;
            this.$store.commit("setMerchantData", this.merchant_oid);
            console.log("Ecu merc", this.merchant_oid);
            this.addNewPlus();
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
    addNew() {
      let fileInput = document.getElementById("file");
      let filePath = fileInput.value;
      let allowedExtensions =
        /(\.cod|\.slave|\.slv|\.bin|\.mpc|\.unq|\.dec|\.mmf|\.erp|\.zip|\.rar|\.slx|\.txt|\.g3fax)$/i;
      if (this.seciliOzellikler.length === 0) {
        toastr.error("Lütfen özellik seçiniz.", "Hata!");
        this.errorMessage["ozellikler"] = "Lütfen özellik seçiniz.";
        this.scrollTop();
      } else if (this.master === "") {
        this.errorMessage["master"] = "Master ya da Slave seçiniz.";
      }
      //   else if (!allowedExtensions.exec(filePath) || this.dosyaGosterim) {
      //     this.errorMessage["dosyaWarn"] =
      //       "Dosya boş geçilemez ve geçersiz bir dosya tipi seçilemez.";
      //     fileInput.value = "";
      //     return false;
      //   }
       else {
        this.loading = true;
        const ozelliklerIds = this.seciliOzellikler.map((item) => item);

        let paramet = new FormData();
        paramet.append("plaka", this.plaka);
        paramet.append("beyin_marka_id", this.beyin_marka_id);
        paramet.append("beyin_modeli_text", this.beyin_modeli_text);
        paramet.append("arac_marka_modeli_id", this.arac_marka_modeli_id);
        paramet.append("vites_tip_id", this.vites_tip_id);
        paramet.append("yakıt_türü_id", this.yakıt_türü_id);
        paramet.append("model_yili", this.model_yili);
        paramet.append("name_basic", this.name_basic);
        paramet.append("surname", this.surname);
        paramet.append("phone", this.phone);
        paramet.append("kullanici_mail", this.kullanici_mail);
        paramet.append("km", this.km);
        paramet.append("hp", this.hp);
        paramet.append("silindir_hacmi", this.silindir_hacmi);
        paramet.append("uygulama_sekli_id", this.uygulama_sekli_id);
        paramet.append("cihaz_türü_id", this.cihaz_türü_id);
        paramet.append("odeme_yontemi_id", this.odeme_yontemi_id); // ? kalkabilir TODO
        paramet.append("islem_fiyat", this.hesapSonucu.total_price);
        paramet.append("description", this.description);
        paramet.append("ozellikler_ids", JSON.stringify(ozelliklerIds));
        paramet.append("bayi_id", this.bayi_id);
        paramet.append("master", this.master);
        paramet.append("id", this.$route.params.id);
        paramet.append(
          "column_set_id",
          this.$store.getters.getUserData.auths.tables["kayitlar"]?.edits[0]
        );

        console.log(this.arac_dosyalar);
        if (!this.dosyaGosterim) {
          // paramet.append("arac_dosyalar_old", this.arac_dosyalar)
          let files = $("#file")[0].files;
          for (let i = 0; i < files.length; i++) {
            paramet.append("arac_dosyalar[]", files[i]);
          }
        } else {
          paramet.append("arac_dosyalar_old", this.arac_dosyalar);
        }

        axios
          .post(
            this.$store.getters.getToken +
              "/tables/kayitlar/" +
              this.$route.params.id +
              "/update",
            paramet
          )
          .then((res) => {
            console.log(res);
            if (res.data.code == 400) {
              toastr.error(
                "Hatalı işlem yaptınız. Tekrar deneyin.",
                "Hatalı Kayıt!"
              );
              this.scrollTop();
            } else if (res.data.data.message == "error") {
              toastr.error("Lütfen zorunlu alanları doldurunuz.", "Hata!");
              this.errorMessage = res.data.data.errors;
            } else {
              toastr.success("Kayıt güncellendi.", "Başarılı!");
              for (const k of Object.keys(this.params)) {
                this.errorMessage[k] = "";
                this.params[k] = null;
              }
              this.errorMessage = {};
              this.loading = false;
              this.$router.push("/kayitlar");
            }
          })
          .catch((error) => {
            toastr.error(error.response.data.data.message, "Hata!");
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },
    fileProps() {
      this.fileProp = $("#file")[0].files;
      this.dosyaGosterim = null;
    },
    scrollTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
    getBakiye() {
      axios
        .get(this.$store.getters.getToken + "/bakiye")
        .then((response) => {
          this.genelBakiye = response.data.data.message || 0;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getEditData();
    this.getFeatures();
    this.getBakiye();
    this.getBeyinMarkasi();
    this.getAracMarkasi();
    this.getYakitTuru();
    this.getVitesTipi();
    this.getCihazTuru();
    this.getUygulamaSekli();
    this.getOdemeYontemi();
  },
  watch: {},
};
</script>
