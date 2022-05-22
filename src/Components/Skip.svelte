<script>
  import SkipIcon from "../assets/Icons/SkipIcon.svelte";
  export let isLoading;
</script>

<link rel="stylesheet" href="./styles/skip.css" />
{#if !isLoading}
  <div class="skip-wrapper">
    <div class="skip-label">Skip</div>
    <SkipIcon />
  </div>
{/if}
