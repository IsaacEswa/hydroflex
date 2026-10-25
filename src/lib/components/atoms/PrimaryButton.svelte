<script>
  let { href, text } = $props();
</script>

<a {href} class="primary-button">
  {text}
</a>

<style>
  .primary-button {
    background-color: var(--primary-color);
    color: var(--neutral-50);
    border-radius: 50px;
    padding: 8px 12px;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    transition: 0.3s;
    font-weight: 600;

    &:hover {
      scale: 0.95;
    }
  }
</style>
