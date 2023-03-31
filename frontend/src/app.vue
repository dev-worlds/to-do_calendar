<template>
  <f7-app v-bind="f7params" dark>

    <!-- Left panel with cover effect-->
    <f7-panel left cover dark>
      <f7-view>
        <f7-page>
          <f7-navbar title="Left Panel"></f7-navbar>
          <f7-block>Left panel content goes here</f7-block>
        </f7-page>
      </f7-view>
    </f7-panel>


    <!-- Right panel with reveal effect-->
    <f7-panel right reveal dark>
      <f7-view>
        <f7-page>
          <f7-navbar title="Right Panel"></f7-navbar>
          <f7-block>Right panel content goes here</f7-block>
        </f7-page>
      </f7-view>
    </f7-panel>


    <!-- Views/Tabs container -->
    <f7-views tabs class="safe-areas">
      <!-- Tabbar for switching views-tabs -->
      <f7-toolbar tabbar labels bottom>
        <f7-link
            tab-link-active
            tab-link="#view-today"
            icon-md="material:event_note" text="Today"></f7-link>
        <!--        <f7-link tab-link="#view-catalog" icon-ios="f7:square_list_fill" icon-aurora="f7:square_list_fill"
                         icon-md="material:view_list" text="Catalog"></f7-link>-->
        <f7-link
            tab-link="#view-settings"
            icon-ios="f7:gear"
            icon-aurora="f7:gear"
            icon-md="material:settings"
            text="Settings"></f7-link>
      </f7-toolbar>

      <!-- Your main view/tab, should have "view-main" class. It also has "tab-active" class -->
      <f7-view id="view-today" main tab tab-active url="/"></f7-view>

      <!-- Catalog View -->
      <!--<f7-view id="view-catalog" name="catalog" tab url="/catalog/"></f7-view>-->

      <!-- Settings View -->
      <f7-view id="view-settings" name="settings" tab url="/settings/"></f7-view>

    </f7-views>


    <!-- Popup -->
    <popup/>

  </f7-app>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { f7, f7ready } from 'framework7-vue';
import { getDevice } from 'framework7/lite-bundle';
import cordovaApp from './js/cordova-app.js';

import routes from './js/routes.js';
import store from './js/store';
import Popup from "@/components/Popup.vue";

const device = getDevice();
// Framework7 Parameters
const f7params = {
  name: 'to-do calendar', // App name
  theme: 'auto', // Automatic theme detection


  id: 'io.framework7.myapp', // App bundle ID
  // App store
  store: store,
  // App routes
  routes: routes,
  // Register service worker (only on production build)
  serviceWorker: process.env.NODE_ENV === 'production' ? {
    path: '/service-worker.js',
  } : {},

  // Input settings
  input: {
    scrollIntoViewOnFocus: device.cordova && !device.electron,
    scrollIntoViewCentered: device.cordova && !device.electron,
  },
  // Cordova Statusbar settings
  statusbar: {
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },
};
// Login screen data

const alertLoginData = () => {
  f7.dialog.alert('Test alert', () => {
    f7.loginScreen.close();
  });
}
onMounted(() => {
  f7ready(() => {
    // Init cordova APIs (see cordova-app.js)
    if (device.cordova) {
      cordovaApp.init(f7);
    }

    // Call F7 APIs here
  });
});

</script>