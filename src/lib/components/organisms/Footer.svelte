<script>
  import Whitelogo from "../atoms/Whitelogo.svelte";
  import MainNavigation from "../molecules/MainNavigation.svelte";
</script>

<footer>
  <section class="footer-col-01">
    <Whitelogo />
  </section>

  <section class="footer-col-02">
    <h2>Navigeer</h2>
    <MainNavigation />
  </section>

  <section class="footer-col-03">
    <h2>Contact</h2>
    <a href="mailto:info@hydroflex.nl">info@hydroflex.nl</a>
  </section>

  <section class="footer-col-04">
    <ul>
      <li>Erkend Triflex verwerker</li>
      <li>+5 jaar ervaring in afdichtingen</li>
      <li>Triflex gecertificeerd</li>
      <li>10 jaar verzekerde garantie mogelijk</li>
    </ul>
  </section>
</footer>

<style>
  footer {
    background-color: var(--neutral-950);
    padding-top: var(--space-medium);
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);

    * {
      color: var(--neutral-50);
    }

    .footer-col-01 {
    }

    .footer-col-02 {
    }

    .footer-col-03 {
    }

    .footer-col-04 {
      ul {
        list-style: url("/icons/check.svg") inside;
      }
    }
  }
</style>
