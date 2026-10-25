<script>
  import logo from "#lib/assets/images/hydroflex-logo.svg";
  import PrimaryButton from "../atoms/PrimaryButton.svelte";
</script>

<header>
  <div class="header-wrapper">
    <div class="logo-wrapper">
      <a href="/">
        <img src={logo} alt="Hydroflex logo" />
      </a>
    </div>

    <div class="navigaton-wrapper">
      <PrimaryButton href="#" text="Contact" />
      <a href="#sidebar" class="openmenu-button" title="Open menu">
        <svg
          width="30"
          height="40"
          viewBox="-3 -3 82 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1H75M1 17H53.4167"
            stroke="#121212"
            stroke-width="6"
            stroke-linecap="round"
          />
          <path
            d="M1 1H75M1 17H53.4167"
            stroke="black"
            stroke-opacity="0.2"
            stroke-width="5"
            stroke-linecap="round"
          />
        </svg>
      </a>
    </div>
  </div>

  <!-- Menu voor mobiel -->
  <nav id="sidebar">
    <a href="#" class="closemenu-button" title="Sluit menu">
      <svg
        width="20"
        height="20"
        viewBox="-4 -4 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.51186 2.49705L55 55M1 53.5029L53.4881 1"
          stroke="#121212"
          stroke-width="7"
          stroke-linecap="round"
        />
        <path
          d="M2.51186 2.49705L55 55M1 53.5029L53.4881 1"
          stroke="black"
          stroke-opacity="0.2"
          stroke-width="5"
          stroke-linecap="round"
        />
      </svg>
    </a>

    <div class="sidebar-container">
      <section class="sidebar-col-01">
        <ul class="main-navigation">
          <li><a href="/">Home</a></li>
          <li><a href="/over-ons">Over ons</a></li>
          <li><a href="/diensten">Diensten</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </section>
    </div>
  </nav>
</header>

<style>
  header {
    .header-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: var(--space-sides);

      .logo-wrapper {
        display: flex;

        img {
          max-width: 66%;
        }
      }

      .navigaton-wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: var(--space-inner);
      }
    }
  }
  #sidebar {
    width: 100%;
    height: 100dvh;
    z-index: 999;
    position: absolute;
    top: 0;
    transform: translateY(-100%);
    transition: 0.3s ease-out;
    background-color: var(--neutral-50);
    display: flex;
    flex-direction: column;
    padding: var(--space-sides);

    .closemenu-button {
      text-align: right;
    }

    .sidebar-container {
      margin: auto;
      text-align: center;
    }

    &:target {
      transform: translateY(0);
    }
  }

  .main-navigation {
    font-weight: 600;
  }
</style>
