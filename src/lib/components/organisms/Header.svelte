<script>
  import logo from "#lib/assets/images/hydroflex-logo.svg";
  import PrimaryButton from "../atoms/PrimaryButton.svelte";
</script>

<header class="header">
  <div class="logo-wrapper">
    <img src={logo} alt="Hydroflex logo" />
  </div>

  <div class="navigaton-wrapper">
    <PrimaryButton href="#" text="Contact" />
    <a href="#sidebar" class="openmenu-btn" title="Open menu">
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

  <!-- Menu voor mobiel -->
  <nav id="sidebar">
    <div class="header-container">
      <a class="main-logo" href="/">
        <span>isaaceswa</span>
      </a>
      <a href="#" class="closemenu-btn" title="Sluit menu">
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
    </div>

    <div class="sidebar-container">
      <section class="sidebar-col-01">
        <h3>Navigate</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </section>

      <section class="sidebar-col-02">
        <h3>Connect</h3>
        <ul>
          <li>
            <a href="https://github.com/IsaacEswa" target="_blank">GitHub</a>
          </li>
          <li>
            <a
              href="https://nl.linkedin.com/in/isaac-eswarapatham-24277120a"
              target="_blank">LinkedIn</a
            >
          </li>
        </ul>
      </section>
    </div>

    <div class="sidebar-footer">
      <span class="status">Available for work</span>
      <a href="mailto:info@eswastudio.nl"><span> info@eswastudio.nl</span></a>
    </div>
  </nav>
</header>

<style>
  #sidebar {
    padding-top: 1.15em;
    padding-bottom: 25px;
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
    justify-content: space-between;

    &:target {
      transform: translateY(0);
    }
  }
</style>
