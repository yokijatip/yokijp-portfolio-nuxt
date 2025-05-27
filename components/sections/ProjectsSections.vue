<template>
  <!-- Container -->
  <div class="min-h-screen py-4 md:py-10 b-primary flex max-w-full">
    <!-- Container Content -->
    <div class="w-full mx-auto flex flex-col md:flex-col gap-10">
      <!-- Title Start -->
      <TitleSection> Projects </TitleSection>
      <!-- Title End -->

      <div class="grid grid-cols-3 grid-rows-3 gap-12">
        <!-- Feliya Attendance -->
        <div class="col-span-3 flex flex-col gap-6">
          <!-- Image -->
          <div>
            <img
              src="~/assets/images/feliya_attendance_app.png"
              alt=""
              class="rounded-2xl"
            />
          </div>

          <!-- Title & Description -->
          <div class="flex flex-col gap-3">
            <!-- Title & Button View projects -->
            <div class="flex justify-between">
              <h2 class="text-2xl font-medium">Feliya Attendance App</h2>
              <button>View Projects</button>
            </div>

            <!-- Description & Tech Stack -->
            <div>
              <!-- Tech Stack -->
              <div></div>

              <p>
                Mengembangkan sistem manajemen kehadiran karyawan yang
                komprehensif yang dirancang khusus untuk PT. Feliya Laju Teknik,
                sebuah perusahaan jasa AC. Aplikasi seluler ini menyederhanakan
                manajemen tenaga kerja dengan menyediakan pelacakan kehadiran
                secara real-time, check-in/out berbasis GPS, dan kemampuan
                pelaporan otomatis.
              </p>
            </div>
          </div>
        </div>
        <div class="row-start-2 br">Feliya Company Profile</div>
        <div class="row-start-2 br">Shelby Florist Bandung</div>
        <div class="row-span-2 row-start-2 br">Klik Sewa</div>
        <div class="col-span-2 br">Wedding Invitation Luxury</div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
