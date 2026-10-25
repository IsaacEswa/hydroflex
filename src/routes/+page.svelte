<script>
  import FeaturedHalf from "#lib/components/organisms/FeaturedHalf.svelte";
  import Header from "#lib/components/organisms/Header.svelte";
  import Tile from "#lib/components/molecules/Tile.svelte";
</script>

<Header />
<FeaturedHalf
  subtitle="Hydroflex Specialistische Afdichtingen B.V"
  heading="Specialist in vloeibare afdichtingen"
  text="
      <b> Duurzame afdichtingsoplossingen met vloeibare kunststoffen.</b> <br />
      Hydroflex beschermt bouwkundige en infrastructurele constructies met hoogwaardige
      afdichtings- en coatingsystemen van Triflex.
    "
/>

<section>
  <h2>Onze services</h2>
  <div class="tiles-wrapper">
    <Tile />
  </div>
</section>
