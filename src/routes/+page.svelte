<script>
  import FeaturedHalf from "#lib/components/organisms/FeaturedHalf.svelte";
  import Header from "#lib/components/organisms/Header.svelte";
  import Tile from "#lib/components/molecules/Tile.svelte";
</script>

<Header />
<FeaturedHalf />

<section>
  <h2>Onze services</h2>
  <div class="tiles-wrapper">
    <Tile />
  </div>
</section>
