<template>
  <div id="kt_content_container" class="container-xxl">
    <!-- Hoş geldiniz mesajı -->
    <div class="card mb-6">
      <div class="card-body p-lg-17 text-center">
        <h2 class="fw-bold mb-3 display-6">Hoşgeldiniz</h2>
        <p class="text-muted fs-5">
          Ecusave paneline giriş yaptınız. Buradan kayıt oluşturabilir, yönetebilir veya raporlarınızı inceleyebilirsiniz.
        </p>
      </div>
    </div>

    <div class="row">
      <div class="col-12 mb-4">
        <div class="card shadow-sm border-0 hoverable" @click="$router.push('/kayit-olustur')" style="cursor: pointer;">
          <div class="card-body d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between p-4">
            <div>
              <h4 class="fw-bold mb-1">Kayıt Oluştur</h4>
              <p class="text-muted mb-0">Yeni beyin kaydı eklemek için buraya tıklayın.</p>
            </div>
            <button class="btn btn-primary mt-3 mt-md-0">Git</button>
          </div>
        </div>
      </div>

      <div class="col-12 mb-4">
        <div class="card shadow-sm border-0 hoverable" @click="$router.push('/profile')" style="cursor: pointer;">
          <div class="card-body d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between p-4">
            <div>
              <h4 class="fw-bold mb-1">Raporlar</h4>
              <p class="text-muted mb-0">Kayıt istatistiklerini görüntüleyin.</p>
            </div>
            <button class="btn btn-primary mt-3 mt-md-0">Git</button>
          </div>
        </div>
      </div>

      <div class="col-12 mb-4">
        <div class="card shadow-sm border-0 hoverable" @click="$router.push('/destek')" style="cursor: pointer;">
          <div class="card-body d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between p-4">
            <div>
              <h4 class="fw-bold mb-1">Destek Talebi</h4>
              <p class="text-muted mb-0">
                Yardıma mı ihtiyacınız var? Destek talebi oluşturun.
              </p>
            </div>
            <button class="btn btn-primary mt-3 mt-md-0">Git</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
