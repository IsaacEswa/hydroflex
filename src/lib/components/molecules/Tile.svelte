<script>
  let { subtitle, heading, text, link } = $props();
</script>

<article class="tile">
  <span class="subtitle">{subtitle}</span>
  <h3>{heading}</h3>
  <p>{text}</p>
  <a href={link}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"
      ><!--!Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
        d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"
      /></svg
    ></a
  >
</article>

<style>
  .tile {
    background-color: var(--primary-color-light);
    border-radius: var(--border-radius);
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: var(--space-medium);
    text-align: center;
    position: relative;
    gap: var(--space-inner);

    p {
      text-wrap: balance;
    }

    svg {
      position: absolute;
      top: var(--space-inner);
      right: var(--space-inner);
      width: 30px;
      transform: rotate(-45deg);
      transition: 0.3s;

      &:hover {
        scale: 0.9;
      }
    }
  }
</style>
