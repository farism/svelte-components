<script>
  import Avatar from './components/Avatar'
  import Banner from './components/Banner'
  import Breadcrumbs from './components/Breadcrumbs'
  import Button from './components/Button'
  import Card from './components/Card'
  import Checkbox from './components/Checkbox'
  import EmptyState from './components/EmptyState'
  import Icon from './components/Icon'
  import Link from './components/Link'
  import RadioButton from './components/RadioButton'
  import Input from './components/Input'
  import OverlayTrigger from './components/OverlayTrigger'
  import Modal from './components/Modal'
  import Search from './components/Search'
  import Spinner from './components/Spinner'
  import Token from './components/Token'
  import Theme from './context/Theme'
  import ZIndex from './context/ZIndex'
  import { autofocus } from './actions/autofocus'

  let checkboxValue = true
  let radioValue = 0
  let searchValue = 'test'
  let modalOpen = false;
</script>

<style>
  :global(body) {
    font-family: 'Lato', sans-serif;
  }

  button {
    padding: 10px;
  }
</style>

<svelte:head>
  <link href="https://fonts.googleapis.com/css?family=Lato:400,400i,500,700,900" rel="stylesheet">
</svelte:head>

<div style="padding: 100px 50px;">
  <Theme>
    <ZIndex initial={10}>
      <div>
        <h1>Avatar</h1>
        <div>
          <Avatar sm label="FM" />
          <Avatar sm icon="cog" />
          <Avatar sm image="https://ionicframework.com/docs/demos/api/avatar/avatar.svg" />
        </div>
        <div>
          <Avatar label="FM" />
          <Avatar icon="cog" />
          <Avatar image="https://ionicframework.com/docs/demos/api/avatar/avatar.svg" />
        </div>
        <div>
          <Avatar lg label="FM" />
          <Avatar lg icon="cog" />
          <Avatar lg image="https://ionicframework.com/docs/demos/api/avatar/avatar.svg" />
        </div>
      </div>

      <div>
        <h1>Banner</h1>
        <Banner icon="warning-triangle-o" onDismiss={console.log}>
          <div slot="title">
            This is a banner title
          </div>
          <div slot="message">
            This is a banner body this is a banner body this is a banner body this is a
            banner body this is a banner body this is a banner body this is a banner body
          </div>
          <div slot="buttons">
            <Button>Button</Button>
          </div>
        </Banner>

        <br />

        <Banner variant="action">
          <div slot="title">
            This is a banner title
          </div>
          <div slot="message">
            This is a banner body this is a banner body this is a banner body this is a
            banner body this is a banner body this is a banner body this is a banner body
          </div>
          <div slot="buttons">
            <Button>Action</Button>
          </div>
        </Banner>

        <br />

        <Banner variant="error">
          <div slot="title">
            This is a banner title
          </div>
          <div slot="message">
            This is a banner body this is a banner body this is a banner body this is a
            banner body this is a banner body this is a banner body this is a banner body
          </div>
          <div slot="buttons">
            <Button>Error</Button>
          </div>
        </Banner>

        <br />

        <Banner variant="info">
          <div slot="title">
            This is a banner title
          </div>
          <div slot="message">
            This is a banner body this is a banner body this is a banner body this is a
            banner body this is a banner body this is a banner body this is a banner body
          </div>
          <div slot="buttons">
            <Button>Info</Button>
          </div>
        </Banner>

        <br />

        <Banner variant="success">
          <div slot="title">
            This is a banner title
          </div>
          <div slot="message">
            This is a banner body this is a banner body this is a banner body this is a
            banner body this is a banner body this is a banner body this is a banner body
          </div>
          <div slot="buttons">
            <Button>Success</Button>
          </div>
        </Banner>
      </div>

      <div>
        <h1>Breadcrumbs</h1>
        <div>
          <Breadcrumbs crumbs={['Level 1', 'Level 2', 'Level 3']} let:crumb>
            <a>
              {crumb}
            </a>
          </Breadcrumbs>
        </div>
      </div>

      <div>
        <h1>Button</h1>
        <div>
          <Button sm>Primary (default)</Button>
          <Button sm secondary>Secondary</Button>
          <Button sm tertiary>Tertiary</Button>
          <Button sm form>Form</Button>
          <Button sm dropdown>Dropdown</Button>
        </div>

        <br />

        <div>
          <Button>Primary (default)</Button>
          <Button secondary>Secondary</Button>
          <Button tertiary>Tertiary</Button>
          <Button form>Form</Button>
          <Button dropdown>Dropdown</Button>
        </div>

        <br />

        <div>
          <Button lg>Primary (default)</Button>
          <Button lg secondary>Secondary</Button>
          <Button lg tertiary>Tertiary</Button>
          <Button lg form>Form</Button>
          <Button lg dropdown>Dropdown</Button>
        </div>

        <br />

        <div>
          <Button sm primary icon="cog" />
          <Button sm secondary icon="cog" />
          <Button sm tertiary icon="cog" />
          <Button sm form icon="cog" />
          <Button sm dropdown icon="cog" />
        </div>

        <br />

        <div>
          <Button primary icon="cog" />
          <Button secondary icon="cog" />
          <Button tertiary icon="cog" />
          <Button form icon="cog" />
          <Button dropdown icon="cog" />
        </div>

        <br />

        <div>
          <Button lg primary icon="cog" />
          <Button lg secondary icon="cog" />
          <Button lg tertiary icon="cog" />
          <Button lg form icon="cog" />
          <Button lg dropdown icon="cog" />
        </div>

        <br />

        <div>
          <Button primary icon="cog">Label goes here</Button>
          <Button secondary iconRight="cog">Label goes here</Button>
          <Button tertiary iconRight="cog">Label goes here</Button>
          <Button form iconRight="cog">Label goes here</Button>
          <Button dropdown icon="cog">Label goes here dropdown should ellipses</Button>
        </div>
      </div>

      <h1>ButtonGroup</h1>
      <h1>Calendar</h1>

      <div>
        <h1>Card</h1>
        <Card>
          <div style="padding: 10px">
            This is a card!
          </div>
        </Card>

        <br />

        <Card level={40}>
          <div style="padding: 10px">
            This is a card!
          </div>
        </Card>
      </div>

      <div>
        <h1>Checkbox</h1>
        <Checkbox bind:checked={checkboxValue}>
          hello world
        </Checkbox>

        <br />

        <Checkbox bind:checked={checkboxValue} />

        <br />

        <Checkbox bind:checked={checkboxValue} indeterminate={true} />

        checked: {checkboxValue}
      </div>

      <div>
        <h1>Icon</h1>
        <div>
          <Icon size="sm" icon="x" />
          <Icon size="md" icon="rotate-right" />
          <Icon size="lg" icon="cog" />
        </div>

        <br />

        <div>
          <Icon size="sm" icon="x" />
          <Icon size="md" icon="rotate-right" />
          <Icon size="lg" icon="cog" />
        </div>
      </div>

      <div>
        <h1>Input</h1>

        <Input />

        <br />

        <Input value="some value" />

        <br />

        <Input disabled value="disabled" />

        <br />

        <Input error value="has error" />

        <br />

        <Input disabled error value="disabled and error" />
      </div>

      <div>
        <h1>Link</h1>

        <br /><br />

        <Link>Default Link</Link>

        <br /><br />

        <Link gray>Gray Link</Link>

        <br /><br />

        <span style="background: black;">
          <Link white>White Link</Link>
        </span>
      </div>

      <div>
        <h1>Modal</h1>

        <button on:click={() => modalOpen = true}>open modal</button>

        <Modal bind:open={modalOpen}>
          <div slot="title">
            Modal Title
          </div>
          <div slot="body" style="padding-bottom: 3000px;">
            Modal Body
          </div>
          <div slot="notation">
            Modal Notation
          </div>
          <div slot="buttons">
            <Button secondary>Cancel</Button>
            <Button>Submit</Button>
          </div>
        </Modal>
      </div>

      <div>
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

        <OverlayTrigger trigger="hover" placement="right-top">
          <button slot="trigger">
            hover
          </button>
          <ul slot="overlay">
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </OverlayTrigger>
      </div>

      <div>
        <h1>RadioButton</h1>
        <RadioButton bind:group={radioValue} value={0}>
          hello world
        </RadioButton>

        <br />

        <RadioButton bind:group={radioValue} value={1} />

        <br />

        <RadioButton bind:group={radioValue} value={2} />

        selected: {radioValue}
      </div>

      <div>
        <h1>Search</h1>

        <h3>Search</h3>

        <Search
          bind:value={searchValue}
          onChange={console.log}
          onClear={console.log}
          onSearch={console.log}
       />

        <div>search value: {searchValue}</div>

        <h3>Typeahead</h3>

        <Search
          typeahead
          onChange={console.log}
          onClear={console.log}
          onSearch={console.log}
       />
      </div>

      <div>
        <h1>Spinner</h1>
        <div>
          <Spinner xs />
          <Spinner sm />
          <Spinner />
          <Spinner lg />

          <Spinner lg loading>
            <div style="padding-top: 1000px; background: red;">
              Spinner Body
            </div>
          </Spinner>
        </div>
      </div>

      <div>
        <h1>Token</h1>
        <div>
          <Token>Token 1</Token>
          <Token icon="cog">Token 1</Token>
          <Token onClear={() => {}}>Token 1</Token>
          <Token disabled onClear={() => {}}>Token 1</Token>
        </div>
      </div>

    </ZIndex>
  </Theme>
</div>
