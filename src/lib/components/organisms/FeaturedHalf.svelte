<script>
  import PrimaryButton from "../atoms/PrimaryButton.svelte";
  import SecondaryButton from "../atoms/SecondaryButton.svelte";
</script>

<section class="featured-half">
  <div class="content-side">
    <span class="subtitle">Hydroflex Specialistische Afdichtingen B.V</span>
    <h1>Specialist in vloeibare afdichtingen</h1>
    <p>
      <b> Duurzame afdichtingsoplossingen met vloeibare kunststoffen.</b> <br />
      Hydroflex beschermt bouwkundige en infrastructurele constructies met hoogwaardige
      afdichtings- en coatingsystemen van Triflex.
    </p>
    <PrimaryButton href="/diensten" text="Bekijk onze diensten" />
    <SecondaryButton href="/contact" text="Contact opnemen" />
  </div>
  <!-- <div class="image-side"></div> -->
</section>

<style>
  .featured-half {
    .content-side {
      display: flex;
      flex-direction: column;
      gap: var(--space-inner);
    }
  }
</style>
