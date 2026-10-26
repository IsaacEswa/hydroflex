<script>
  import PrimaryButton from "../atoms/PrimaryButton.svelte";
  import SecondaryButton from "../atoms/SecondaryButton.svelte";

  let {
    subtitle,
    heading,
    text,
    primaryHref,
    primaryText,
    secondaryHref,
    secondaryText,
    reverse = false,
  } = $props();
</script>

<section class="featured-half" class:reverse>
  <div class="content-side">
    <span class="subtitle">{subtitle}</span>
    <h2>{heading}</h2>
    <p>{@html text}</p>

    {#if primaryHref && primaryText}
      <PrimaryButton href={primaryHref} text={primaryText} />
    {/if}

    {#if secondaryHref && secondaryText}
      <SecondaryButton href={secondaryHref} text={secondaryText} />
    {/if}
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
