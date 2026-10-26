<script>
  import FeaturedHalf from "#lib/components/organisms/FeaturedHalf.svelte";
  import Header from "#lib/components/organisms/Header.svelte";
  import Tile from "#lib/components/molecules/Tile.svelte";
  import Footer from "#lib/components/organisms/Footer.svelte";
</script>

<Header />

<main>
  <FeaturedHalf
    subtitle="Hydroflex Specialistische Afdichtingen B.V"
    heading="Specialist in vloeibare afdichtingen"
    text="
      <b> Duurzame afdichtingsoplossingen met vloeibare kunststoffen.</b> <br />
      Hydroflex beschermt bouwkundige en infrastructurele constructies met hoogwaardige
      afdichtings- en coatingsystemen van Triflex.
    "
    primaryHref="/diensten"
    primaryText="Bekijk onze diensten"
    secondaryHref="/contact"
    secondaryText="Contact opnemen"
  />
  <section class="services">
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

  <FeaturedHalf
    subtitle="Hydroflex Specialistische Afdichtingen B.V"
    heading="Uw project, onze expertise"
    text="
        Of het nu gaat om nieuwbouw, renovatie of specialistisch herstelwerk: Hydroflex denkt met u mee over een passende afdichtingsoplossing. <br><br>
        Met meer dan vijf jaar ervaring, erkende en gecertificeerde Triflex-verwerkers en hoogwaardige afdichtingssystemen staan wij voor vakmanschap, kwaliteit en een zorgvuldige uitvoering.
        <br><br>Neem contact met ons op voor deskundig advies of een vrijblijvende offerte.
      "
    primaryHref="/contact"
    primaryText="Contact opnemen"
    reverse
  />
</main>

<Footer />

<style>
  .services {
    h2 {
      text-align: center;
      margin-bottom: var(--space-inner);
    }

    .tiles-wrapper {
      display: grid;
      grid-template-columns: minmax(0, 1fr);
      grid-template-rows: auto;
      gap: var(--space-inner);

      @media (min-width: 1024px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }
  }
</style>
