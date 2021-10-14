<template>
  
<v-container>
       
      <!-- <v-container class="grey lighten-5"> -->
        <v-virtual-scroll
          :items="items"
          height="800"
          item-height="430"
        >
          <v-row >
                  <v-col
                    cols="12"
                    sm="6"
                    md="5"
                    v-for="item in items"
                    :key="item"
                    >
                    <v-card
                      class="pa-2 ma-2"
                      outlined
                      tile>
                      <v-img
                        height="200"
                        position="center"
                        contain
                        src="https://cdn.vuetifyjs.com/images/cards/cooking.png">
                      </v-img>

                      <v-card-text>
                        <h1>{{item}}</h1>
                        <div class="my-5 text-subtitle-1">
                          descripcion
                        </div>
                        <div>Precio</div>
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <!-- <v-col
                    cols="12"
                    sm="6"
                    md="6">
                    <v-card
                      class="pa-2 ma-2"
                      outlined
                      tile>
                      <v-img
                        height="250"
                        position="center"
                        contain
                        src="https://cdn.vuetifyjs.com/images/cards/cooking.png">
                      </v-img>

                      <v-card-text>
                        <h1>{{item}}</h1>
                        <div class="my-5 text-subtitle-1">
                          descripcion
                        </div>
                        <div>Precio</div>
                      </v-card-text>
                    </v-card>
                  </v-col> -->
                  <!-- <v-col
                    cols="12"
                    sm="6"
                    md="6">
                    <v-card
                      class="pa-2 ma-2"
                      outlined
                      tile>
                      <v-img
                        height="250"
                        position="center"
                        contain
                        src="https://cdn.vuetifyjs.com/images/cards/cooking.png">
                      </v-img>

                      <v-card-text>
                        <h1>{{item}}</h1>
                        <div class="my-5 text-subtitle-1">
                          descripcion
                        </div>
                        <div>Precio</div>
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6">
                    <v-card
                      class="pa-2 ma-2"
                      outlined
                      tile>
                      <v-img
                        height="250"
                        position="center"
                        contain
                        src="https://cdn.vuetifyjs.com/images/cards/cooking.png">
                      </v-img>

                      <v-card-text>
                        <h1>{{item}}</h1>
                        <div class="my-5 text-subtitle-1">
                          descripcion
                        </div>
                        <div>Precio</div>
                      </v-card-text>
                    </v-card>
                  </v-col> -->
                </v-row>
        </v-virtual-scroll>
      <!-- </v-container> -->
     </v-container>
     </template>
       