<template>
  <v-container class="grey lighten-5">
    <!-- BAGIAN PERTAMA -->
    <v-row no-gutters>
      <v-col order="first">
        <v-card class="mx-auto" max-width="500">
          <v-list>
            <v-list-item-group v-model="model">
              <v-list-item v-for="(item, i) in items" :key="i" :to="item.path">
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title
                    class="nav-title"
                    v-text="item.text"
                    :to="item.path"
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-group :value="false" no-action sub-group>
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title>Admin</v-list-item-title>
                  </v-list-item-content>
                </template>

                <v-list-item
                  v-for="(item, i) in admins"
                  :key="i"
                  :to="item.path"
                  link
                >
                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-title
                    class="nav-title"
                    v-text="item.text"
                  ></v-list-item-title>
                </v-list-item>
              </v-list-group>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
      <!-- BAGIAN KEDUA -->
      <v-col order="second">
        <v-card width="1080">
          <router-view />
        </v-card>
      </v-col>
      <!-- BAGIAN KETIGA -->
      <v-col order="last">
        <v-card max-width="375" class="mx-auto">
          <v-img
            src="https://cdn.vuetifyjs.com/images/lists/ali.png"
            height="300px"
            dark
          >
            <v-row class="fill-height">
              <v-spacer></v-spacer>
            </v-row>
          </v-img>

          <v-list two-line>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo">
                  mdi-phone
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content class="profil-content">
                <v-list-item-title>(650) 555-1234</v-list-item-title>
                <v-list-item-subtitle>Mobile</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-icon>
                <v-icon>mdi-message-text</v-icon>
              </v-list-item-icon>
            </v-list-item>

            <v-list-item>
              <v-list-item-action></v-list-item-action>

              <v-list-item-content class="profil-content">
                <v-list-item-title>(323) 555-6789</v-list-item-title>
                <v-list-item-subtitle>Work</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-icon>
                <v-icon>mdi-message-text</v-icon>
              </v-list-item-icon>
            </v-list-item>

            <v-divider></v-divider>

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo">
                  mdi-email
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content class="profil-content">
                <v-list-item-title>aliconnors@example.com</v-list-item-title>
                <v-list-item-subtitle>Personal</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-action></v-list-item-action>

              <v-list-item-content class="profil-content">
                <v-list-item-title>ali_connors@example.com</v-list-item-title>
                <v-list-item-subtitle>Work</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo">
                  mdi-map-marker
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content class="profil-content">
                <v-list-item-title>1400 Main Street</v-list-item-title>
                <v-list-item-subtitle>Orlando, FL 79938</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  export default {
    data: () => ({
      items: [
        {
          icon: 'mdi-view-dashboard',
          text: 'Dashboard',
          path: '/hello',
        },
        {
          icon: 'mdi-inbox',
          text: 'Inbox',
          path: '/inbox',
        },
        {
          icon: 'mdi-star',
          text: 'Star',
          path: '/star',
        },
      ],
      admins: [
        {
          icon: 'mdi-account-multiple-outline',
          text: 'Management',
          path: '/management',
        },
      ],
      model: 1,
    }),
  }
</script>
