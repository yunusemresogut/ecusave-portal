<template>
  <div id="kt_body" class="bg-body">
    <div class="d-flex flex-column flex-root" style="height: 100vh">
      <div
        class="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-cover bgi-attachment-fixed bggg"
      >
        <div
          class="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20"
        >
          <router-link to="/register" class="mb-12">
            <img
              alt="Logo"
              style="height: 80px"
              src="../assets/media/ecusavebeyaz.png"
            />
          </router-link>
          <div
            class="w-lg-600px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto"
          >
            <form
              @submit.prevent="userAdd"
              class="form w-100"
              novalidate="novalidate"
              id="kt_sign_up_form"
            >
              <div class="mb-10 text-center">
                <h1 class="text-dark mb-3">Hesap Oluştur</h1>
                <div class="text-gray-400 fw-bold fs-4">
                  Hesabınız var mı?
                  <router-link to="/login" class="link-primary fw-bolder">
                    Giriş Yap
                  </router-link>
                </div>
              </div>
              <div class="row fv-row mb-7">
                <div class="col-xl-6">
                  <label class="form-label fw-bolder text-dark fs-6">
                    Ad&nbsp;
                    <span class="text-danger fs-3">*</span>
                  </label>
                  <input
                    class="form-control form-control-lg form-control-solid"
                    ref="name"
                    v-model="name"
                    type="text"
                    placeholder=""
                    name="first-name"
                    autocomplete="off"
                  />
                  <div class="fv-plugins-message-container invalid-feedback">
                    {{ this.errorMessage["name"]?.[0] }}
                  </div>
                </div>
                <div class="col-xl-6">
                  <label class="form-label fw-bolder text-dark fs-6">
                    Soyad&nbsp;
                    <span class="text-danger fs-3">*</span>
                  </label>
                  <input
                    class="form-control form-control-lg form-control-solid"
                    v-model="surname"
                    type="text"
                    placeholder=""
                    name="last-name"
                    autocomplete="off"
                  />
                  <div class="fv-plugins-message-container invalid-feedback">
                    {{ this.errorMessage["surname"]?.[0] }}
                  </div>
                </div>
              </div>
              <div class="row fv-row mb-7">
                <div class="col-xl-12">
                  <label class="form-label fw-bolder text-dark fs-6">
                    Telefon&nbsp;
                    <span class="text-danger fs-3">*</span>
                  </label>
                  <input
                    v-mask="'+90 (###) ### ## ##'"
                    class="form-control form-control-lg form-control-solid"
                    v-model="phone"
                    placeholder=""
                    name="tel"
                    autocomplete="off"
                  />
                  <div class="fv-plugins-message-container invalid-feedback">
                    {{ this.errorMessage["phone"]?.[0] }}
                  </div>
                </div>
              </div>
              <div class="row fv-row mb-7">
                <div class="col-xl-12">
                  <label class="form-label fw-bolder text-dark fs-6">
                    Firma Adı&nbsp;
                    <span class="text-danger fs-3">*</span>
                  </label>
                  <input
                    class="form-control form-control-lg form-control-solid"
                    v-model="firma_adi"
                    type="text"
                    placeholder=""
                    name="bayi-adi"
                    autocomplete="off"
                  />
                  <div class="fv-plugins-message-container invalid-feedback">
                    {{ this.errorMessage["firma_adi"]?.[1] }}
                  </div>
                </div>
              </div>
              <div class="fv-row mb-7">
                <label class="form-label fw-bolder text-dark fs-6">
                  Şehir&nbsp;
                  <span class="text-danger fs-3">*</span>
                </label>
                <select
                  class="form-control form-control-lg form-control-solid"
                  v-model="sehir_id"
                >
                  <option disabled value="">Seçiniz</option>
                  <option
                    v-for="sehir in sehirlers"
                    :key="sehir.id"
                    :value="sehir.id"
                  >
                    {{ sehir.sehir_ad }}
                  </option>
                </select>
                <div class="fv-plugins-message-container invalid-feedback">
                  {{ this.errorMessage["sehir_id"]?.[0] }}
                </div>
              </div>
              <div class="fv-row mb-7">
                <label class="form-label fw-bolder text-dark fs-6">
                  Email&nbsp;
                  <span class="text-danger fs-3">*</span>
                </label>
                <input
                  class="form-control form-control-lg form-control-solid"
                  v-model="eposta"
                  type="email"
                  placeholder=""
                  name="email"
                  autocomplete="off"
                />
                <div class="fv-plugins-message-container invalid-feedback">
                  {{ this.errorMessage["eposta"]?.[0] }}
                </div>
              </div>
              <div class="mb-10 fv-row" data-kt-password-meter="true">
                <div class="mb-1">
                  <label class="form-label fw-bolder text-dark fs-6">
                    Şifre&nbsp;
                    <span class="text-danger fs-3">*</span>
                  </label>
                  <div class="position-relative mb-3">
                    <input
                      class="form-control form-control-lg form-control-solid"
                      v-model="password"
                      :type="eyeControl ? 'text' : 'password'"
                      placeholder=""
                      name="password"
                      autocomplete="off"
                    />
                    <span
                      class="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2"
                      data-kt-password-meter-control="visibility"
                      @click="eyeControl = !eyeControl"
                    >
                      <i
                        class="bi bi-eye-slash fs-2"
                        :class="eyeControl == true ? 'd-none' : ''"
                      ></i>
                      <i
                        class="bi bi-eye fs-2"
                        :class="eyeControl == false ? 'd-none' : ''"
                      ></i>
                    </span>
                    <div class="fv-plugins-message-container invalid-feedback">
                      {{ this.errorMessage["password"]?.[0] }}
                    </div>
                  </div>
                </div>
                <div class="text-muted">
                  Şifreniz en az 8 haneden oluşmalıdır.
                </div>
                <div class="fv-plugins-message-container invalid-feedback">
                  {{ this.errorMessage["passwordCont"]?.[0] }}
                </div>
              </div>
              <div class="fv-row mb-5">
                <label class="form-label fw-bolder text-dark fs-6">
                  Şifre Tekrar&nbsp;
                  <span class="text-danger fs-3">*</span>
                </label>
                <input
                  class="form-control form-control-lg form-control-solid"
                  v-model="password_2"
                  type="password"
                  placeholder=""
                  name="confirm-password"
                  autocomplete="off"
                />
                <div class="fv-plugins-message-container invalid-feedback">
                  {{ this.errorMessage["passwordSenk"]?.[0] }}
                </div>
              </div>
              <div
                class="fv-row mb-10 d-flex flex-row justify-content-between"
                style="flex-wrap: wrap"
              >
                <label
                  class="form-check form-check-custom form-check-solid form-check-inline"
                >
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="toc"
                    value="1"
                    @click="test($event)"
                  />
                  <span class="form-check-label fw-bold text-gray-700 fs-6">
                    Kabul Ediyorum
                  </span>
                </label>
                <div>
                  <button
                    type="button"
                    class="btn btn-active-light-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#kt_modal_scrollable_1"
                  >
                    Aydınlatma Metni ve Gizlilik Bildirimi
                  </button>
                  <div
                    class="modal fade"
                    tabindex="-1"
                    id="kt_modal_scrollable_1"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title">
                            Aydınlatma Metni ve Gizlilik Bildirimi
                          </h5>
                          <div
                            class="btn btn-icon btn-sm btn-active-light-danger ms-2"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          >
                            <span class="svg-icon svg-icon-2x">
                              <span
                                class="svg-icon svg-icon-muted svg-icon-2hx"
                              >
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM18 12C18 11.4 17.6 11 17 11H7C6.4 11 6 11.4 6 12C6 12.6 6.4 13 7 13H17C17.6 13 18 12.6 18 12Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </span>
                          </div>
                        </div>
                        <div class="modal-body">
                          <h3>Aydınlatma Metni</h3>
                          <h4>KUVARSSOFT KİŞİSEL VERİLER AYDINLATMA METNİ</h4>
                          <p>
                            İşbu Kişisel Veriler Aydınlatma Metni, 6698 sayılı
                            Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca
                            kişisel verilerinizin toplanması, işlenmesi,
                            aktarılması ve KVKK kapsamındaki haklarınıza dair
                            sizleri bilgilendirmek amacıyla hazırlanmıştır.
                          </p>
                          <p>
                            ÇALCA OSB MAH. 1. CADDE No:1 Kapı No:9 MERKEZ/
                            Kütahya / Türkiye adresinde mukim KUVARSSOFT
                            TEKNOLOJİ LTD. ŞTİ. (“Şirket” veya “KUVARSSOFT”)
                            olarak, veri sorumlusu sıfatıyla kişisel
                            verilerinizi KVKK ve ilgili mevzuata uygun olarak
                            aşağıda açıklanan kapsamda işliyoruz.
                          </p>
                          <p>
                            Daha detaylı bilgi için KUVARSSOFT Kişisel Verilerin
                            İşlenmesi ve Korunması Politikası’na bakabilirsiniz.
                          </p>
                          <p>
                            1.İşlediğimiz Kişisel Veriler İşbu Aydınlatma
                            Metni’nde belirtilen kişisel veri işleme
                            amaçlarımızı gerçekleştirebilmek amacıyla, aşağıdaki
                            kişisel verilerini işleyebilmekteyiz:
                          </p>
                          <p>
                            ● Ad, soyad, T.C. Kimlik numarası, imza, vergi
                            numarası, doğum yeri, doğum tarihi, nüfusa kayıtlı
                            olduğu yer, cinsiyet, medeni durum, kimlik
                            belgesinde veya ehliyet fotokopisinde yer alan diğer
                            bilgiler dahil kimlik bilgileriniz;
                          </p>
                          <p>
                            ● E-posta, telefon numarası, cep telefonu, sosyal
                            medya hesapları dahil iletişim bilgileriniz;
                          </p>
                          <p>
                            ● İkamet bilgisi ve adres bilgisi dahil lokasyon
                            bilgileriniz;
                          </p>
                          <p>
                            ● İş başvurusu sürecinde CV’ler, özgeçmiş bilgileri,
                            iş başvuru formu, iş mülakatlarında ilettiğiniz
                            geçmiş eğitim ve meslek bilgileri, meslek içi eğitim
                            bilgileri, kurs, sertifika ve diploma bilgileri,
                            transkript bilgileri, sahip olunan referans
                            bilgileri dahil mesleki deneyim bilgileriniz,
                            askerlik durumu bilgileriniz, dernek ve vakıf
                            üyeliği bilgileriniz;
                          </p>
                          <p>
                            ● İcra bilgileri, sözleşmeler, vekaletnameler dahil
                            hukuki işlem bilgileriniz;
                          </p>
                          <p>
                            ● Çağrı merkezi kayıtları, fatura, senet, çek
                            bilgileri, müşteri talep ve şikayet bilgileriniz
                            dahil müşteri işlem bilgileriniz;
                          </p>
                          <p>
                            ● Giriş-çıkış kayıtları, işyerinin ve sistem
                            odalarının CCTV kayıtları dahil fiziksel mekan
                            güvenliği bilgileriniz;
                          </p>
                          <p>
                            ● Fotoğraf, video, ses kaydı dahil görsel ve işitsel
                            kayıtlarınız;
                          </p>
                          <p>
                            ● Hesap numarası, IBAN, borç-alacak bilgisi, vade
                            bilgileriniz dahil finansal bilgileriniz;
                          </p>
                          <p>● Çerez kayıtları dahil pazarlama bilgileriniz;</p>
                          <p>● Aile üyeleri bilgileriniz.</p>
                          <p>
                            2. Kişisel Veri İşleme Amaçlarımız Kişisel
                            verilerinizi, aşağıdaki amaçlar ile sınırlı olarak
                            işliyoruz:
                          </p>
                          <p>
                            ● Ürün ve/veya hizmetlerimizin sunulabilmesi ve
                            ürünlerimizin satış süreçlerinin yürütülmesi,
                          </p>
                          <p>
                            ● Ürünlerimizin kullanıcılarımız ve abonelerimiz
                            tarafından kullanılabilmesi,
                          </p>
                          <p>● Üyelik işlemlerinin gerçekleştirilmesi,</p>
                          <p>
                            ● Yeni iş ortakları ve üçüncü taraf firmaları
                            belirlemek amacıyla görüşmelerin yapılması,
                          </p>
                          <p>
                            ● Ürün ve/veya hizmet alım süreçlerinin yürütülmesi,
                          </p>
                          <p>
                            ● İhtiyaçlarınız ve talepleriniz doğrultusunda ürün
                            ve hizmetlerimizin güncellenmesi, özelleştirilmesi
                            ve geliştirilmesi,
                          </p>
                          <p>
                            ● Ürün ve hizmetlerimizdeki problemlerin çözülmesi,
                            hata, sorun ve bugların tespit edilmesi, bunların
                            giderilmesi ve kullanıcılarımıza daha iyi bir
                            deneyimin sunulması,
                          </p>
                          <p>
                            ● Müşterilerimizin talebi üzerine ürün ve
                            hizmetlerimiz hakkında size gerekli eğitimlerin ve
                            bilgilendirmelerin verilebilmesi, programlarımızın
                            nasıl kullanılacağının izah edilmesi,
                          </p>
                          <p>● Müşteri ilişkileri süreçlerinin yürütülmesi,</p>
                          <p>
                            ● Çağrı merkezi ve uzaktan destek hizmetlerinin
                            sağlanması,
                          </p>
                          <p>
                            ● İnternet sitelerimizde ziyaretçilerimizin
                            tecrübesini iyileştirmek, talep ve sorunları tespit
                            etmek ve aramalarını hızlı sonuçlandırmak amacıyla
                            çerezlerin yönetilmesi. (Daha detaylı bilgi için
                            Çerez Politikamıza bakabilirsiniz)
                          </p>
                          <p>
                            ● Ticari faaliyetlerimizi yürütmeye devam etmek
                            amacıyla iletişim bilgilerinizin güncellenmesi ve bu
                            güncel bilgilerinizin ilgili kurumlarımız, topluluk
                            şirketlerimiz, yüklenicilerimiz ve/veya
                            tedarikçilerimize bildirilmesi,
                          </p>
                          <p>
                            ● İş süreçlerinizi analiz ederek ürün ve
                            hizmetlerimizin süreçlerinize uygun hale getirilmesi
                            ve önerileriniz, istekleriniz ya da raporlarımız
                            doğrultusunda iyileştirilmesi, tarafınızca yapılan
                            herhangi bir şikayetin incelenmesi ve yanıtlanması,
                          </p>
                          <p>
                            ● Yanlış ödeme yapanlara ödemenin iadesi
                            işlemlerinin yürütülmesi ve bu iadelerin KUVARSSOFT
                            tarafından görüntülenmesi,
                          </p>
                          <p>
                            ● Müşteri memnuniyetine yönelik aktivitelerin
                            yürütülmesi,
                          </p>
                          <p>● Ticari elektronik iletinin yollanması,</p>
                          <p>
                            ● KUVARSSOFT blog ve forum üyeliklerinin
                            yürütülmesi,
                          </p>
                          <p>
                            ● Müşterilerin Portal kaydının oluşturulabilmesi,
                          </p>
                          <p>● Tahsilat takibinin yapılması,</p>
                          <p>
                            ● Kullanıcılarımızın deneyimlerinin iyileştirilmesi,
                          </p>
                          <p>
                            ● Sosyal medya ve kurumsal iletişim süreçlerinin
                            planlanması ve icra edilmesi,
                          </p>
                          <p>
                            ● Pazarlama faaliyetlerinin yürütülmesi,
                            reklam/kampanya/promosyon süreçlerinin yürütülmesi,
                          </p>
                          <p>
                            ● Yeni ürün veya hizmetlerimiz, mevcut ürün veya
                            hizmetlerimizdeki değişiklikler ile kampanyalarımız
                            ve promosyonlarımız hakkında sizlerin
                            bilgilendirilmesi,
                          </p>
                          <p>
                            ● Üçüncü kişilerin KUVARSSOFT uygulamalarına davet
                            edilmesi,
                          </p>
                          <p>
                            ● Müşterilerimizin kendi müşterileri adına hesap
                            açabilmesi,
                          </p>
                          <p>
                            ● Potansiyel ve mevcut müşterilerimize e-bülten
                            gönderilmesi,
                          </p>
                          <p>
                            ● İnternet sitemiz üzerinden bilgi talep eden
                            kişilere gerekli bilgilendirmelerin yapılması,
                          </p>
                          <p>
                            ● E-fatura, e-arşiv, e-irsaliye, e-müstahsil, E-SMM
                            başvurularının alınması,
                          </p>
                          <p>● E-dönüşüm hizmeti satın alınması,</p>
                          <p>
                            ● Müşterilerimizin cari kart açabilmesi, KUVARSSOFT
                            hesabını açabilmesi ve mevcut kaydını
                            güncelleyebilmesi, e-fatura hesabı açabilmesi,
                          </p>
                          <p>
                            ● Herhangi bir problem olması durumunda müşteri
                            hesabının takibinin yapılabilmesi,
                          </p>
                          <p>
                            ● İş ortağı firmalar üzerinden belirli süreli
                            çalışan temin edilmesi,
                          </p>
                          <p>● İş ortağı memnuniyetinin sorgulanması,</p>
                          <p>
                            ● İş faaliyetlerimizin yönetilmesi, yürütülmesi ve
                            denetlenmesi, iş sürekliliğinin sağlanması
                            faaliyetlerinin yürütülmesi,
                          </p>
                          <p>● Finans ve muhasebe işlerinin yürütülmesi,</p>
                          <p>
                            ● Aylık beyannamelerin hazırlanması ve kontrolünün
                            yapılması,
                          </p>
                          <p>
                            ● Vekaletname ve imza sirküleri süreçlerinin
                            yürütülmesi,
                          </p>
                          <p>
                            ● Bina ve tesislerimizin fiziksel mekan güvenliğinin
                            sağlanması ve ziyaretçi kayıtlarının oluşturulması
                            ve takibinin sağlanması,
                          </p>
                          <p>
                            ● Yazılımlarımızın ve sistemlerimizin güvenliğinin
                            sağlanması ve bilgi güvenliği süreçlerinin
                            yürütülmesi,
                          </p>
                          <p>
                            ● İşe alınacak çalışan adayları için ücret çalışması
                            yapılması,
                          </p>
                          <p>
                            ● Çalışanlarımızın yakınları için yan haklar ve
                            menfaatler sağlanması,
                          </p>
                          <p>
                            ● Acil durumlarda çalışanların yakınlarına
                            ulaşılması,
                          </p>
                          <p>
                            ● Çalışan adaylarının iş başvurularının
                            değerlendirilmesi, mülakatların ve görüşmelerin
                            yapılması, özgeçmişlerinde referans olarak
                            gösterdikleri kişiler ile iletişime geçilmesi,
                          </p>
                          <p>
                            ● Şirketimiz tarafından ticari kredi kartlarının
                            çıkarılması,
                          </p>
                          <p>● Etkinlik ve organizasyonların düzenlenmesi,</p>
                          <p>
                            ● Yasal mevzuatlara uyum sağlanması ve hukuki
                            yükümlülüklerimizin yerine getirilmesi.
                          </p>
                          <p>
                            3. Kişisel Verileri Toplama Yöntemimiz Kişisel
                            verilerinizi, aşağıda belirtilen otomatik ve
                            otomatik olmayan kanallar üzerinden topluyoruz:
                          </p>
                          <p>● E-posta, SMS, kartvizitler,</p>
                          <p>● Telefon, Faks,</p>
                          <p>● CCTV (Kapalı Devre Kamera Kayıtları),</p>
                          <p>● Elektronik form,</p>
                          <p>● Fiziki form,</p>
                          <p>● Sosyal medya hesaplarımız,</p>
                          <p>● İnternet sitemiz,</p>
                          <p>● Uzaktan erişim sağlayan platformlar,</p>
                          <p>● Posta, kargo ya da kurye hizmetleri,</p>
                          <p>● Yüz yüze görüşmeler,</p>
                          <p>● Diğer fiziki ve elektronik ortamlar.</p>
                          <p>
                            4. İşlemeye Yönelik Hukuki Sebeplerimiz Kişisel
                            verileriniz; KVKK’nın 5. maddesinde belirtilen
                            kanunlarda açıkça öngörülmesi, Şirket ile aranızdaki
                            sözleşmenin kurulması ve ifası için gerekli olması,
                            Şirketin hukuki yükümlülüğünü yerine getirmesi için
                            zorunlu olması, Şirketin hakkını tesis etmesi,
                            savunması ve koruması için zorunlu olması, Şirketin
                            meşru menfaatini yerine getirmesi için zorunlu
                            olması ve açık rızanızın bulunması hukuki
                            sebeplerine dayalı olarak işlenmektedir. Özel
                            nitelikli kişisel verileriniz; KVKK’nın 6.
                            maddesinde belirtilen ilgili kişinin açık rızasının
                            bulunması, kanunlarda öngörülmesi, sağlığa ilişkin
                            veriler için sağlık hizmetleri ile finansmanının
                            planlanması ve yönetimi amacıyla, sır saklama
                            yükümlülüğü altında bulunan kişiler veya yetkili
                            kurum ve kuruluşlar tarafından işlenmesi hukuki
                            sebeplerine dayalı olarak işlenmektedir.
                          </p>
                          <p>
                            5. Kişisel Verilerinizin Aktarılması KVKK’nın 8. ve
                            9. maddelerinde belirtilen hukuki sebeplere dayalı
                            olarak bazı kişisel verileriniz, işin yürütülmesinin
                            sağlanması amacı ile yukarıda belirtilen amaçlar
                            dahilinde topluluk şirketlerimize, yurt içindeki ve
                            yurt dışındaki iş ortaklarımıza, tedarikçilerimize,
                            yetkili kamu kurum ve kuruluşlarına, hukuken yetkili
                            kişilere ve herkese açık aktarılabilecektir.
                          </p>
                          <p>
                            6. Kişisel Verilerinize İlişkin Haklarınız KVKK’nın
                            11. maddesi uyarınca kişisel verilerinize ilişkin
                            aşağıdaki haklara sahipsiniz:
                          </p>
                          <p>
                            ● Kişisel verilerinizin işlenip işlenmediğini
                            öğrenme,
                          </p>
                          <p>
                            ● Kişisel verileriniz işlenmişse buna ilişkin bilgi
                            talep etme,
                          </p>
                          <p>
                            ● Kişisel verilerin işlenme amacını ve bunların
                            amacına uygun kullanılıp kullanılmadığını öğrenme,
                          </p>
                          <p>
                            ● Yurt içinde veya yurt dışında kişisel
                            verilerinizin aktarıldığı üçüncü kişileri bilme,
                          </p>
                          <p>
                            ● Kişisel verilerinizin eksik veya yanlış işlenmiş
                            olması halinde bunların düzeltilmesini isteme ve bu
                            kapsamda yapılan işlemin kişisel verilerinizin
                            aktarıldığı üçüncü kişilere bildirilmesini isteme,
                          </p>
                          <p>
                            ● 6698 sayılı Kişisel Verilerin Korunması Kanunu ve
                            ilgili diğer kanun hükümlerine uygun olarak işlenmiş
                            olmasına rağmen, işlenmesini gerektiren sebeplerin
                            ortadan kalkması hâlinde kişisel verilerinizin
                            silinmesini veya yok edilmesini isteme ve bu
                            kapsamda yapılan işlemin kişisel verilerinizin
                            aktarıldığı üçüncü kişilere bildirilmesini isteme,
                          </p>
                          <p>
                            ● İşlenen verilerin münhasıran otomatik sistemler
                            vasıtasıyla analiz edilmesi suretiyle aleyhinize bir
                            sonucun ortaya çıkmasına itiraz etme,
                          </p>
                          <p>
                            ● Kişisel verilerin kanuna aykırı olarak işlenmesi
                            sebebiyle zarara uğramanız halinde bu zararın
                            giderilmesini talep etme.
                          </p>
                          <p>
                            Bu haklarınıza ilişkin taleplerinizi internet
                            sitemizdeki İletişim Formu üzerinden
                            gönderebilirsiniz. Başvurunuz ücretsiz olarak yerine
                            getirilecektir. Ancak talep edilen işlemin ayrıca
                            bir maliyet gerektirmesi halinde, Kişisel Verileri
                            Koruma Kurulu tarafından belirlenen tarifedeki
                            ücretler başvurandan talep edilecektir.
                          </p>

                          <h3>Gizlilik Bildirimi</h3>
                          <p>
                            Kişisel Verilere İlişkin Bilgilendirme İşbu Kişisel
                            Veriler Bilgilendirme Metni ile yürürlükteki yasal
                            mevzuata uygun olarak ve 6698 sayılı Kişisel
                            Verilerin Korunması Kanunu (“Kanun”) kapsamında
                            “Veri Sorumlusu” sıfatıyla ÇALCA OSB MAH. 1. CADDE
                            No:1 Kapı No:9 MERKEZ/ Kütahya / Türkiye adresinde
                            bulunan Kuvarssoft Teknoloji Limited Şirketi’’ne
                            (“Şirket”) ait ve Şirket tarafından işletilen
                            ecusave.com alan adlı internet sitesinin ve bu
                            sitenin kullanması ile bağlantılı olarak ilgili
                            hizmetlerin sunulabilmesi adına tarafınızca
                            tarafımıza sağlanan verilerin toplanması, işlenmesi
                            ve kullanım türü, derecesi ve amacı ile ilgili
                            olarak siz kullanıcılarımıza bilgilendirme yapılması
                            amaçlanmaktadır.
                          </p>
                          <p>
                            Kişisel verilerinizin, gizli bilgilerinizin
                            korunmasını ve gizli tutulmasını ciddiye almaktayız.
                            Kanun ve ilgili mevzuat hükümlerine tarafımızca,
                            çalışanlarımızca ve servis sağlayıcılarımızca
                            görevlerini yerlerine getirirlerken gizliliklerine
                            mutlaka dikkat edilmesini ve yalnızca sizlere
                            bildirdiğimiz amaçlarla kullanılmasını sağlamak
                            üzere gerekli teknik ve idari önlemleri almaktayız.
                            Kişisel verilerin işlenmesi; kişisel verilerin
                            tamamen ve kısmen otomatik olan ya da herhangi bir
                            veri kayıt sisteminin parçası olmak kaydıyla
                            otomatik olmayan yollarla elde edilmesi,
                            kaydedilmesi, depolanması, muhafaza edilmesi,
                            değiştirilmesi, yeniden düzenlenmesi, açıklanması,
                            aktarılması, devralınması, elde edilebilir hale
                            getirilmesi, sınıflandırılması ya da kullanılmasının
                            engellenmesi gibi kişilere ait veriler üzerinde
                            gerçekleştirilen her türlü işlemi ifade etmektedir.
                          </p>
                          <p>
                            İnternet sitemizin kullanılması aşamasında
                            kendinizle iletişime geçilmesi kapsamında tarafımıza
                            sağladığınız bilgileriniz, buna ek olarak internet
                            sitemizde gezinmeniz sırasında çerezler ve benzeri
                            yöntemler aracılığı tarafımızca elde edinilen
                            bilgiler; bizim tarafımızdan, mevcut ve ilerideki
                            iştiraklerimiz, bağlı şirketlerimiz,
                            hissedarlarımız, iş ortaklarımız, haleflerimiz,
                            hizmet ve faaliyetlerimiz ile yan hizmetlerimizi
                            yürütmek üzere hizmet aldığımız, işbirliği
                            yaptığımız, yurt içinde ve/veya yurtdışında faaliyet
                            gösteren program ortağı kuruluşlar ve diğer üçüncü
                            kişiler (hukuk ve vergi danışmanlarımız, bankalar,
                            bağımsız denetçiler dahil ve fakat bunlarla sınırlı
                            olmamak üzere, sizlere hizmet sunabilmemiz için
                            işbirliği yaptığımız veya yapabileceğimiz hizmet
                            tedarikçilerimiz) tarafından muhtelif mal ve
                            hizmetlerin sağlanması, sağlanan mal ve hizmetlerin
                            herhangi bir ücrete tabi olması halinde ödeme
                            alınması için gerekli işlemlerin gerçekleştirilmesi,
                            sunulan hizmetlere ilişkin sizlere yapacağımız her
                            türlü bilgilendirme, özel kampanyalardan
                            faydalanabilmenize ve sürpriz çekilişlere
                            katılabilmenize imkan sağlama, sorularınıza yanıt
                            verebilme, bilgilendirme amaçlı yapılacak elektronik
                            iletişimler için, Şirketimiz ile aranızda
                            sözleşmenin kurulması veya ifasıyla doğrudan doğruya
                            ilgili ve gerekli olması, Şirket’in yasal
                            sorumluluğunu yerine getirebilmesi için zorunlu
                            olması, kişisel veriye bağlı ilgili hakkın ileri
                            sürülebilmesi veya savunmanın tesis edilmesi
                            amaçlarıyla, belirtilenler ve halefleri nezdinde
                            kullanılma amacı ile sınırlı olarak ve bu amaç ile
                            orantılı süre ile kayda alınabilecek,
                            basılı/manyetik arşivlerde saklanabilecek, gerekli
                            görülen hallerde güncellenebilecek,
                            paylaşılabilecek, aktarılabilecek, transfer
                            edilebilecek, kullanılabilecek ve Kanun’un 5. ve 6.
                            maddelerinde belirtilen kişisel veri işleme şartları
                            ve amaçları dahilinde işlenebilecektir. Paylaşılan
                            bu bilgiler tarafınızca her zaman değiştirilebilir
                            ve güncellenebilir. Buna ek olarak Kanun dahil
                            ilgili mevzuat hükümleri dahilinde zorunlu olması
                            durumunda ya da tarafımıza iletmiş olduğunuz
                            verilerin işbu metinde belirtilen amaçlardan başka
                            amaçlar ile kullanılması gerekirse bazı uygulamalar
                            ve işlemler için ayrıca ilave izniniz de
                            gerekebilecektir. Bu durumlarda sizlerle iletişime
                            geçilecek ve sizlerin açık rızaları rica
                            edilecektir. Bu verilere ek olarak bizlere iletmiş
                            olduğunuz kişisel verileriniz hukukun gerekli
                            kıldığı durumlarda resmi kurum/kuruluşlar,
                            mahkemeler tarafından talep edilmesi halinde ilgili
                            merci ve mahkemelere iletilebilecektir.
                          </p>
                          <p>
                            Paylaştığınız tüm bilgiler, her ne sebeple olursa
                            olsun doğrudan veya dolaylı olarak üçüncü bir
                            kişinin yararına kullanılmayacak; kullanıcının açık
                            yazılı izni olmaksızın işbu metinde belirtilen
                            amaçlar dışında herhangi bir üçüncü şahısla,
                            firmayla veya kurumla paylaşılmayacak, kısmen veya
                            tamamen kopyalanmayacak ve yayınlanmayacaktır.
                            Bununla birlikte, bilgileriniz anonim hale
                            getirilerek, kullanıcı eğilimlerini ve modellerini
                            anlamak, iş ilişkilerimizi yönetmek ve geliştirmek
                            için iş ortaklarımız ve sponsorlarımız da dahil
                            olmak üzere üçüncü kişilerle paylaşılabilir.
                            İnternet sitesi üzerinde yaptığınız hareketler,
                            çerezler ve benzeri yöntemlerle izlenebilecek, kaydı
                            tutulabilecek, istatistiki veya yukarıda bahsedilen
                            amaçlarla kullanılabilecektir. Ebeveyninin veya
                            velisinin izni olmadan 18 (onsekiz) yaşından küçük
                            kişilerin kişisel verilerini göndermemeleri
                            gerekmektedir. 18 yaşın altında olmanız ancak ayırt
                            etme gücünü haiz olmanız kaydıyla, internet sitemizi
                            sadece bir ebeveyniniz veya yasal temsilcisiniz
                            eşliğinde kullanması kullanabilirsiniz, kendinize
                            ait kişisel verileri doğrudan kendiniz
                            sağlayamazsınız. Şirket’e ait internet sitelerinin,
                            durumun niteliğine göre diğer internet sitelerine
                            bağlantılar içermesi halinde bu sitelerin
                            operatörlerinin veri koruma hükümlerine uygun olup
                            olmamaları hususunda hiçbir taahhütte
                            bulunmamaktayız. Şirket, link veya benzeri başka
                            yöntemlerle bağlantı verdiği sitelerin
                            içeriklerinden hiçbir zaman sorumlu değildir.
                          </p>
                          <p>
                            Kanun’un 11. maddesi uyarınca; kişisel verinizin
                            işlenip işlenilmediğini öğrenme; kişisel verileriniz
                            işlenmişse buna ilişkin bilgi talep etme; kişisel
                            verilerinizin işlenme amacını ve bunların amacına
                            uygun kullanılıp kullanılmadığını öğrenme; yurt
                            içinde veya yurt dışında kişisel verileriniz
                            aktarıldığı üçüncü kişileri bilme; kişisel
                            verilerinizin eksik veya yanlış işlenmiş olması
                            hâlinde bunların düzeltilmesini isteme; kişisel
                            verilerinizin işlenmesini gerektiren sebeplerin
                            ortadan kalkması halinde kişisel verilerinizin
                            silinmesini veya yok edilmesini isteme; Kanun’un 7.
                            maddesi uyarınca yukarıda bahsedilen düzeltme, silme
                            veya yok etme işlemlerinin, kişisel verilerinizin
                            aktarıldığı üçüncü kişilere bildirilmesini isteme;
                            işlenen verilerinizin münhasıran otomatik sistemler
                            vasıtasıyla analiz edilmesi suretiyle aleyhinize bir
                            sonucun ortaya çıkmasına itiraz etme; ve kişisel
                            verilerinizin kanuna aykırı olarak işlenmesi
                            sebebiyle zarara uğramanız hâlinde zararınızın
                            giderilmesini talep etme haklarına sahipsiniz.
                          </p>
                          <p>
                            Kişisel veri sahipleri olarak, az önce saymış
                            olduğumuz haklarınıza ilişkin taleplerinizi, işbu
                            metinde belirtilen yöntemlerle Şirket’e iletmeniz
                            durumunda Şirketimiz talebin niteliğine göre en kısa
                            sürede ve en geç 30 (otuz) gün içinde ücretsiz
                            olarak sonuçlandıracaktır. Ancak, işlemin ayrıca bir
                            maliyeti gerektirmesi halinde Kişisel Verileri
                            Koruma Kurulunca belirlenen tarifedeki ücret
                            alınabilir.
                          </p>
                          <p>
                            Kanun’a ve sair mevzuata uygun olarak işleme
                            faaliyeti gerçekleştirilmesine rağmen işbu metinde
                            belirtilen işleme amaçlarının sona ermesi halinde
                            kişisel verileriniz ilgili mevzuata uygun olarak
                            resen veya talebiniz üzerine silinecek, yok edilecek
                            ya da anonim hale getirilecektir.
                          </p>
                          <p>
                            Kanun’un 13. maddesinin 1. fıkrası gereğince,
                            yukarıda belirtilen haklarınızı kullanmak ile ilgili
                            talebinizi, yazılı olarak veya Kişisel Verileri
                            Koruma Kurulu’nun belirlediği diğer yöntemlerle
                            Şirket’e iletebilirsiniz. Kişisel Verileri Koruma
                            Kurulu tarafından şu aşamada ilgili haklarınızın
                            kullanımına ilişkin herhangi bir yöntem
                            belirlemediği için, başvurunuzu Kanun gereğince,
                            yazılı olarak Şirket’e iletmeniz gerekmektedir.
                            Kanun’un 11. maddesinde sayılan ve işbu metin ile
                            sizlere bildirilen haklarınızı kullanmak için
                            kimliğinizi tespit edebileceğimiz gerekli bilgiler
                            ile belirtilen haklarınızdan hangisini kullanmayı
                            talep ettiğinize yönelik açıklama/açıklamalarınızı
                            içeren talebinizi; ÇALCA OSB MAH. 1. CADDE No:1 Kapı
                            No:9 MERKEZ/ Kütahya / Türkiye adresine kimliğinizi
                            tespit edici belgeler ile bizzat elden iletebilir,
                            noter kanalıyla veya Kanun’da belirtilen diğer
                            yöntemler ile gönderebilir veya ilgili formu
                            destek@ecusave.com e-posta adresimize güvenli
                            elektronik imzalı olarak iletebilirsiniz. Şirket,
                            başvurunuz üzerine talebinizi kabul eder veya
                            gerekçesini açıklayarak reddeder ve cevabını ilgili
                            kişiye yazılı olarak veya elektronik ortamda
                            bildirir. Başvuruda yer alan talebin kabul edilmesi
                            halinde Şirket tarafından gereği yerine getirilir.
                            Başvurunuzun Şirket’in hatasından kaynaklanması ve
                            sizden bir ücret tahsil edilmesi halinde alınan
                            ücret size iade edilecektir.
                          </p>
                          <p>
                            Çerezler (Cookie) İnternet sitemizde; IP adresi,
                            kullanılan tarayıcı, bilgisayarınızdaki işletim
                            sistemi, internet bağlantınız, site kullanımları
                            hakkındaki bilgiler gibi belirli verileri otomatik
                            olarak elde etmemize yardımcı olan çerezler (cookie)
                            bulunmaktadır. Söz konusu çerezler bir internet
                            sayfası sunucusu tarafından sabit sürücünüze
                            iletilen küçük metin dosyalarıdır ve sitemizde
                            bulunan çerezler, bilgisayarınız için zararlı
                            sayılabilecek virüsler göndermek için
                            kullanılmamaktadır. Çerezler genellikle
                            bilgisayarınızda saklanarak, her kullanımında sizi
                            tanımak ve kullanımınızı kolaylaştırmak için
                            sağlanmaktadır. İnternet sitemizi kullanarak
                            kullanılan çerezleri onaylamış olursunuz. Şirket,
                            söz konusu çerezler aracılığı ile verilerinizi
                            işleyebilir ve elde edilen bilgileri analiz etme
                            amacı ile bu kapsamda yurtiçinde ve yurtdışında
                            üçüncü kişilere aktarabilir. Çerezler tarafından
                            verileriniz toplanmadan internet sitemizi
                            görüntülemek istiyorsanız seçiminizi
                            cihazınızın/tarayıcınızın ayarlarından her zaman
                            değiştirebilirsiniz. Çerezlerin kullanımını
                            durdurduğunuzda internet sitemizde her türlü işlemi
                            yapamayacağınızı, belirli özelliklerinin
                            çalışmayabileceğini lütfen unutmayınız.
                          </p>
                          <p>
                            Açık Rıza Onayınız bulunmadığı takdirde kişisel
                            bilgilerinizi yüklemeyiniz. Şirket, onayınız
                            olmadığı sürece çerezler ile elde edilen veriler
                            dışında başka herhangi bir kişisel bilgilerinizi
                            almayacaktır. Sizler, internet sitemize girerek ve
                            işbu metni onaylayarak, işbu metinde belirtilen yaş
                            sınırını sağladığınızı, sağlamamakta ve fakat 18
                            yaşının altında, ayırt etme gücünü haiz iseniz ve
                            ebeveyninizin veya yasal temsilcinizin rızasını
                            aldığınızı, bu kapsamda tarafımıza sağlamış
                            olduğunuz kişisel verilerinizin Kanun’a ve işbu
                            Kişisel Veriler Bilgilendirme Metni’ne uygun bir
                            şekilde ve belirtilen amaçlarla işlenebileceğini
                            bilmekte, kabul etmekte, onay vermekte ve ayrıca
                            işbu Kişisel Veriler Bilgilendirme Metni ile Kanun
                            kapsamında yapılması gereken aydınlatma yükümlülüğü
                            yerine getirildiğini, Sözleşme’yi okuduğunuzu,
                            anladığınızı, haklarınızın ve yükümlülüklerinin
                            bilincinde olduğunuzu beyan etmektesiniz.
                          </p>
                        </div>

                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-primary"
                            data-bs-dismiss="modal"
                          >
                            Anladım
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="fv-plugins-message-container invalid-feedback">
                  {{ this.errorMessage["checkedControl"]?.[0] }}
                </div>
              </div>
              <div class="text-center">
                <button
                  type="submit"
                  id="kt_sign_up_submit"
                  class="btn btn-lg btn-primary"
                >
                  <span class="indicator-label">Kayıt Ol</span>
                  <span class="indicator-progress">
                    Lütfen bekleyiniz...
                    <span
                      class="spinner-border spinner-border-sm align-middle ms-2"
                    ></span>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mask } from "vue-the-mask";
export default {
  directives: { mask },
  data() {
    return {
      name: "",
      surname: "",
      phone: "",
      eposta: "",
      firma_adi: "",
      sehir_id: "",
      password: "",
      password_2: "",
      eyeControl: false,
      errorMessage: {},
      checkedControl: false,
      loading: false,
      sehirlers: [],
    };
  },
  methods: {
    userAdd() {
      if (this.checkedControl == false) {
        this.errorMessage["checkedControl"] = ["Lütfen şartları kabul ediniz."];
        toastr.error("Lütfen zorunlu alanları doldurunuz.", "Hata!");
        return;
      } else if (this.name == "") {
        this.errorMessage["name"] = ["Ad alanı gereklidir."];
        return;
      } else if (this.surname == "") {
        this.errorMessage["surname"] = ["Soyad alanı gereklidir."];
        return;
      } else if (this.phone == "") {
        this.errorMessage["phone"] = ["Telefon alanı gereklidir."];
        return;
      } else if (this.password != this.password_2) {
        this.errorMessage["passwordSenk"] = ["Şifreler eşleşmiyor."];
        toastr.info("Şifreler uyuşmuyor.", "Uyarı!");
        return;
      } else if (this.password.length < 8) {
        this.errorMessage["passwordCont"] = [
          "Şifreniz en az 8 haneden oluşmalıdır.",
        ];
        toastr.info("Şifre en az 8 karakterden oluşmalıdır.", "Uyarı!");
        return;
      } else {
        axios
          .post("register", {
            name: this.name,
            surname: this.surname,
            phone: this.phone,
            eposta: this.eposta,
            firma_adi: this.firma_adi,
            sehir_id: JSON.stringify(this.sehir_id),
            password: this.password,
          })
          .then((res) => {
            if (res.data.status == "error") {
              toastr.error(res.data.data.message, "Hata!");
              this.errorMessage = res.data.data.errors;
            } else {
              toastr.success("Kayıt başarılı!", "Başarılı!");
              this.errorMessage = {};
              this.$router.push("/");
            }
          })
          .catch((err) => {
            toastr.error(err.response.data.data.message, "Uyarı!");
          });
      }
    },
    test(e) {
      this.checkedControl = e.target.checked;
    },
    sehirler() {
      this.params = {
        page: 1,
        limit: 500,
        column_array_id: 80,
        column_array_id_query: 80,
        sorts: {},
        filters: {},
      };
      axios
        .post("public/tables/sehir", {
          params: JSON.stringify(this.params),
        })
        .then((response) => {
          if (response.data.code == 200) {
  this.sehirlers = response.data.data.records.sort((a, b) => {
    return a.sehir_ad.localeCompare(b.sehir_ad, 'tr');
  });
}
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.$refs.name.focus();
    this.sehirler();
  },
};
</script>

<style>
.bggg {
  background-image: url(../assets/media/misc/dark-bg-ecu.jpg);
}
</style>
