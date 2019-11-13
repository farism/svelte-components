<script>
  import { onMount } from 'svelte'
  import { subYears } from 'date-fns'
  import range from 'lodash/range'

  import Arrow from './components/Arrow'
  import ArrowContainer from './components/ArrowContainer'
  import Avatar from './components/Avatar'
  import Banner from './components/Banner'
  import Breadcrumbs from './components/Breadcrumbs'
  import Button from './components/Button'
  import Calendar from './components/Calendar'
  import Card from './components/Card'
  import Checkbox from './components/Checkbox'
  import DateInput from './components/DateInput'
  import Dropdown from './components/Dropdown'
  import DropdownItem from './components/DropdownItem'
  import Ellipses from './components/Ellipses'
  import EmptyState from './components/EmptyState'
  import Icon from './components/Icon'
  import Link from './components/Link'
  import List from './components/List'
  import ListGroup from './components/ListGroup'
  import ListItem from './components/ListItem'
  import RadioButton from './components/RadioButton'
  import Input from './components/Input'
  import Modal from './components/Modal'
  import Notation from './components/Notation'
  import OverlayTrigger from './components/OverlayTrigger'
  import Popover from './components/Popover'
  import Search from './components/Search'
  import Select from './components/Select'
  import SelectOption from './components/SelectOption'
  import Spinner from './components/Spinner'
  import Switch from './components/Switch'
  import Tabs from './components/Tabs'
  import TextArea from './components/TextArea'
  import Toast from './components/Toast'
  import Token from './components/Token'
  import Tooltip from './components/Tooltip'
  import Theme from './context/Theme'
  import ZIndex from './context/ZIndex'
  import { autofocus } from './actions/autofocus'

  let checkboxValue = true
  let radioValue = 0
  let searchValue = ''
  let typeaheadValue = 'this is a typeahead'
  let shortModalOpen = false;
  let tallModalOpen = false;
  let arrowRef = null
  let arrowContainerRef = null
  let tabs = ['this', 'is', 'a', 'set', 'of', 'random', 'strings', 'that', 'become', 'tabs']
  let tabRefs = {
    container: null,
    tabs: [],
  }
  const listItems = Array.from(Array(100)).map(function(_, i) {
    return `item ${i}`
  })
  let listSearch = 'search value'
  let dropdownSearch = 'dropdown search'
  let selectSearch = 'select search'
  let loading = false
  let disabled = false
  let calendarValue = subYears(new Date(), 50)
  let selectValue = null

  function toggleLoading() {
    loading = !loading
  }

  function toggleDisabled() {
    disabled = !disabled
  }

  // $: console.log(typeaheadValue)

  function calendarDisabledDate(date) {
    return date.getDate() === new Date().getDate() + 1
  }

  setTimeout(function(){
    tabs[0] = 'this (012 fsa31 fafaf a)'

    console.log(dropdownSearch)
  }, 5000)

  onMount(function(){
    // console.log({arrowRef, arrowContainerRef, tabRefs})
  })
</script>

<style>
  :global(body) {
    font-family: 'Lato', sans-serif;
  }

  .table-row {
    --textarea-resize: none;

    background: lightgray;
  }

  .table-row:hover {
    --textarea-resize: both;
  }
</style>

<svelte:head>
  <link href="https://fonts.googleapis.com/css?family=Lato:400,400i,500,700,900" rel="stylesheet">
</svelte:head>

<div style="padding: 100px 25px;">
  <Theme>
    <ZIndex initial={10}>
      <div>
        <h1>Arrow</h1>
        <div>
          <Arrow up bind:ref={arrowRef} />
          <Arrow down />
          <Arrow left />
          <Arrow right />
        </div>
      </div>

      <div>
          <h1>Arrow Container</h1>
          <div>
            <ArrowContainer placement="top-left" target={arrowContainerRef}>
              <span style="display: inline-block; border: 1px solid black; padding: 20px">
                top-left placement
              </span>
            </ArrowContainer>
            <div style="margin-top: 10px;">
              <Icon bind:ref={arrowContainerRef} icon="cog" />
            </div>
          </div>
        </div>

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
        <div>
          <Avatar lg disabled label="FM" />
          <Avatar lg disabled icon="cog" />
          <Avatar lg disabled image="https://ionicframework.com/docs/demos/api/avatar/avatar.svg" />
        </div>
        <div>
          <Avatar lg disabled clickable label="FM" />
          <Avatar lg disabled clickable icon="cog" />
          <Avatar lg disabled clickable image="https://ionicframework.com/docs/demos/api/avatar/avatar.svg" />
        </div>
        <div>
          <Avatar lg clickable label="FM" />
          <Avatar lg clickable icon="cog" />
          <Avatar lg clickable image="https://ionicframework.com/docs/demos/api/avatar/avatar.svg" />
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
        <button on:click={toggleLoading}>toggle loading state</button>
        <button on:click={toggleDisabled}>toggle disabled state</button>

        <br />
        <br />

        <div>
          <Button {loading} {disabled} sm>Primary (default)</Button>
          <Button {loading} {disabled} sm secondary>Secondary</Button>
          <Button {loading} {disabled} sm tertiary>Tertiary</Button>
          <Button {loading} {disabled} sm form>Form</Button>
          <Button {loading} {disabled} sm dropdown>Dropdown</Button>
        </div>

        <br />

        <div>
          <Button {loading} {disabled}>Primary (default)</Button>
          <Button {loading} {disabled} secondary>Secondary</Button>
          <Button {loading} {disabled} tertiary>Tertiary</Button>
          <Button {loading} {disabled} form>Form</Button>
          <Button {loading} {disabled} dropdown>Dropdown</Button>
        </div>

        <br />

        <div>
          <Button {loading} {disabled} lg>Primary (default)</Button>
          <Button {loading} {disabled} lg secondary>Secondary</Button>
          <Button {loading} {disabled} lg tertiary>Tertiary</Button>
          <Button {loading} {disabled} lg form>Form</Button>
          <Button {loading} {disabled} lg dropdown>Dropdown</Button>
        </div>

        <br />

        <div>
          <Button {loading} {disabled} sm primary icon="cog" />
          <Button {loading} {disabled} sm secondary icon="cog" />
          <Button {loading} {disabled} sm tertiary icon="cog" />
          <Button {loading} {disabled} sm form icon="cog" />
        </div>

        <br />

        <div>
          <Button {loading} {disabled} icon="cog" />
          <Button {loading} {disabled} secondary icon="cog" />
          <Button {loading} {disabled} tertiary icon="cog" />
          <Button {loading} {disabled} form icon="cog" />
        </div>

        <br />

        <div>
          <Button {loading} {disabled} lg icon="cog" />
          <Button {loading} {disabled} lg secondary icon="cog" />
          <Button {loading} {disabled} lg tertiary icon="cog" />
          <Button {loading} {disabled} lg form icon="cog" />
        </div>

        <br />

        <div>
          <Button {loading} {disabled} primary icon="cog">Label goes here</Button>
          <Button {loading} {disabled} secondary iconRight="cog">Label goes here</Button>
          <Button {loading} {disabled} tertiary iconRight="cog">Label goes here</Button>
          <Button {loading} {disabled} form iconRight="cog">Label goes here</Button>
          <Button {loading} {disabled} dropdown icon="cog">Label goes here dropdown should ellipses</Button>
        </div>

        <div>
          <Button {loading} {disabled} primary icon="cog">Label goes here</Button>
          <Button {loading} {disabled} secondary iconRight="cog">Label goes here</Button>
          <Button {loading} {disabled} tertiary iconRight="cog">Label goes here</Button>
          <Button {loading} {disabled} form iconRight="cog">Label goes here</Button>
          <Button {loading} {disabled} dropdown icon="cog">Label goes here dropdown should ellipses</Button>
        </div>

        <div>
          <Button {loading} {disabled} primary icon="cog">Label goes here</Button>
          <Button {loading} {disabled} secondary iconRight="cog">Label goes here</Button>
          <Button {loading} {disabled} tertiary iconRight="cog">Label goes here</Button>
          <Button {loading} {disabled} form iconRight="cog">Label goes here</Button>
          <Button {loading} {disabled} dropdown icon="cog">Label goes here dropdown should ellipses</Button>
        </div>

        <div>
          <Button {loading} {disabled} primary dropdown icon="cog">Label goes here</Button>
          <Button {loading} {disabled} primary dropdown iconRight="cog">Label goes here</Button>
          <Button {loading} {disabled} primary dropdown iconRight="cog">Label goes here</Button>
          <Button {loading} {disabled} primary dropdown iconRight="cog">Label goes here</Button>
          <Button {loading} {disabled} primary dropdown icon="cog">Label goes here dropdown should ellipses</Button>
        </div>
      </div>

      <h1>ButtonGroup</h1>

      <div>
        <h1>Calendar</h1>
        <div>
          <Calendar disabledDate={calendarDisabledDate} />

          <br />

          <Calendar bind:value={calendarValue} />

          {calendarValue}
        </div>
      </div>

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

        <br />

        <Checkbox disabled />

        <br />

        <Checkbox disabled bind:checked={checkboxValue} />

        checked: {checkboxValue}
      </div>

      <div>
        <h1>Date Input</h1>
        <div>
          <DateInput />
        </div>
      </div>

      <div>
        <h1>Dropdown</h1>
        <div>
          <Dropdown label="Primary Dropdown" primary onSelect={console.log} bind:search={dropdownSearch}>
            <DropdownItem value="item1">Item 1</DropdownItem>
            <DropdownItem value="item2">Item 2</DropdownItem>
            <DropdownItem value="item3">Item 3</DropdownItem>
            <DropdownItem value="item4">Item 4</DropdownItem>
            <DropdownItem value="item5">Item 5</DropdownItem>
          </Dropdown>

          <br />
          <br />

          <Dropdown label="Secondary Dropdown" onSelect={console.log}>
            <DropdownItem value="item1">Item 1</DropdownItem>
            <DropdownItem value="item2">Item 2</DropdownItem>
            <DropdownItem value="item3">Item 3</DropdownItem>
            <DropdownItem value="item4">Item 4</DropdownItem>
            <DropdownItem value="item5">Item 5</DropdownItem>
          </Dropdown>
        </div>
      </div>

      <div>
        <h1>Ellipses</h1>
        <div>
          <Ellipses width="150px">
            a very short label is in here
          </Ellipses>

          <br />

          <Ellipses width="300px">
            this is a single line test that should ellipses this is a single
            line test that should ellipses
          </Ellipses>

          <br />

          <Ellipses lines={2} width="300px">
            this is a two line test that should ellipses this is two a two line
            test that should ellipses this is a two line test that should
            ellipses this is a two line test that should ellipses
          </Ellipses>
        </div>
      </div>

      <div>
        <h1>Empty State</h1>
        <div>
          <EmptyState>
            <img slot="image" alt="empty image" src="https://core.procore.com/latest/assets/empty_state.png" />
            <div slot="title">
              This is a slot based empty state title
            </div>
            <div slot="message">
              this is a slot based empty state message
            </div>
            <div slot="buttons">
              <Button>Click Here</Button>
            </div>
          </EmptyState>

          <EmptyState
            image="https://core.procore.com/latest/assets/empty_state.png"
            title="This is an prop based empty state title"
            message="this is a prop based empty state message"
          >
            <div slot="buttons">
              <Button>Click Here</Button>
            </div>
          </EmptyState>
        </div>
      </div>

      <div>
        <h1>Icon</h1>
        <div>
          <Icon sm icon="x" />
          <Icon md icon="rotate-right" />
          <Icon lg icon="cog" />
        </div>

        <br />

        <div>
          <Icon sm icon="x" />
          <Icon md icon="rotate-right" />
          <Icon lg icon="cog" />
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
        <h1>List</h1>

        <div style="--list-max-height: 312px">
          <Card>
            <List onSearch={console.log} onSelect={console.log} bind:search={listSearch}>
              <div slot="header">
                <Button>Header Button</Button>
              </div>

              {#each listItems as item, i}
                {#if i % 20 === 0}
                  <ListGroup>Group {Math.floor(i / 20)}</ListGroup>
                {/if}

                <ListItem active={i === 5} value={{item}}>
                  <span slot="left">
                    <Icon icon="cog" />
                  </span>

                  {item}
                </ListItem>
              {/each}

              <div slot="footer">
                <Button>Footer Button</Button>
              </div>
            </List>
          </Card>
        </div>
      </div>

      <div>
        <h1>Modal</h1>

        <button on:click={() => shortModalOpen = true}>open short modal</button>

        <button on:click={() => tallModalOpen = true}>open tall modal</button>

        <Modal bind:open={shortModalOpen}>
          <div slot="title">
            Modal Title
          </div>
          <div slot="body">
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

        <Modal bind:open={tallModalOpen}>
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
        <h1>Notation</h1>
        <Notation required>
          * this field is required
        </Notation>

        <br /><br />

        <Notation error>
          there was an error
        </Notation>

        <br /><br />

        <Notation pagination>
          Displaying 1-30 of 110
        </Notation>
      </div>
      <div>
        <h1>OverlayTrigger</h1>
        <OverlayTrigger trigger="click" placement="bottom">
          <button slot="trigger">
            click
          </button>
          <ul slot="overlay" style="background: white; cursor: pointer;">
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
          </ul>
        </OverlayTrigger>

        <OverlayTrigger trigger="hover" placement="top">
          <button slot="trigger">
            hover
          </button>
          <ul slot="overlay" style="background: white;">
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </OverlayTrigger>
      </div>

      <div>
        <h1>Popover</h1>
        <div>
          <Popover placement="right">
            <span slot="trigger">
              <Button>Click</Button>
            </span>
            <div slot="message">
              This is a click popover
            </div>
          </Popover>
        </div>
      </div>

      <div>
        <h1>RadioButton</h1>
        <RadioButton bind:group={radioValue} value={0}>
          hello world
        </RadioButton>

        <br />

        <div style="display:flex;">
          <RadioButton bind:group={radioValue} value={1} /> custom label
        </div>

        selected: {radioValue}
      </div>

      <div>
        <h1>Search</h1>

        <h3>Search</h3>

        <Search onSubmit={(value) => searchValue = value} />

        <div>search value: {searchValue}</div>

        <h3>Typeahead</h3>

        <Search typeahead bind:value={typeaheadValue} />
      </div>

      <div>
        <h1>Select</h1>
        <div>
          <Select
            placeholder="Select Item"
            bind:search={selectSearch}
            bind:value={selectValue}
          >
            {#each range(1, 20) as i}
              <SelectOption value="item {i}" selected={`item ${i}` === selectValue}>
                Item {i}
              </SelectOption>
            {/each}
          </Select>

          {selectValue}

          <br />
        </div>
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
        <h1>Switch</h1>
        <div>
          <Switch  />

          <br/>

          <Switch checked />

          <br/>

          <Switch disabled />

          <br/>

          <Switch checked disabled />
        </div>
      </div>

      <div>
        <h1>Toast</h1>
        <div>
          <Toast>
            wow there are multiple lines but it still ellipses at the end in everything except IE11
            wow there are multiple lines but it still ellipses at the end in everything except IE11
            wow there are multiple lines but it still ellipses at the end in everything except IE11
          </Toast>

          <br /><br />

          <Toast error>This is an error toast</Toast>

          <br /><br />

          <Toast success>This is a success toast</Toast>
        </div>
      </div>

      <div>
        <h1>Tabs</h1>
        <div>
          <Tabs bind:refs={tabRefs} tabs={tabs} active={tabs[tabs.length - 1]} let:tab>
            <a href="#">{tab}</a>
          </Tabs>
        </div>
      </div>

      <div>
        <h1>TextArea</h1>
        <div>
          <TextArea value="This is some text" />

          <br /><br />

          <TextArea disabled value="This is some disabled text" />

          <br /><br />

          <TextArea error value="This is some errored text" />

          <br /><br />

          <div class="table-row">
            <TextArea value="Table row shows resize on hover with css vars" />
          </div>
        </div>
      </div>

      <div>
        <h1>Token</h1>
        <div>
          <Token>Token 1</Token>

          <br /><br />

          <Token icon="cog">Token 1</Token>

          <br /><br />

          <Token onClear={() => {}}>Token 1</Token>

          <br /><br />

          <Token disabled onClear={() => {}}>Token 1</Token>
        </div>
      </div>

      <div style="padding: 0 100px">
        <h1>Tooltip</h1>
        <div>
          <Tooltip trigger="hover" placement="top">
            <span slot="trigger">
              <Button>Top</Button>
            </span>
            <div slot="message">
              This is a hover tooltip
            </div>
          </Tooltip>

          <Tooltip trigger="hover" placement="top-left">
            <span slot="trigger">
              <Button>Top Left</Button>
            </span>
            <div slot="message">
              This is a hover tooltip
            </div>
          </Tooltip>

          <Tooltip trigger="hover" placement="top-right">
            <span slot="trigger">
              <Button>Top Right</Button>
            </span>
            <div slot="message">
              This is a hover tooltip
            </div>
          </Tooltip>

          <Tooltip trigger="hover" placement="right">
            <span slot="trigger">
              <Button>Right</Button>
            </span>
            <div slot="message">
              This is a hover tooltip
            </div>
          </Tooltip>

          <Tooltip trigger="hover" placement="right-top">
            <span slot="trigger">
              <Button>Right Top</Button>
            </span>
            <div slot="message">
              This is a hover tooltip
            </div>
          </Tooltip>

          <Tooltip trigger="hover" placement="right-bottom">
            <span slot="trigger">
              <Button>Right Bottom</Button>
            </span>
            <div slot="message">
              This is a hover tooltip
            </div>
          </Tooltip>

          <Tooltip trigger="hover" placement="left">
            <span slot="trigger">
              <Button>Left</Button>
            </span>
            <div slot="message">
              This is a hover tooltip
            </div>
          </Tooltip>

          <Tooltip trigger="hover" placement="left-top">
            <span slot="trigger">
              <Button>Left Top</Button>
            </span>
            <div slot="message">
              This is a hover tooltip This is a hover tooltip
            </div>
          </Tooltip>

          <Tooltip trigger="hover" placement="left-bottom">
            <span slot="trigger">
              <Button>Left Bottom</Button>
            </span>
            <div slot="message">
              This is a hover tooltip
            </div>
          </Tooltip>

          <Tooltip trigger="hover" placement="bottom">
            <span slot="trigger">
              <Button>Bottom</Button>
            </span>
            <div slot="message">
              This is a hover tooltip
            </div>
          </Tooltip>

          <Tooltip trigger="hover" placement="bottom-left">
            <span slot="trigger">
              <Button>Bottom Left</Button>
            </span>
            <div slot="message">
              This is a hover tooltip
            </div>
          </Tooltip>

          <Tooltip trigger="click" placement="bottom-right">
            <span slot="trigger">
              <Button>Bottom Right</Button>
            </span>
            <div slot="message">
              This is a hover tooltip
            </div>
          </Tooltip>
        </div>
      </div>

    </ZIndex>
  </Theme>
</div>
