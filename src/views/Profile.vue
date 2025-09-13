<template>
  <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
    <div id="kt_content_container" class="container-xxl">
      <div class="card mb-5 mb-xxl-8">
        <div class="card-body pt-9 pb-0">
          <div class="d-flex flex-wrap flex-sm-nowrap">
            <div class="me-7 mb-4">
              <div
                class="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative"
              >
                <div class="symbol symbol-35px">
                  <span
                    class="symbol-label bg-primary text-inverse-primary fw-bolder display-2"
                  >
                    {{ this.userData?.user?.name_basic.charAt(0) }}
                    {{ this.userData?.user?.surname.charAt(0) }}
                  </span>
                </div>
                <div
                  class="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px"
                ></div>
              </div>
            </div>

            <div class="flex-grow-1">
              <div
                class="d-flex justify-content-between align-items-start flex-wrap mb-2"
              >
                <div class="d-flex flex-column">
                  <div class="d-flex align-items-center mb-2">
                    <div
                      class="text-gray-900 text-hover-primary fs-2 fw-bolder me-1"
                    >
                      {{ this.userData?.user?.name_basic }}
                      {{ this.userData?.user?.surname }}
                    </div>
                    <div>
                      <span class="svg-icon svg-icon-1 svg-icon-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M10.0813 3.7242C10.8849 2.16438 13.1151 2.16438 13.9187 3.7242V3.7242C14.4016 4.66147 15.4909 5.1127 16.4951 4.79139V4.79139C18.1663 4.25668 19.7433 5.83365 19.2086 7.50485V7.50485C18.8873 8.50905 19.3385 9.59842 20.2758 10.0813V10.0813C21.8356 10.8849 21.8356 13.1151 20.2758 13.9187V13.9187C19.3385 14.4016 18.8873 15.491 19.2086 16.4951V16.4951C19.7433 18.1663 18.1663 19.7433 16.4951 19.2086V19.2086C15.491 18.8873 14.4016 19.3385 13.9187 20.2758V20.2758C13.1151 21.8356 10.8849 21.8356 10.0813 20.2758V20.2758C9.59842 19.3385 8.50905 18.8873 7.50485 19.2086V19.2086C5.83365 19.7433 4.25668 18.1663 4.79139 16.4951V16.4951C5.1127 15.491 4.66147 14.4016 3.7242 13.9187V13.9187C2.16438 13.1151 2.16438 10.8849 3.7242 10.0813V10.0813C4.66147 9.59842 5.1127 8.50905 4.79139 7.50485V7.50485C4.25668 5.83365 5.83365 4.25668 7.50485 4.79139V4.79139C8.50905 5.1127 9.59842 4.66147 10.0813 3.7242V3.7242Z"
                            fill="#00A3FF"
                          ></path>
                          <path
                            class="permanent"
                            d="M14.8563 9.1903C15.0606 8.94984 15.3771 8.9385 15.6175 9.14289C15.858 9.34728 15.8229 9.66433 15.6185 9.9048L11.863 14.6558C11.6554 14.9001 11.2876 14.9258 11.048 14.7128L8.47656 12.4271C8.24068 12.2174 8.21944 11.8563 8.42911 11.6204C8.63877 11.3845 8.99996 11.3633 9.23583 11.5729L11.3706 13.4705L14.8563 9.1903Z"
                            fill="white"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>

                  <div class="d-flex flex-wrap fw-bold fs-6 mb-4 pe-2">
                    <a
                      :href="'tel:' + this.userData?.user?.phone"
                      class="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2"
                      title="Numarayı Ara"
                    >
                      <span class="svg-icon svg-icon-4 me-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            opacity="0.3"
                            d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 7C10.3 7 9 8.3 9 10C9 11.7 10.3 13 12 13C13.7 13 15 11.7 15 10C15 8.3 13.7 7 12 7Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M12 22C14.6 22 17 21 18.7 19.4C17.9 16.9 15.2 15 12 15C8.8 15 6.09999 16.9 5.29999 19.4C6.99999 21 9.4 22 12 22Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      {{ this.userData?.user?.phone }}
                    </a>
                    <a
                      class="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2"
                      title="Bayi Adı"
                    >
                      <span class="svg-icon svg-icon-4 me-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            opacity="0.3"
                            d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      {{ this.userData?.user?.bayi_adi }}
                    </a>
                    <a
                      :href="'mailto:' + this.userData?.user?.email"
                      class="d-flex align-items-center text-gray-400 text-hover-primary mb-2"
                      title="Email Gönder"
                    >
                      <span class="svg-icon svg-icon-4 me-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            opacity="0.3"
                            d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M21 5H2.99999C2.69999 5 2.49999 5.10005 2.29999 5.30005L11.2 13.3C11.7 13.7 12.4 13.7 12.8 13.3L21.7 5.30005C21.5 5.10005 21.3 5 21 5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      {{ this.userData?.user?.email }}
                    </a>
                  </div>
                </div>
              </div>

              <div class="d-flex flex-wrap flex-stack">
                <div class="d-flex flex-column flex-grow-1 pe-8">
                  <div class="d-flex flex-wrap">
                    <div
                      class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3"
                    >
                      <div
                        class="d-flex align-items-center justify-content-center"
                      >
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

                        <div
                          class="fs-2 fw-bolder counted"
                          data-kt-countup="true"
                          data-kt-countup-value="80"
                        >
                          {{ this.veriler2 }}
                        </div>
                      </div>

                      <div class="fw-bold fs-6 text-gray-400">
                        Tamamlanan Kayıtlar
                      </div>
                    </div>

                    <div
                      class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3"
                    >
                      <div
                        class="d-flex align-items-center justify-content-center"
                      >
                        <span class="svg-icon svg-icon-warning svg-icon-2x">
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

                        <div
                          class="fs-2 fw-bolder counted"
                          data-kt-countup="true"
                          data-kt-countup-value="80"
                        >
                          {{ this.veriler }}
                        </div>
                      </div>

                      <div class="fw-bold fs-6 text-gray-400">
                        Bekleyen Kayıtlar
                      </div>
                    </div>

                    <div
                      class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3"
                    >
                      <div
                        class="d-flex align-items-center justify-content-center"
                      >
                        <span class="svg-icon svg-icon-2x svg-icon-danger me-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <rect
                              opacity="0.5"
                              x="11"
                              y="18"
                              width="13"
                              height="2"
                              rx="1"
                              transform="rotate(-90 11 18)"
                              fill="currentColor"
                            ></rect>
                            <path
                              d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>

                        <div
                          class="fs-2 fw-bolder counted"
                          data-kt-countup="true"
                          data-kt-countup-value="0"
                          data-kt-countup-prefix="₺"
                        >
                          ₺{{ this.formatter.format(bakiye_22) }}
                        </div>
                      </div>

                      <div class="fw-bold fs-6 text-gray-400">
                        Son İşlem Tutarı
                      </div>
                    </div>

                    <div
                      class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3"
                    >
                      <div
                        class="d-flex align-items-center justify-content-center"
                      >
                        <span class="svg-icon svg-icon-primary svg-icon-2x">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              opacity="0.3"
                              d="M3.20001 5.91897L16.9 3.01895C17.4 2.91895 18 3.219 18.1 3.819L19.2 9.01895L3.20001 5.91897Z"
                              fill="currentColor"
                            />
                            <path
                              opacity="0.3"
                              d="M13 13.9189C13 12.2189 14.3 10.9189 16 10.9189H21C21.6 10.9189 22 11.3189 22 11.9189V15.9189C22 16.5189 21.6 16.9189 21 16.9189H16C14.3 16.9189 13 15.6189 13 13.9189ZM16 12.4189C15.2 12.4189 14.5 13.1189 14.5 13.9189C14.5 14.7189 15.2 15.4189 16 15.4189C16.8 15.4189 17.5 14.7189 17.5 13.9189C17.5 13.1189 16.8 12.4189 16 12.4189Z"
                              fill="currentColor"
                            />
                            <path
                              d="M13 13.9189C13 12.2189 14.3 10.9189 16 10.9189H21V7.91895C21 6.81895 20.1 5.91895 19 5.91895H3C2.4 5.91895 2 6.31895 2 6.91895V20.9189C2 21.5189 2.4 21.9189 3 21.9189H19C20.1 21.9189 21 21.0189 21 19.9189V16.9189H16C14.3 16.9189 13 15.6189 13 13.9189Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>

                        <div
                          class="fs-2 fw-bolder counted"
                          data-kt-countup="true"
                          data-kt-countup-value="0"
                          data-kt-countup-prefix="₺"
                        >
                          ₺{{ this.formatter.format(bakiye1) }}
                        </div>
                      </div>

                      <div class="fw-bold fs-6 text-gray-400">
                        Güncel Bakiye
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ul
            class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder"
          >
            <li class="nav-item mt-2">
              <a
                class="nav-link text-active-primary ms-0 me-10 py-5 crspoint"
                :class="this.menuEvent === 1 ? 'active' : ''"
                @click="this.menuEvent = 1"
              >
                Aktivite
              </a>
            </li>

            <li class="nav-item mt-2">
              <a
                class="nav-link text-active-primary ms-0 me-10 py-5 crspoint"
                :class="this.menuEvent === 2 ? 'active' : ''"
                @click="this.menuEvent = 2"
              >
                Bekleyen Kayıtlar
              </a>
            </li>

            <li class="nav-item mt-2">
              <a
                class="nav-link text-active-primary ms-0 me-10 py-5 crspoint"
                :class="this.menuEvent === 3 ? 'active' : ''"
                @click="this.menuEvent = 3"
              >
                Hesap Hareketleri
              </a>
            </li>

            <li class="nav-item mt-2">
              <a
                class="nav-link text-active-primary ms-0 me-10 py-5 crspoint"
                :class="this.menuEvent === 4 ? 'active' : ''"
                @click="this.menuEvent = 4"
              >
                Düzenle
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div v-if="this.menuEvent === 1" class="row g-5 g-xxl-8">
        <List :tableName="'kayitlar'" :filters="filters" />
      </div>

      <div v-if="this.menuEvent === 2">
        <div class="col-xl-12">
          <div class="card">
            <div class="card-header border-0">
              <h3 class="card-title fw-bolder text-dark">Hesap Hareketleri</h3>
              <div class="card-toolbar"></div>
            </div>

            <div class="card-body pt-0">
              <div v-for="datas in userInfo" :key="datas.id">
                <div
                  v-if="
                    datas.kullanici_hareket_tip_id == 'Dosya Dönüştürme Bedeli'
                  "
                  class="d-flex align-items-center bg-light-danger rounded p-5 mb-7"
                  style="background-color: #ffd9ce"
                >
                  <span class="svg-icon svg-icon-danger me-5">
                    <span class="svg-icon svg-icon-danger svg-icon-2hx">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          opacity="0.5"
                          d="M12.5657 9.63427L16.75 5.44995C17.1642 5.03574 17.8358 5.03574 18.25 5.44995C18.6642 5.86416 18.6642 6.53574 18.25 6.94995L12.7071 12.4928C12.3166 12.8834 11.6834 12.8834 11.2929 12.4928L5.75 6.94995C5.33579 6.53574 5.33579 5.86416 5.75 5.44995C6.16421 5.03574 6.83579 5.03574 7.25 5.44995L11.4343 9.63427C11.7467 9.94669 12.2533 9.94668 12.5657 9.63427Z"
                          fill="currentColor"
                        />
                        <path
                          d="M12.5657 15.6343L16.75 11.45C17.1642 11.0357 17.8358 11.0357 18.25 11.45C18.6642 11.8642 18.6642 12.5357 18.25 12.95L12.7071 18.4928C12.3166 18.8834 11.6834 18.8834 11.2929 18.4928L5.75 12.95C5.33579 12.5357 5.33579 11.8642 5.75 11.45C6.16421 11.0357 6.83579 11.0357 7.25 11.45L11.4343 15.6343C11.7467 15.9467 12.2533 15.9467 12.5657 15.6343Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </span>

                  <div class="flex-grow-1 me-2">
                    <a
                      href="#"
                      class="fw-bolder text-gray-800 text-hover-primary fs-6"
                    >
                      {{ datas.kullanici_hareket_tip_id }}
                    </a>
                    <span class="text-muted fw-bold d-block">
                      İşlem Sonrası Kalan Bakiye:
                      <span class="text-primary">
                        {{ this.formatter.format(datas.islem_sonrasi_kalan) }}₺
                      </span>
                    </span>
                  </div>

                  <span class="fw-bolder text-primary py-1">
                    -{{ this.formatter.format(datas.islem_fiyat) }}₺
                  </span>
                </div>
                <div
                  v-else-if="datas.kullanici_hareket_tip_id == 'Bakiye Yükleme'"
                  class="d-flex align-items-center bg-light-success rounded p-5 mb-7"
                  style="background-color: #c5ffe1"
                >
                  <span class="svg-icon svg-icon-warning me-5">
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
                          d="M11.4343 14.3657L7.25 18.55C6.83579 18.9643 6.16421 18.9643 5.75 18.55C5.33579 18.1358 5.33579 17.4643 5.75 17.05L11.2929 11.5072C11.6834 11.1166 12.3166 11.1166 12.7071 11.5072L18.25 17.05C18.6642 17.4643 18.6642 18.1358 18.25 18.55C17.8358 18.9643 17.1642 18.9643 16.75 18.55L12.5657 14.3657C12.2533 14.0533 11.7467 14.0533 11.4343 14.3657Z"
                          fill="currentColor"
                        />
                        <path
                          d="M11.4343 8.36573L7.25 12.55C6.83579 12.9643 6.16421 12.9643 5.75 12.55C5.33579 12.1358 5.33579 11.4643 5.75 11.05L11.2929 5.50716C11.6834 5.11663 12.3166 5.11663 12.7071 5.50715L18.25 11.05C18.6642 11.4643 18.6642 12.1358 18.25 12.55C17.8358 12.9643 17.1642 12.9643 16.75 12.55L12.5657 8.36573C12.2533 8.05331 11.7467 8.05332 11.4343 8.36573Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </span>

                  <div class="flex-grow-1 me-2">
                    <a
                      href="#"
                      class="fw-bolder text-gray-800 text-hover-primary fs-6"
                    >
                      {{ datas.kullanici_hareket_tip_id }}
                    </a>
                    <span class="text-muted fw-bold d-block">
                      İslem Sonrası Kalan Bakiye:
                      <span class="text-primary">
                        {{ this.formatter.format(datas.islem_sonrasi_kalan) }}₺
                      </span>
                    </span>
                  </div>

                  <span class="fw-bolder text-primary py-1">
                    +{{ this.formatter.format(datas.islem_fiyat) }}₺
                  </span>
                  <span class="fw-bolder text-primary py-1 fs-2x">
                    &nbsp;&nbsp;
                  </span>
                  <div v-if="datas['pdf']">
                    <div v-for="dd in JSON.parse(datas['pdf'])" :key="dd">
                      <a
                        :href="
                          this.baseUrl +
                          dd['destination_path'] +
                          dd['file_name']
                        "
                        download
                        target="_blank"
                        class="fw-bolder py-1"
                        title="İndir"
                      >
                        <i class="las la-download fs-2x text-primary"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  v-else-if="
                    datas.kullanici_hareket_tip_id ==
                    'Dosya Dönüştürme Bedeli İadesi (Silme &Düzenleme)'
                  "
                  class="d-flex align-items-center bg-light-warning rounded p-5 mb-7"
                  style="background-color: #ffe788"
                >
                  <span class="svg-icon svg-icon-warning me-5">
                    <span class="svg-icon svg-icon-warning svg-icon-2hx">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <rect
                          x="4.36396"
                          y="11.364"
                          width="16"
                          height="2"
                          rx="1"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </span>

                  <div class="flex-grow-1 me-2">
                    <a
                      href="#"
                      class="fw-bolder text-gray-800 text-hover-primary fs-6"
                    >
                      {{ datas.kullanici_hareket_tip_id }}
                    </a>
                    <span class="text-muted fw-bold d-block">
                      İşlem Sonrası Kalan Bakiye:
                      <span class="text-primary">
                        {{ this.formatter.format(datas.islem_sonrasi_kalan) }}₺
                      </span>
                    </span>
                  </div>

                  <span class="fw-bolder text-primary py-1">
                    {{ this.formatter.format(datas.islem_fiyat) }}₺
                  </span>
                </div>
              </div>
            </div>

            <div class="d-flex flex-row justify-content-around">
              <ul class="pagination">
                <li
                  class="page-item previous"
                  @click="prev"
                  :class="page - 1 < 1 ? 'd-none' : ''"
                >
                  <a class="page-link"><i class="previous"></i></a>
                </li>
                <li
                  class="page-item"
                  v-for="pg in tableData?.pages"
                  :key="pg"
                  @click="pages(pg)"
                  :class="pg == page ? 'active' : ''"
                >
                  <a class="page-link">{{ pg }}</a>
                </li>
                <li
                  class="page-item next"
                  @click="next"
                  :class="page + 1 > tableData?.pages ? 'd-none' : ''"
                >
                  <a class="page-link"><i class="next"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="this.menuEvent === 3" class="card">
        <div class="card-header card-header-stretch">
          <div class="card-title d-flex align-items-center">
            <span class="svg-icon svg-icon-1 svg-icon-primary me-3 lh-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  opacity="0.3"
                  d="M21 22H3C2.4 22 2 21.6 2 21V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5V21C22 21.6 21.6 22 21 22Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M6 6C5.4 6 5 5.6 5 5V3C5 2.4 5.4 2 6 2C6.6 2 7 2.4 7 3V5C7 5.6 6.6 6 6 6ZM11 5V3C11 2.4 10.6 2 10 2C9.4 2 9 2.4 9 3V5C9 5.6 9.4 6 10 6C10.6 6 11 5.6 11 5ZM15 5V3C15 2.4 14.6 2 14 2C13.4 2 13 2.4 13 3V5C13 5.6 13.4 6 14 6C14.6 6 15 5.6 15 5ZM19 5V3C19 2.4 18.6 2 18 2C17.4 2 17 2.4 17 3V5C17 5.6 17.4 6 18 6C18.6 6 19 5.6 19 5Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M8.8 13.1C9.2 13.1 9.5 13 9.7 12.8C9.9 12.6 10.1 12.3 10.1 11.9C10.1 11.6 10 11.3 9.8 11.1C9.6 10.9 9.3 10.8 9 10.8C8.8 10.8 8.59999 10.8 8.39999 10.9C8.19999 11 8.1 11.1 8 11.2C7.9 11.3 7.8 11.4 7.7 11.6C7.6 11.8 7.5 11.9 7.5 12.1C7.5 12.2 7.4 12.2 7.3 12.3C7.2 12.4 7.09999 12.4 6.89999 12.4C6.69999 12.4 6.6 12.3 6.5 12.2C6.4 12.1 6.3 11.9 6.3 11.7C6.3 11.5 6.4 11.3 6.5 11.1C6.6 10.9 6.8 10.7 7 10.5C7.2 10.3 7.49999 10.1 7.89999 10C8.29999 9.90003 8.60001 9.80003 9.10001 9.80003C9.50001 9.80003 9.80001 9.90003 10.1 10C10.4 10.1 10.7 10.3 10.9 10.4C11.1 10.5 11.3 10.8 11.4 11.1C11.5 11.4 11.6 11.6 11.6 11.9C11.6 12.3 11.5 12.6 11.3 12.9C11.1 13.2 10.9 13.5 10.6 13.7C10.9 13.9 11.2 14.1 11.4 14.3C11.6 14.5 11.8 14.7 11.9 15C12 15.3 12.1 15.5 12.1 15.8C12.1 16.2 12 16.5 11.9 16.8C11.8 17.1 11.5 17.4 11.3 17.7C11.1 18 10.7 18.2 10.3 18.3C9.9 18.4 9.5 18.5 9 18.5C8.5 18.5 8.1 18.4 7.7 18.2C7.3 18 7 17.8 6.8 17.6C6.6 17.4 6.4 17.1 6.3 16.8C6.2 16.5 6.10001 16.3 6.10001 16.1C6.10001 15.9 6.2 15.7 6.3 15.6C6.4 15.5 6.6 15.4 6.8 15.4C6.9 15.4 7.00001 15.4 7.10001 15.5C7.20001 15.6 7.3 15.6 7.3 15.7C7.5 16.2 7.7 16.6 8 16.9C8.3 17.2 8.6 17.3 9 17.3C9.2 17.3 9.5 17.2 9.7 17.1C9.9 17 10.1 16.8 10.3 16.6C10.5 16.4 10.5 16.1 10.5 15.8C10.5 15.3 10.4 15 10.1 14.7C9.80001 14.4 9.50001 14.3 9.10001 14.3C9.00001 14.3 8.9 14.3 8.7 14.3C8.5 14.3 8.39999 14.3 8.39999 14.3C8.19999 14.3 7.99999 14.2 7.89999 14.1C7.79999 14 7.7 13.8 7.7 13.7C7.7 13.5 7.79999 13.4 7.89999 13.2C7.99999 13 8.2 13 8.5 13H8.8V13.1ZM15.3 17.5V12.2C14.3 13 13.6 13.3 13.3 13.3C13.1 13.3 13 13.2 12.9 13.1C12.8 13 12.7 12.8 12.7 12.6C12.7 12.4 12.8 12.3 12.9 12.2C13 12.1 13.2 12 13.6 11.8C14.1 11.6 14.5 11.3 14.7 11.1C14.9 10.9 15.2 10.6 15.5 10.3C15.8 10 15.9 9.80003 15.9 9.70003C15.9 9.60003 16.1 9.60004 16.3 9.60004C16.5 9.60004 16.7 9.70003 16.8 9.80003C16.9 9.90003 17 10.2 17 10.5V17.2C17 18 16.7 18.4 16.2 18.4C16 18.4 15.8 18.3 15.6 18.2C15.4 18.1 15.3 17.8 15.3 17.5Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>

            <h3 class="fw-bolder m-0 text-gray-800">
              {{ getFormattedDate() }}
            </h3>
            <span
              class="d-inline-block position-absolute h-3px bottom-0 end-0 start-0 bg-primary translate rounded"
            ></span>
          </div>

          <div class="card-toolbar m-0">
            <ul
              class="nav nav-tabs nav-line-tabs nav-stretch fs-6 border-0 fw-bolder"
              role="tablist"
            >
              <li class="nav-item" role="presentation">
                <a
                  id="kt_activity_today_tab"
                  class="nav-link justify-content-center text-active-gray-800 active"
                  data-bs-toggle="tab"
                  role="tab"
                  href="#kt_activity_today"
                  @click="getTableData(filterAct.filterDay)"
                >
                  Günlük
                </a>
              </li>
              <li class="nav-item" role="presentation">
                <a
                  id="kt_activity_week_tab"
                  class="nav-link justify-content-center text-active-gray-800"
                  data-bs-toggle="tab"
                  role="tab"
                  href="#kt_activity_week"
                  @click="getTableData(filterAct.filterWeek)"
                >
                  Haftalık
                </a>
              </li>
              <li class="nav-item" role="presentation">
                <a
                  id="kt_activity_month_tab"
                  class="nav-link justify-content-center text-active-gray-800"
                  data-bs-toggle="tab"
                  role="tab"
                  href="#kt_activity_month"
                  @click="getTableData(filterAct.filterMonth)"
                >
                  Aylık
                </a>
              </li>
              <li class="nav-item" role="presentation">
                <a
                  id="kt_activity_year_tab"
                  class="nav-link justify-content-center text-active-gray-800 text-hover-gray-800"
                  data-bs-toggle="tab"
                  role="tab"
                  href="#kt_activity_year"
                  @click="getTableData(filterAct.filterYear)"
                >
                  Yıllık
                </a>
              </li>
            </ul>
          </div>
        </div>

        <section v-if="loading" class="w-100">
          <span class="loader-19"></span>
        </section>

        <div v-else class="card-body">
          <div class="tab-content">
            <div
              v-if="tableData.length < 1"
              id="kt_activity_today"
              class="card-body p-0 tab-pane fade show active"
              role="tabpanel"
              aria-labelledby="kt_activity_today_tab"
            >
              Kaydedilmiş bir veri bulunamadı.
            </div>
            <div
              v-else
              id="kt_activity_today"
              class="card-body p-0 tab-pane fade show active"
              role="tabpanel"
              aria-labelledby="kt_activity_today_tab"
            >
              <div class="timeline">
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
                      <span class="svg-icon svg-icon-muted svg-icon-2hx">
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
                    </div>
                  </div>

                  <div class="timeline-content mb-10 mt-n1">
                    <div class="pe-3 mb-5">
                      <div class="fs-5 fw-bold mb-2"></div>

                      <div class="d-flex align-items-center mt-1 fs-6">
                        <div class="text-muted me-2 fs-7">
                          {{ datas.kayit_zaman }}
                        </div>
                      </div>
                    </div>

                    <div class="overflow-auto pb-5">
                      <div
                        class="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5"
                      >
                        <a
                          class="fs-5 text-dark text-hover-primary fw-bold w-375px min-w-200px"
                        >
                          {{ datas.arac_marka_modeli_id }}
                        </a>

                        <div class="min-w-175px pe-2">
                          <span class="badge badge-light text-primary fs-1x">
                            {{ this.formatter.format(datas?.islem_fiyat) }}₺
                            {{ datas?.odeme_yontemi_id }}
                          </span>
                        </div>

                        <div
                          class="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px pe-2"
                        >
                          <div class="symbol symbol-25px">
                            <div v-for="i in 20" :key="i">
                              {{
                                JSON.parse(datas["ozellikler_ids"])?.[i]
                                  ?.display
                              }}
                            </div>
                          </div>
                        </div>

                        <div
                          class="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px pe-2"
                        ></div>

                        <a
                          class="text-dark fw-bolder text-hover-primary mb-1 fs-6 min-w-125px pe-2"
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

                        <div class="min-w-125px pe-2">
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
            </div>

            <div
              v-if="tableData.length < 1"
              id="kt_activity_week"
              class="card-body p-0 tab-pane fade show"
              role="tabpanel"
              aria-labelledby="kt_activity_week_tab"
            >
              Kaydedilmiş bir veri bulunamadı.
            </div>
            <div
              v-else
              id="kt_activity_week"
              class="card-body p-0 tab-pane fade show"
              role="tabpanel"
              aria-labelledby="kt_activity_week_tab"
            >
              <div class="timeline">
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
                      <span class="svg-icon svg-icon-muted svg-icon-2hx">
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
                    </div>
                  </div>

                  <div class="timeline-content mb-10 mt-n1">
                    <div class="pe-3 mb-5">
                      <div class="fs-5 fw-bold mb-2"></div>

                      <div class="d-flex align-items-center mt-1 fs-6">
                        <div class="text-muted me-2 fs-7">
                          {{ datas.kayit_zaman }}
                        </div>
                      </div>
                    </div>

                    <div class="overflow-auto pb-5">
                      <div
                        class="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5"
                      >
                        <a
                          class="fs-5 text-dark text-hover-primary fw-bold w-375px min-w-200px"
                        >
                          {{ datas.arac_marka_modeli_id }}
                        </a>

                        <div class="min-w-175px pe-2">
                          <span class="badge badge-light text-primary fs-1x">
                            {{ datas.islem_fiyat }}₺
                            {{ datas.odeme_yontemi_id }}
                          </span>
                        </div>

                        <div
                          class="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px pe-2"
                        >
                          <div class="symbol symbol-25px">
                            <div v-for="i in 20" :key="i">
                              {{
                                JSON.parse(datas["ozellikler_ids"])?.[i]
                                  ?.display
                              }}
                            </div>
                          </div>
                        </div>

                        <div
                          class="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px pe-2"
                        ></div>

                        <a
                          class="text-dark fw-bolder text-hover-primary mb-1 fs-6 min-w-125px pe-2"
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

                        <div class="min-w-125px pe-2">
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
            </div>

            <div
              v-if="tableData.length < 1"
              id="kt_activity_month"
              class="card-body p-0 tab-pane fade show"
              role="tabpanel"
              aria-labelledby="kt_activity_month_tab"
            >
              Kaydedilmiş bir veri bulunamadı.
            </div>
            <div
              v-else
              id="kt_activity_month"
              class="card-body p-0 tab-pane fade show"
              role="tabpanel"
              aria-labelledby="kt_activity_month_tab"
            >
              <div class="timeline">
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
                      <span class="svg-icon svg-icon-muted svg-icon-2hx">
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
                    </div>
                  </div>

                  <div class="timeline-content mb-10 mt-n1">
                    <div class="pe-3 mb-5">
                      <div class="fs-5 fw-bold mb-2"></div>

                      <div class="d-flex align-items-center mt-1 fs-6">
                        <div class="text-muted me-2 fs-7">
                          {{ datas.kayit_zaman }}
                        </div>
                      </div>
                    </div>

                    <div class="overflow-auto pb-5">
                      <div
                        class="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5"
                      >
                        <a
                          class="fs-5 text-dark text-hover-primary fw-bold w-375px min-w-200px"
                        >
                          {{ datas.arac_marka_modeli_id }}
                        </a>

                        <div class="min-w-175px pe-2">
                          <span class="badge badge-light text-primary fs-1x">
                            {{ datas.islem_fiyat }}₺
                            {{ datas.odeme_yontemi_id }}
                          </span>
                        </div>

                        <div
                          class="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px pe-2"
                        >
                          <div class="symbol symbol-25px">
                            <div v-for="i in 20" :key="i">
                              {{
                                JSON.parse(datas["ozellikler_ids"])?.[i]
                                  ?.display
                              }}
                            </div>
                          </div>
                        </div>

                        <div
                          class="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px pe-2"
                        ></div>

                        <a
                          class="text-dark fw-bolder text-hover-primary mb-1 fs-6 min-w-125px pe-2"
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

                        <div class="min-w-125px pe-2">
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
            </div>

            <div
              v-if="tableData.length < 1"
              id="kt_activity_year"
              class="card-body p-0 tab-pane fade show"
              role="tabpanel"
              aria-labelledby="kt_activity_year_tab"
            >
              Kaydedilmiş bir veri bulunamadı.
            </div>
            <div
              v-else
              id="kt_activity_year"
              class="card-body p-0 tab-pane fade show"
              role="tabpanel"
              aria-labelledby="kt_activity_year_tab"
            >
              <div class="timeline">
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
                      <span class="svg-icon svg-icon-muted svg-icon-2hx">
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
                    </div>
                  </div>

                  <div class="timeline-content mb-10 mt-n1">
                    <div class="pe-3 mb-5">
                      <div class="fs-5 fw-bold mb-2"></div>
                      <div class="d-flex align-items-center mt-1 fs-6">
                        <div class="text-muted me-2 fs-7">
                          {{ datas.kayit_zaman }}
                        </div>
                      </div>
                    </div>
                    <div class="overflow-auto pb-5">
                      <div
                        class="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5"
                      >
                        <a
                          class="fs-5 text-dark text-hover-primary fw-bold w-375px min-w-200px"
                        >
                          {{ datas.arac_marka_modeli_id }}
                        </a>
                        <div class="min-w-175px pe-2">
                          <span class="badge badge-light text-primary fs-1x">
                            {{ datas.islem_fiyat }}₺
                            {{ datas.odeme_yontemi_id }}
                          </span>
                        </div>
                        <div
                          class="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px pe-2"
                        >
                          <div class="symbol symbol-25px">
                            <div v-for="i in 20" :key="i">
                              {{
                                JSON.parse(datas["ozellikler_ids"])?.[i]
                                  ?.display
                              }}
                            </div>
                          </div>
                        </div>
                        <div
                          class="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px pe-2"
                        ></div>
                        <a
                          class="text-dark fw-bolder text-hover-primary mb-1 fs-6 min-w-125px pe-2"
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
                        <div class="min-w-125px pe-2">
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
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="this.menuEvent === 4" class="card mb-5 mb-xxl-8">
        <div class="card-body p-10">
          <h4>Profil Bilgileri</h4>
          <div class="row mb-xl-8">
            <div class="col-xl-3 col-md-4 col-sm-6 p-2">
              <label class="form-label">
                Ad
                <span class="text-danger">*</span>
              </label>
              <input
                type="text"
                v-model="this.profile.name_basic"
                class="form-control form-control-lg"
                autocomplete="off"
              />
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6 p-2">
              <label class="form-label">
                Soyad
                <span class="text-danger">*</span>
              </label>
              <input
                type="text"
                v-model="this.profile.surname"
                class="form-control form-control-lg"
                autocomplete="off"
              />
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6 p-2">
              <label class="form-label">
                Telefon
                <span class="text-danger">*</span>
              </label>
              <input
                v-mask="'+90 (###) ### ## ##'"
                v-model="this.profile.phone"
                class="form-control form-control-lg"
                autocomplete="off"
              />
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6 p-2">
              <label class="form-label">
                Firma Adı
                <span class="text-danger">*</span>
              </label>
              <input
                type="text"
                v-model="this.profile.bayi_adi"
                class="form-control form-control-lg"
                autocomplete="off"
              />
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6 p-2">
              <label class="form-label">
                Şehir
                <span class="text-danger">*</span>
              </label>
              <select
                class="form-control form-control-lg"
                v-model="this.profile.sehir_id"
              >
                <option disabled value="">Seçiniz</option>
                <option
                  v-for="sehir in sehirlers"
                  :key="sehir.id"
                  :value="sehir.id"
                >
                  {{ sehir.text }}
                </option>
              </select>
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6 p-2">
              <label class="form-label">
                Email
                <span class="text-danger">*</span>
              </label>
              <input
                type="email"
                v-model="this.profile.email"
                class="form-control form-control-lg"
                autocomplete="off"
              />
            </div>
          </div>
          <div class="d-flex justify-content-end">
            <button type="button" class="btn btn-primary" @click="setProfile">
              Kaydet
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import List from "@/components/List.vue";
import gsap from "gsap";
import { mask } from "vue-the-mask";
export default {
  directives: { mask },
  components: { List },
  data() {
    return {
      loading: false,
      userData: this.$store.getters.getUserData,
      userId: "",
      userInfo: {},
      userInfo2: {},
      menuEvent: 1,
      tableData: [],
      profile: {
        bayi_adi: "",
        email: "",
        name_basic: "",
        surname: "",
        phone: "",
        sehir_id: "",
      },
      sehirlers: [],
      forName: [],
      bakiye: 0,
      bakiye1: 0,
      bakiye_2: 0,
      bakiye_22: 0,
      baseUrl: process.env.VUE_APP_BASE_UPLOADS,
      veriler: "...",
      veriler2: "...",
      page: 1,
      limit: 10,
      formatter: new Intl.NumberFormat("tr-TR", {
        //style: 'currency',
        currency: "TRY",
        minimumFractionDigits: 2,
      }),
      filters: {
        kayit_durum_id: {
          type: 1,
          guiType: "multiselect",
          filter: ["1"],
          description: "",
          columnName: "kayit_durum_id",
          filterColumnNames: ["kayit_durum_id"],
        },
      },
      filters2: {
        kayit_durum_id: {
          type: 1,
          guiType: "multiselect",
          filter: ["3"],
          description: "",
          columnName: "kayit_durum_id",
          filterColumnNames: ["kayit_durum_id"],
        },
      },
      filterAct: {
        filterDay: {
          kayit_zaman: {
            type: 3,
            guiType: "datetime",
            filter:
              new Date().getFullYear() +
              "-" +
              (new Date().getMonth() + 1) +
              "-" +
              new Date().getDate() +
              " 00:00:00",
            columnName: "kayit_zaman",
            json: "",
            filter2: "",
            description:
              "Kayıt Zamanı: " +
              new Date().getDate() +
              "/" +
              (new Date().getMonth() + 1) +
              "/" +
              new Date().getFullYear() +
              " 00:00:00" +
              " 'dan sonra",
          },
        },
        filterWeek: {
          kayit_zaman: {
            type: 3,
            guiType: "datetime",
            filter:
              new Date().getFullYear() +
              "-" +
              (new Date().getMonth() + 1) +
              "-" +
              (new Date().getDate() - 7) +
              " 00:00:00",
            columnName: "kayit_zaman",
            json: "",
            filter2: "",
            description:
              "Kayıt Zamanı: " +
              (new Date().getDate() - 7) +
              "/" +
              (new Date().getMonth() + 1) +
              "/" +
              new Date().getFullYear() +
              " 00:00:00" +
              " 'dan sonra",
          },
        },
        filterMonth: {
          kayit_zaman: {
            type: 3,
            guiType: "datetime",
            filter:
              new Date().getFullYear() +
              "-" +
              new Date().getMonth() +
              "-" +
              new Date().getDate() +
              " 00:00:00",
            columnName: "kayit_zaman",
            json: "",
            filter2: "",
            description:
              "Kayıt Zamanı: " +
              new Date().getDate() +
              "/" +
              new Date().getMonth() +
              "/" +
              new Date().getFullYear() +
              " 00:00:00" +
              " 'dan sonra",
          },
        },
        filterYear: {
          kayit_zaman: {
            type: 3,
            guiType: "datetime",
            filter:
              new Date().getFullYear() -
              1 +
              "-" +
              (new Date().getMonth() + 1) +
              "-" +
              new Date().getDate() +
              " 00:00:00",
            columnName: "kayit_zaman",
            json: "",
            filter2: "",
            description:
              "Kayıt Zamanı: " +
              new Date().getDate() +
              "/" +
              (new Date().getMonth() + 1) +
              "/" +
              (new Date().getFullYear() - 1) +
              " 00:00:00" +
              " 'dan sonra",
          },
        },
      },
    };
  },
  methods: {
    prev() {
      this.page--;
      this.getUserData();
    }, //Bir önceki sayfaya gönder
    next() {
      this.page++;
      this.getUserData();
    }, //Bir sonraki sayfaya gönder
    pages(pg) {
      this.page = pg;
      this.getUserData();
    }, //Belirli sayfaya gönder
    getBakiye() {
      axios
        .get(this.$store.getters.getToken + "/bakiye")
        .then((response) => {
          this.bakiye = response.data.data.message || 0;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getProfile() {
      this.loadingNew = true;
      axios
        .post(
          this.$store.getters.getToken +
            "/tables/users/" +
            this.$store.getters.getUserData.user.id +
            "/edit",
          {
            params: JSON.stringify({
              column_set_id:
                this.$store.getters.getUserData.auths.tables["users"]?.edits[0],
            }),
          }
        )
        .then((res) => {
          this.profile = res.data.data.record;
          console.log(this.profile)
          this.profile.sehir_id = res.data.data.record?.sehir_id?.[0]?.source;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loadingNew = false;
        });
    },
    setProfile() {
      this.loading = true;
      axios
        .post(
          this.$store.getters.getToken +
            "/tables/users/" +
            this.$store.getters.getUserData.user.id +
            "/update",
          {
            bayi_adi: this.profile.bayi_adi,
            email: this.profile.email,
            name_basic: this.profile.name_basic,
            phone: this.profile.phone,
            sehir_id: this.profile.sehir_id,
            surname: this.profile.surname,
            column_set_id:
              this.$store.getters.getUserData.auths.tables["users"]?.edits[0],
            // password: this.profile.password,
          }
        )
        .then((res) => {
          if (res.data.data.message == "success") {
            toastr.success(
              "Profil başarılı bir şekilde güncellendi. Çıkış yapılıyor...",
              "Başarılı!"
            );
            setTimeout(() => {
              this.$store.dispatch("logout")
            }, 1000)
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    sehirler() {
      this.loading = true;
      axios
        .post(
          this.$store.getters.getToken + "/tables/users/getSelectColumnData/sehir_id?search=***&page=1&limit=150"
        )
        .then((response) => {
          this.sehirlers = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    getUserData() {
      this.loading = true;
      let params = {
        page: this.page,
        limit: this.limit,
        column_array_id:
          this.$store.getters.getUserData.auths.tables["kullanici_hareketleri"]
            ?.lists[0],
        column_array_id_query:
          this.$store.getters.getUserData.auths.tables["kullanici_hareketleri"]
            ?.queries[0],
        sorts: {},
        filters: {},
        editMode: false,
        liveDataMode: false,
        columnNames: [],
        filterColumnNames: [],
      };
      axios
        .post(this.$store.getters.getToken + "/tables/kullanici_hareketleri", {
          params: JSON.stringify(params),
        })
        .then((response) => {
          this.userInfo = response.data.data.records;
          this.forName = response.data.data.columns;
          // this.bakiye = this.userInfo[0].islem_sonrasi_kalan;
          // this.bakiye_2 = this.userInfo[0].islem_fiyat
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    getUserData2() {
      this.loading = true;
      let params = {
        page: 1,
        limit: 15000,
        column_array_id:
          this.$store.getters.getUserData.auths.tables["kullanici_hareketleri"]
            ?.lists[0],
        column_array_id_query:
          this.$store.getters.getUserData.auths.tables["kullanici_hareketleri"]
            ?.queries[0],
        sorts: {},
        filters: {
          kullanici_hareket_tip_id: {
            type: 1,
            guiType: "multiselect",
            filter: ["2"],
            description: "",
            columnName: "kullanici_hareket_tip_id",
            filterColumnNames: ["kullanici_hareket_tip_id"],
          },
        },
        editMode: false,
        liveDataMode: false,
        columnNames: [],
        filterColumnNames: [],
      };
      axios
        .post(this.$store.getters.getToken + "/tables/kullanici_hareketleri", {
          params: JSON.stringify(params),
        })
        .then((response) => {
          this.userInfo2 = response.data.data.records;
          this.bakiye_2 = this.userInfo2[0].islem_fiyat;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    getTableData(event) {
      this.loading = true;
      let params = {
        page: 1,
        limit: 1000000,
        column_array_id:
          this.$store.getters.getUserData.auths.tables["kayitlar"]?.lists[0],
        column_array_id_query:
          this.$store.getters.getUserData.auths.tables["kayitlar"]?.queries[0],
        sorts: { kayit_zaman: false },
        filters: event ? event : this.filterAct.filterDay,
        editMode: false,
        liveDataMode: true,
        columnNames: [],
        filterColumnNames: [],
      };
      axios
        .post(this.$store.getters.getToken + "/tables/kayitlar", {
          params: JSON.stringify(params),
        })
        .then((res) => {
          if (res.data.code == 200) {
            this.dataCount = res.data.data.all_records_count;
            this.tableData = res.data.data.records;
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
    getVeriler() {
      this.loading = true;
      let params = {
        page: 1,
        limit: 15000,
        column_array_id:
          this.$store.getters.getUserData.auths.tables["kayitlar"]?.lists[0],
        column_array_id_query:
          this.$store.getters.getUserData.auths.tables["kayitlar"]?.queries[0],
        sorts: {},
        filters: this.filters,
        editMode: false,
        liveDataMode: true,
        columnNames: [],
        filterColumnNames: [],
      };
      axios
        .post(this.$store.getters.getToken + "/tables/kayitlar", {
          params: JSON.stringify(params),
        })
        .then((res) => {
          if (res.data.code == 200) {
            this.veriler = res.data.data.all_records_count;
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
    getVeriler2() {
      this.loading = true;
      let params = {
        page: 1,
        limit: 15000,
        column_array_id:
          this.$store.getters.getUserData.auths.tables["kayitlar"]?.lists[0],
        column_array_id_query:
          this.$store.getters.getUserData.auths.tables["kayitlar"]?.queries[0],
        sorts: {},
        filters: this.filters2,
        editMode: false,
        liveDataMode: true,
        columnNames: [],
        filterColumnNames: [],
      };
      axios
        .post(this.$store.getters.getToken + "/tables/kayitlar", {
          params: JSON.stringify(params),
        })
        .then((res) => {
          if (res.data.code == 200) {
            this.veriler2 = res.data.data.all_records_count;
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
    menuClick(e) {
      this.menuEvent = e.target.text;
    },
    getFormattedDate() {
  const date = new Date()

  return new Intl.DateTimeFormat("tr-TR", {
    weekday: "long",     // Pazartesi
    day: "numeric",      // 30
    month: "long",       // Haziran
    year: "numeric",     // 2025
  }).format(date)
}
  },
  mounted() {
    this.getTableData();
    this.getUserData();
    this.getUserData2();
    this.getVeriler();
    this.getVeriler2();
    this.getProfile();
    this.getBakiye();
    this.sehirler();
  },
  watch: {
    bakiye(n) {
      gsap.to(this, { duration: 0.5, bakiye1: Number(n) || 0 });
    },
    bakiye_2(n) {
      gsap.to(this, { duration: 0.5, bakiye_22: Number(n) || 0 });
    },
  },
};
</script>

<style>
.bgasd {
  background-image: url("../assets/media/stock/900x600/19.jpg");
}

.crspoint {
  cursor: pointer;
}
</style>
