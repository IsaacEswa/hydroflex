<script>
  import PrimaryButton from "../atoms/PrimaryButton.svelte";
  import SecondaryButton from "../atoms/SecondaryButton.svelte";

  let { subtitle, heading, text } = $props();
</script>

<section class="featured-half">
  <div class="content-side">
    <span class="subtitle">{subtitle}</span>
    <h1>{heading}</h1>
    <p>{@html text}</p>
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
