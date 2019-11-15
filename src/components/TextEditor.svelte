<script context="module">
  const TINY_MCE_VERSION = '4.7.13'

  const TINY_MCE_URL = `https://s3.amazonaws.com/procore-core/tinymce/${TINY_MCE_VERSION}`

  const SCRIPT_ID = 'tiny-mce-core-source'
</script>

<script>
  import { onMount, beforeUpdate, tick } from 'svelte'

  const locale = 'en'

  const tinyMCEjs = `${TINY_MCE_URL}/tinymce.min.js`

  const tinyMCEcss = `${TINY_MCE_URL}/tinymce.min.css`

  const tinyMCElanguages = `${TINY_MCE_URL}/langs/${locale}.js`

  // const tinyMCEplugins = `${TINY_MCE_URL}/plugins/`

  let loadScript = false

  function onLoaded(e) {
    // isLoaded = true
  }

  onMount(function() {
    // if (document.getElementById('tiny-mce-core-source') === null) {
    //   loadScript = true
    // }
  })

  beforeUpdate(async function() {
    await tick()
    console.log('before update', document.getElementById(SCRIPT_ID))
  })
</script>

<style>
  .text-editor {

  }
</style>

<div class="text-editor">
  {loadScript}

  {#if loadScript}
  {/if}
  <script id="{SCRIPT_ID}" src="{tinyMCEjs}" on:load={onLoaded} ></script>
</div>
