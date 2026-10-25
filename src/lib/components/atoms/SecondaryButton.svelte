<script>
  let { href, text } = $props();
</script>

<a {href} class="button secondary">
  {text}
</a>

<style>
  .button.secondary {
    background-color: var(--neutral-50);
    color: var(--primary-color);
    border: 1px solid var(--primary-color);

    &:hover {
      /* scale: 0.95; */
      background-color: var(--primary-color);
      color: var(--neutral-50);
    }
  }
</style>
