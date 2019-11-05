<script>
  import Avatar from './components/Avatar'
  import Banner from './components/Banner'
  import OverlayTrigger from './components/OverlayTrigger'
  import Theme from './context/Theme'
  import ZIndex from './context/ZIndex'
</script>

<style>
  button {
    background: red;
    border: none;
    padding: 10px;
  }
</style>

<Theme>
  <ZIndex initial={10}>
    <h1>Avatar</h1>
    <div>
      <Avatar size="sm" label="FM" />
      <Avatar size="sm" icon="cog" />
      <Avatar size="sm" image="https://ionicframework.com/docs/demos/api/avatar/avatar.svg" />
    </div>
    <div>
      <Avatar label="FM" />
      <Avatar icon="cog" />
      <Avatar image="https://ionicframework.com/docs/demos/api/avatar/avatar.svg" />
    </div>
    <div>
      <Avatar size="lg" label="FM" />
      <Avatar size="lg" icon="cog" />
      <Avatar size="lg" image="https://ionicframework.com/docs/demos/api/avatar/avatar.svg" />
    </div>
    <h1>Banner</h1>
    <Banner icon="cog">
      <span slot="title">
        This is a banner title
      </span>
      <span slot="body">
        This is a banner body this is a banner body this is a banner body this is a
        banner body this is a banner body this is a banner body this is a banner body
      </span>
    </Banner>
    <h1>Breadcrumbs</h1>
    <h1>Button</h1>
    <h1>ButtonGroup</h1>
    <h1>Calendar</h1>
    <h1>Card</h1>
    <h1>OverlayTrigger</h1>
    <OverlayTrigger trigger="click" placement={['bottom', 'left']}>
      <button slot="trigger">
        click
      </button>
      <ul slot="overlay" style="cursor: pointer;">
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </ul>
    </OverlayTrigger>

    <OverlayTrigger trigger="click" placement="right-top">
      <button slot="trigger">
        hover
      </button>
      <ul slot="overlay">
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </OverlayTrigger>
  </ZIndex>
</Theme>
