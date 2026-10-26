<script>
  import Whitelogo from "../atoms/Whitelogo.svelte";
  import MainNavigation from "../molecules/MainNavigation.svelte";
</script>

<footer>
  <div class="footer-top">
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
  </div>

  <section class="footer-bottom">
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
    padding: var(--space-medium) 0;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);

    * {
      color: var(--neutral-50);
    }

    .footer-top {
      display: flex;
      flex-direction: column;
      gap: var(--space-medium);

      margin-bottom: var(--space-medium);

      @media (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;
      }

      .footer-col-01 {
      }

      .footer-col-02 {
      }

      .footer-col-03 {
        a {
          transition: 0.3s;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    .footer-bottom {
      ul {
        list-style: none;
        margin: 0;
        padding: 0;

        @media (min-width: 1024px) {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          gap: var(--space-inner);
        }
      }

      li {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        @media (min-width: 768px) {
          line-height: 1.5;
        }

        &::before {
          content: "";
          flex-shrink: 0;
          width: 1.5em;
          height: 1.5em;
          background: url("/icons/check.svg") no-repeat center / contain;
        }
      }
    }
  }
</style>
