<script>
  let { href, text } = $props();
</script>

<a {href} class="button primary">
  {text}
</a>

<style>
  .button.primary {
    background-color: var(--primary-color);
    color: var(--neutral-50);
    border: 1px solid var(--primary-color);

    &:hover {
      /* scale: 0.95; */
      background-color: var(--neutral-50);
      color: var(--primary-color);
    }
  }
</style>
