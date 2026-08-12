# CSS Account Settings Tabs

## 1. What does this do?
This component renders an interactive account settings dashboard containing side-by-side tab navigation panels (Profile, Security, Notifications) that switch dynamically using pure CSS checkbox/radio states.

## 2. How is it used?
Configure the tab inputs and connect them to active sections inside the dashboard frame:
```html
<input type="radio" name="settings-tab" id="t-profile" class="tab-trigger" checked>
<input type="radio" name="settings-tab" id="t-security" class="tab-trigger">

<div class="settings-dashboard">
  <aside role="tablist">
    <label for="t-profile" role="tab">Profile Settings</label>
    <label for="t-security" role="tab">Security Keys</label>
  </aside>

  <main class="settings-body">
    <section class="settings-panel panel-profile" role="tabpanel">
      <!-- Profile details form -->
    </section>
  </main>
</div>
```

## 3. Why is it useful?
It provides front-end developers with a lightweight dashboard panel switching pattern using native browser selection selectors, eliminating the need for heavy tab toggle scripts.
