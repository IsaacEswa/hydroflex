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
    <Tile
      subtitle="01/06"
      heading="Dak- en dakdetailafdichtingen"
      text="Naadloze en duurzame bescherming van daken en dakdetails."
      link="/diensten/#dak-en-dakdetailafdichtingen"
    />

    <Tile
      subtitle="02/06"
      heading="Balkon- en galerijafdichtingen"
      text="Waterdichte, slijtvaste en veilige buitenruimten."
      link="/diensten/#balkon-en-galerijafdichtingen"
    />

    <Tile
      subtitle="03/06"
      heading="Binnen- en buitentrappen"
      text="Slijtvaste en veilige trapafwerkingen voor intensief gebruik."
      link="/diensten/#binnen-en-buitentrappen"
    />

    <Tile
      subtitle="04/06"
      heading="Infrastructurele afdichtingen"
      text="Duurzame afdichtings- en antislipoplossingen voor infrastructurele toepassingen."
      link="/diensten/#infrastructurele-afdichtingen"
    />

    <Tile
      subtitle="05/06"
      heading="Parkeergelegenheden"
      text="Waterdichte en slijtvaste bescherming van parkeergarages en parkeerdekken."
      link="/diensten/#parkeergelegenheden"
    />

    <Tile
      subtitle="06/06"
      heading="Boot- en scheepsafdichtingen"
      text="Specialistische afdichtingsoplossingen voor maritieme toepassingen."
      link="/diensten/#boot-en-scheepsafdichtingen"
    />
  </div>
</section>
